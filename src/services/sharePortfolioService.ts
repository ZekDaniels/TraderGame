import Share_Portfolio from "../models/ShareOfPortfolio";


export const getSharePortfolioService = async (where: any) => {
    return await Share_Portfolio.findOne( where );
};