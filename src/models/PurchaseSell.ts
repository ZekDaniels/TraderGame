import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";
import Share from "./Share";
import Portfolio from "./Portfolio";

class PurchaseSellLog extends BaseModel {
    public name!: string;
    public quantity!: number;
    public price!: number;
    public logType!: number;
}

PurchaseSellLog.init(
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
            allowNull: false
        },
    },
    {
        sequelize: sequelize,
        tableName: "purchase_sell_logs",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);

PurchaseSellLog.belongsTo(Share, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Share.hasMany(PurchaseSellLog);

PurchaseSellLog.belongsTo(Portfolio, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Portfolio.hasMany(PurchaseSellLog);

export default PurchaseSellLog;