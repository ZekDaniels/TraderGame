import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";
import Share from "./Share";
import Portfolio from "./Portfolio";

class Share_Portfolio extends BaseModel {
    public quantity!: number;
    public price!: number;
}

Share_Portfolio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

    },
    {
        sequelize: sequelize,
        tableName: "shares_of_portfolios",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);


Portfolio.belongsToMany(Share, { through: Share_Portfolio, onDelete: "CASCADE", onUpdate: "CASCADE" });
Share.belongsToMany(Portfolio, { through: Share_Portfolio, onDelete: "CASCADE", onUpdate: "CASCADE" });

export default Share_Portfolio;