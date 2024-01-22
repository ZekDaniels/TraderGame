import Share_Portfolio from "../models/ShareOfPortfolio";
import Portfolio from "../models/Portfolio";
import Share from "../models/Share";


export const getSharePortfolioByIdService = async (id: number) => {
    return await Share_Portfolio.findByPk(id);
};
export const getSharePortfolioService = async (where: any) => {
    return await Share_Portfolio.findOne(where);
};

export const getSharePortfoliosByUserService = async (userId: number) => {
    return await Share.findAll({
        include: [
            { model: Portfolio, as: "portfolios", where: { UserId: userId } }
        ],
    });
};

export const updateSharePortfolioPriceService = async (price: number, sharePortfolioId: number, userId: number) => {
    //own portfolio

    if (!price && !sharePortfolioId) {
        throw new Error("Please provide a share of portfolio data and/or price");
    }

    const shareToUpdate = await getSharePortfolioService({ where: { id: sharePortfolioId, } });
    // log(shareToUpdate);
    if (sharePortfolioId && isNaN(sharePortfolioId) || !shareToUpdate) {
        throw new Error("Invalid share of portfolio id");
    }

    const portfolio = await Portfolio.findByPk(shareToUpdate.PortfolioId);
    if (portfolio.UserId != userId) {
        throw new Error("The user doesn't have a permission to update");
    }

    if (shareToUpdate?.price && price) {
        shareToUpdate.price = price;
        await shareToUpdate.save();
    }

    return shareToUpdate;
};