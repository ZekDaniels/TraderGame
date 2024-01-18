import {
    createShareService,
} from "../services/shareService";
import { NextFunction, Request, Response } from "express";


export const createShare = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let share = req.body;

        share = await createShareService(share);

        return res.status(200).json({
            data: share,
            error: false,
            msg: "Share registered successfully",
        });
    } catch (err) {
        next(err);
    }
};
