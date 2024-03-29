import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";
import Share from "./Share";
import Portfolio from "./Portfolio";
import PurchaseSell from "./PurchaseSell";
import { manageSharePortfolio } from "../events/sharePortfolioEvents";
import { updateSharePrice } from "../events/shareEvents";

class Share_Portfolio extends BaseModel {
    public quantity!: number;
    public price!: number;
    public PortfolioId: number;
    public ShareId: number;
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
        ShareId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        sequelize: sequelize,
        tableName: "shares_of_portfolios",
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
            }
        ]
    }
);


Portfolio.belongsToMany(Share, { through: Share_Portfolio, onDelete: "CASCADE", onUpdate: "CASCADE", as: "shares" });
Share.belongsToMany(Portfolio, { through: Share_Portfolio, onDelete: "CASCADE", onUpdate: "CASCADE", as: "portfolios" });
PurchaseSell.afterCreate(manageSharePortfolio);
PurchaseSell.afterCreate(updateSharePrice);

export default Share_Portfolio;