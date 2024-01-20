import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";

class Share extends BaseModel {
    public name!: string;
    public lastPrice!: number;
    public symbol!: string;
    public status!: boolean;
}

Share.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        lastPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        symbol: {
            allowNull: false,
            type: DataTypes.STRING(3),
            unique: true,
            validate: {
                isUppercase: true,
                len: [3, 3]
            }
        },

        status: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,

        },
    },
    {
        sequelize: sequelize,
        tableName: "shares",
        createdAt: "created_at",
        updatedAt: "last_updated",
        indexes: [
            {
                unique: true,
                fields: ["symbol"], // Index on the 'email' column
            }
        ]
    }
);


export default Share;
