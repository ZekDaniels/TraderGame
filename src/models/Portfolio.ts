import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelizeConnection from "../db/connection";
import User from "./User";
import { createMainPortfolio } from "../events/portfolioEvents";
console.log(User);
class Portfolio extends BaseModel {
    public name!: string;
    public status!: boolean;
}

Portfolio.init(
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

        status: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize: sequelizeConnection,
        tableName: "portfolios",
        createdAt: "created_at",
        updatedAt: "last_updated",
    }
);


Portfolio.belongsTo(User, { onDelete: "CASCADE", onUpdate: "CASCADE" });
User.hasOne(Portfolio);
User.afterCreate(createMainPortfolio);
export default Portfolio;