import { LogType } from "../config/consts";
import Share_Portfolio from "../models/ShareOfPortfolio";

export async function manageSharePortfolio(purchaseSell: any, options: any) {

    const baseData = { PortfolioId: purchaseSell.PortfolioId, ShareId: purchaseSell.ShareId };
    let boughtShare = await Share_Portfolio.findOne({ where: baseData, transaction: options.transaction });

    if (purchaseSell.logType == LogType.PURCHASE) {


        if (!boughtShare?.id) {//Not Exists Purchase

            boughtShare = await Share_Portfolio.create({
                ...baseData,
                quantity: purchaseSell.quantity,
                price: purchaseSell.price
            }, {
                transaction: options.transaction
            });

        }
        else {//Exists Purchase
            boughtShare.quantity += purchaseSell.quantity;
            await boughtShare.save({ transaction: options.transaction });
        }
    }
    else {//Sell

        boughtShare.quantity -= purchaseSell.quantity;

        // If run out of stock
        if (boughtShare.quantity == 0) await boughtShare.destroy();
        else {//if stock left
            await boughtShare.save({ transaction: options.transaction });
        }

    }

}
