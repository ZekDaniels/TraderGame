import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";
import Share from "./Share";
import Portfolio from "./Portfolio";

class PurchaseSell extends BaseModel {
    public name!: string;
    public quantity!: number;
    public price!: number;
    public Type!: number;
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
        Type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize: sequelize,
        tableName: "purchase_sell",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);

PurchaseSell.belongsTo(Share, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Share.hasMany(PurchaseSell);

PurchaseSell.belongsTo(Portfolio, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Portfolio.hasMany(PurchaseSell);

export default PurchaseSell;