import { LogType } from "../config/consts";
import PurchaseSell from "../models/PurchaseSell";
import { getPortfolioByIdService } from "./portfolioService";
import { getShareService } from "./shareService";

export const purchaseService = async (payload: any) => {
    const { symbol, portfolioId, quantity } = payload;

    const share = await getShareService({ symbol: symbol });
    const portfolio = await getPortfolioByIdService(portfolioId);

    if (portfolioId && isNaN(portfolioId) || !portfolio) {
        throw new Error("Invalid portfolio id");
    }
    if (!share?.id) {
        throw new Error("Invalid share symbol");
    }
    if (portfolio && share) {

        const totalCost = quantity * share.lastPrice;
        const base_data = { PortfolioId: portfolioId, ShareId: share.id };
        const purchase_sell = await PurchaseSell.create({ ...base_data, quantity: quantity, price: share.lastPrice, type: LogType.PURCHASE });

        return { ...purchase_sell, totalCost: totalCost };
    }
};

export const sellService = async (payload: any) => {
    const { symbol, portfolioId, quantity } = payload;

    const share = await getShareService({ symbol: symbol });
    const portfolio = await getPortfolioByIdService(portfolioId);

    if (portfolioId && isNaN(portfolioId) || !portfolio) {
        throw new Error("Invalid portfolio id");
    }
    if (!share?.id) {
        throw new Error("Invalid share symbol");
    }
    if (portfolio && share) {
        const totalCost = quantity * share.lastPrice;
        const base_data = { PortfolioId: portfolioId, ShareId: share.id };
        const purchase_sell = await PurchaseSell.create({ ...base_data, quantity: quantity, price: share.lastPrice, type: LogType.SELL });

        return { ...purchase_sell, totalCost: totalCost };
    }
};