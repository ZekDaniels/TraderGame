import { ApiError } from "../util/ApiError";
import {
    createShareService, deleteShareService, getShareByIdService, getSharesService, updateShareService,
} from "../services/shareService";
import { NextFunction, Request, Response } from "express";


export const createShare = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const payload = req.body;

        const share = await createShareService(payload);

        return res.status(200).json({
            data: share,
            error: false,
            msg: "Share created successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const updateShare = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const payload = req.body;

        const share = await updateShareService(payload, parseInt(req.params.id));

        return res.status(200).json({
            data: share,
            error: false,
            msg: "Share updated successfully",
        });
    } catch (err) {
        next(err);
    }
};


export const deleteShare = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await deleteShareService(parseInt(req.params.id));

        return res.status(200).json({
            data: result,
            error: false,
            msg: "Share deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};


export const getShare = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const share = await getShareByIdService(parseInt(req.params.id));

        if (!share) {
            throw new ApiError(400, "Share not found");
        }

        return res.status(200).json({
            data: share,
            error: false,
        });
    } catch (err) {
        next(err);
    }
};

export const getShares = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const shares = await getSharesService();

        return res.status(200).json({
            data: shares,
            error: false,
        });
    } catch (err) {
        next(err);
    }
};
