import Share_Portfolio from "../models/ShareOfPortfolio";
import Portfolio from "../models/Portfolio";
import Share from "../models/Share";
import { ONE_HOUR } from "../config/consts";


export const getSharePortfolioByIdService = async (id: number) => {
    return await Share_Portfolio.findByPk(id);
};
export const getSharePortfolioService = async (where: any) => {
    return await Share_Portfolio.findOne(where);
};

export const getSharePortfoliosByUserService = async (userId: number) => {
    return await Share.findAndCountAll({
        include: [
            { model: Portfolio, as: "portfolios", where: { UserId: userId } }
        ],
    });
};

export const updateSharePortfolioPriceService = async (price: number, sharePortfolioId: number, userId: number) => {
    //own portfolio

    if (!price && !sharePortfolioId) {
        throw new Error("Please provide a share portfolio data and/or price.");
    }

    const shareToUpdate = await getSharePortfolioService({ where: { id: sharePortfolioId, } });

    if (!shareToUpdate) {
        throw new Error("Share portfolio not found.");
    }
    const one_hour_pass = Date.now() - (shareToUpdate.last_updated).getTime() > ONE_HOUR;
    
    if (!one_hour_pass) {
        throw new Error("One hour has not passed since the last update.");
    }
    if (sharePortfolioId && isNaN(sharePortfolioId)) {
        throw new Error("Invalid share portfolio id.");
    }

    const portfolio = await Portfolio.findByPk(shareToUpdate.PortfolioId);
    if (portfolio.UserId !== userId) {
        throw new Error("The user does not have permission to update.");
    }

    if (shareToUpdate?.price && price) {
        shareToUpdate.price = price;
        await shareToUpdate.save();
    }

    return shareToUpdate;
};