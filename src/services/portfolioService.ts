import { Op } from "sequelize";
import sequelize from "../db/connection";
import Portfolio from "../models/Portfolio";
import { log } from "console";

export const createPortfolioService = async (payload: any) => {
    const portfolio = await Portfolio.create(payload);
    return portfolio;
};

export const getPortfolioService = async (where: any) => {

    const portfolio = await Portfolio.findOne({
        where
    });
    return portfolio;
};

export const getByIdPortfolioService = async (id: number) => {
    return await Portfolio.findByPk(id);
};

export const getPortfoliosService = async () => {
    return await Portfolio.findAll();
};

export const updatePortfolioService = async (portfolio: any, portfolioId: number, userId: number) => {

    //own portfolio
    const where: any = {
        [Op.and]: [],
    };
    if (portfolioId) {
        where[Op.and].push({ id: portfolioId, UserId: userId });
    }
    const portfolioExists = await getPortfolioService(where);
    

    if (!portfolio && !portfolioId) {
        throw new Error("Please provide portfolio data and/or portfolio id to update");
    }
    if (portfolioId && isNaN(portfolioId) || !portfolioExists) {
        throw new Error("Invalid portfolio id");
    }
    if (portfolio.id || portfolioId) {
        const id = portfolio.id || portfolioId;

        return await sequelize.transaction(async transaction => {
            return await Portfolio.update(portfolio, {
                where: { id: id },
                individualHooks: true,
                transaction: transaction
            });
        });
    }
};

export const deletePortfolioService = async (portfolioId: number, userId: number) => {
    const where: any = {
        [Op.and]: [],
    };
    if (portfolioId) {
        where[Op.and].push({ id: portfolioId, UserId: userId });
    }
    const portfolio = await getPortfolioService(where);

    if (!portfolioId) {
        throw new Error("Please portfolio id to delete");
    }
    if (portfolioId && isNaN(portfolioId) || !portfolio) {
        throw new Error("Invalid portfolio id");
    }
    if (portfolio.isMain) {
        throw new Error("Main portfolio is cannot be deleted");
    }

    return await Portfolio.destroy({
        where: { id: portfolioId },
    });
};