import { LogType } from "../config/consts";
import Share_Portfolio from "../models/ShareOfPortfolio";

export async function createSharePortfolio(purchase_sell: any, options: any) {

    const base_data = { PortfolioId: purchase_sell.PortfolioId, ShareId: purchase_sell.ShareId };
    let boughtShare = await Share_Portfolio.findOne({ where: base_data, transaction: options.transaction });

    if (purchase_sell.type == LogType.BUY) {
        if (!boughtShare?.id) {
            boughtShare = await Share_Portfolio.create({
                ...base_data,
                quantity: purchase_sell.quantity,
                price: purchase_sell.price
            }, {
                transaction: options.transaction
            });
        }
        else boughtShare.quantity += purchase_sell.quantity;
    }
    else {
        boughtShare.quantity -= purchase_sell.quantity;
    }
    boughtShare.price = purchase_sell.lastPrice;

    await boughtShare.save({ transaction: options.transaction });
}
