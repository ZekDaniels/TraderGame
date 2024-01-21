import { DataTypes } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../db/connection";
import User from "./User";
import { createMainPortfolio, updateMainPortfolio } from "../events/portfolioEvents";
console.log(User);
class Portfolio extends BaseModel {
    public name!: string;
    public status!: boolean;
    public isMain!: boolean;
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
        isMain: {
            allowNull: false,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: sequelize,
        tableName: "portfolios",
        createdAt: "created_at",
        updatedAt: "last_updated",
        indexes: [
            {
                unique: false,
                fields: ["UserId"],
            }
        ]
    }
);


Portfolio.belongsTo(User, { onDelete: "CASCADE", onUpdate: "CASCADE" });
User.hasOne(Portfolio);
User.afterCreate(createMainPortfolio);
Portfolio.afterUpdate(updateMainPortfolio);
export default Portfolio;