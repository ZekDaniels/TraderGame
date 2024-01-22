import {
} from "../services/portfolioService";
import { NextFunction, Response } from "express";
import { customRequest } from "customDefinition";
import { updateSharePortfolioPriceService } from "../services/sharePortfolioService";


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