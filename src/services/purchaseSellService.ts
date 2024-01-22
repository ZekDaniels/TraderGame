import { log } from "console";
import { LogType } from "../config/consts";
import PurchaseSell from "../models/PurchaseSell";
import { getPortfolioService } from "./portfolioService";
import { getShareService } from "./shareService";
import sequelize from "../db/connection";

export const purchaseService = async (payload: any) => {
    const { symbol, portfolioId, quantity, userId } = payload;
    log(symbol);
    log(symbol);
    log(symbol);
    const share = await getShareService({ where: { symbol: symbol } });
    log("symbol");
    log("symbol");
    log("symbol");
    const portfolio = await getPortfolioService({ where: { id: portfolioId, UserId: userId } });

    if (portfolioId && isNaN(portfolioId) || !portfolio) {
        throw new Error("Invalid portfolio id");
    }
    if (!share?.id) {
        throw new Error("Invalid share symbol");
    }
    if (portfolio && share) {

        const totalCost = quantity * share.lastPrice;
        const baseData = { PortfolioId: portfolioId, ShareId: share.id };

        const purchaseSell = await sequelize.transaction(async transaction => {
            const purchaseSell = await PurchaseSell.create({
                ...baseData,
                quantity: quantity,
                price: share.lastPrice,
                type: LogType.PURCHASE
            },
                { transaction: transaction }
            );
            return purchaseSell;
        });


        return { ...purchaseSell, totalCost: totalCost };
    }
};

export const sellService = async (payload: any) => {
    const { symbol, portfolioId, quantity, userId } = payload;

    const share = await getShareService({ where: { symbol: symbol } });
    const portfolio = await getPortfolioService({ where: { id: portfolioId, UserId: userId } });

    if (portfolioId && isNaN(portfolioId) || !portfolio) {
        throw new Error("Invalid portfolio id");
    }
    if (!share?.id) {
        throw new Error("Invalid share symbol");
    }
    if (portfolio && share) {
        const totalCost = quantity * share.lastPrice;
        const baseData = { PortfolioId: portfolioId, ShareId: share.id };
        const purchaseSell = await sequelize.transaction(async transaction => {
            const purchaseSell = await PurchaseSell.create({
                ...baseData,
                quantity: quantity,
                price: share.lastPrice,
                type: LogType.SELL
            },
                { transaction: transaction }
            );
            return purchaseSell;
        });

        return { ...purchaseSell, totalCost: totalCost };
    }
};