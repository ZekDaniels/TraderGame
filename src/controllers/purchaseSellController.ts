import {
} from "../services/portfolioService";
import { NextFunction, Response } from "express";
import { customRequest } from "customDefinition";
import { getPurchaseSellLogsService, purchaseService, sellService } from "../services/purchaseSellService";

export const purchase = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const payload = req.body;
        payload["userId"] = req.user.id;

        const purchaseSell = await purchaseService(payload);

        return res.status(200).json({
            data: purchaseSell,
            error: false,
            msg: "Stock purchased successfully",
        });
    } catch (err) {
        next(err);
    }
};


export const sell = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const payload = req.body;
        payload["userId"] = req.user.id;

        const purchaseSell = await sellService(payload);

        return res.status(200).json({
            data: purchaseSell,
            error: false,
            msg: "Stock purchased successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const getPurchaseSellLogs = async (
    req: customRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const { key } = req.query;
        const sharePortfolio = await getPurchaseSellLogsService(parseInt(req.user.id), key);

        return res.status(200).json({
            data: sharePortfolio,
            error: false,
            msg: "Log are returned successfully",
        });
    } catch (err) {
        next(err);
    }
};