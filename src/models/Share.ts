import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelizeConnection from "../db/connection";

class Share extends BaseModel {
    public name!: string;
    public symbol!: string;
    public currentPrice!: string;
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
        symbol: {
            allowNull: false,
            type: DataTypes.STRING(3),
            unique: true,
            validate: {
                isUppercase: true,
                len: [3, 3]
            }
        },
        currentPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: "shares",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);


export default Share;
