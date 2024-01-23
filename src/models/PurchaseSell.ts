import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";
import Share from "./Share";
import Portfolio from "./Portfolio";
import { LogType } from "../config/consts";

const logTypes = Object.values(LogType);

class PurchaseSell extends BaseModel {
    public name!: string;
    public quantity!: number;
    public price!: number;
    public logType!: number;
}

PurchaseSell.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        logType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [logTypes]
            }
        },
        ShareId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        PortfolioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: sequelize,
        tableName: "purchase_sell",
        createdAt: "created_at",
        updatedAt: "last_updated",
        indexes: [
            {
                unique: false,
                fields: ["ShareId"],
            },
            {
                unique: false,
                fields: ["PortfolioId"],
            },
            {
                unique: false,
                fields: ["logType"],
            }
        ]
    }
);

PurchaseSell.belongsTo(Share, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Share.hasMany(PurchaseSell);

PurchaseSell.belongsTo(Portfolio, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Portfolio.hasMany(PurchaseSell);

export default PurchaseSell;