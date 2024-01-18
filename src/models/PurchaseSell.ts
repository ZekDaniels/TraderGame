import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelizeConnection from "../db/connection";
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
        sequelize: sequelizeConnection,
        tableName: "purchase_sell_logs",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);

PurchaseSellLog.belongsTo(Share);
Share.hasMany(PurchaseSellLog);

PurchaseSellLog.belongsTo(Portfolio);
Portfolio.hasMany(PurchaseSellLog);

export default PurchaseSellLog;