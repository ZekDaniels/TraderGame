import { ApiError } from "../util/ApiError";
import {
    createPortfolioService, deletePortfolioService, getPotfolioByIdService, getPortfoliosService, updatePortfolioService,
} from "../services/portfolioService";
import { NextFunction, Request, Response } from "express";
import { customRequest } from "customDefinition";


export const createPortfolio = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        let portfolio = req.body;

        portfolio["UserId"] = req.user.id;
        portfolio = await createPortfolioService(portfolio);

        return res.status(200).json({
            data: portfolio,
            error: false,
            msg: "Portfolio created successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const updatePortfolio = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        let portfolio = req.body;

        portfolio["UserId"] = req.user.id;
        portfolio = await updatePortfolioService(portfolio, parseInt(req.params.id), parseInt(portfolio["UserId"]));

        return res.status(200).json({
            data: portfolio,
            error: false,
            msg: "Portfolio updated successfully",
        });
    } catch (err) {
        next(err);
    }
};


export const deletePortfolio = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await deletePortfolioService(parseInt(req.params.id), parseInt(req.user.id));


        return res.status(200).json({
            data: result,
            error: false,
            msg: "Portfolio deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};


export const getPortfolio = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const portfolio = await getPotfolioByIdService(parseInt(req.params.id));

        if (!portfolio) {
            throw new ApiError(400, "Portfolio not found");
        }

        return res.status(200).json({
            data: portfolio,
            error: false,
        });
    } catch (err) {
        next(err);
    }
};

export const getPortfolios = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const portfolios = await getPortfoliosService();

        return res.status(200).json({
            data: portfolios,
            error: false,
        });
    } catch (err) {
        next(err);
    }
};
