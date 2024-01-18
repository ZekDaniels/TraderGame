import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelizeConnection from "../db/connection";
import Share from "./Share";
import Portfolio from "./Portfolio";

class ShareOfPortfolio extends BaseModel {
    public name!: string;
    public quantity!: number;
    public price!: number;
}

ShareOfPortfolio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
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
        sequelize: sequelizeConnection,
        tableName: "shares_of_portfolios",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);


Portfolio.belongsToMany(Share, {
    through: ShareOfPortfolio,
});
Share.belongsToMany(Portfolio, {
    through: ShareOfPortfolio,
});

export default ShareOfPortfolio;