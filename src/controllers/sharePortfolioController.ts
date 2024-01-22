import {
} from "../services/portfolioService";
import { NextFunction, Response } from "express";
import { customRequest } from "customDefinition";
import { getSharePortfolioByIdService, updateSharePortfolioPriceService } from "../services/sharePortfolioService";
import { ApiError } from "../util/ApiError";


export const getSharePortfolio = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const sharePortfolio = await getSharePortfolioByIdService(parseInt(req.params.id));

        if (!sharePortfolio) {
            throw new ApiError(400, "Share of Portfolio not found");
        }

        return res.status(200).json({
            data: sharePortfolio,
            error: false,
        });
    } catch (err) {
        next(err);
    }
};

export const updateSharePrice = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const { price } = req.body;
        const sharePortfolio = await updateSharePortfolioPriceService(price, parseInt(req.params.id), parseInt(req.user.id));

        return res.status(200).json({
            data: sharePortfolio,
            error: false,
            msg: "Price updated successfully",
        });
    } catch (err) {
        next(err);
    }
};