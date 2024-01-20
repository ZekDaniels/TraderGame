import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelizeConnection from "../db/connection";
import { compareSync } from "../util/encrypt";
import { ROLE } from "../config/consts";
import { encryptPasswordIfChanged } from "../events/userEvents";

const roles = Object.values(ROLE);
class User extends BaseModel {
    public name!: string;
    public email!: string;
    public password!: string;
    public mobile!: string;

    public status!: boolean;

    static validPassword: (password: string, hash: string) => boolean;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 30]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                min: 8
            }
        },
        status: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
        },
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 2,
            validate: {
                isIn: [roles]
            }
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "last_updated",
        indexes: [
            {
                unique: true,
                fields: ["email"],
            }
        ]
    }
);

User.validPassword = (password: string, hash: string) => {
    return compareSync(password, hash);
};

User.beforeCreate(encryptPasswordIfChanged);
User.beforeUpdate(encryptPasswordIfChanged);

export default User;
