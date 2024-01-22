import { log } from "console";
import Share from "../models/Share";
import { LogType } from "../config/consts";

export async function updateSharePrice(purchaseSell: any, options: any) {

    if (purchaseSell == LogType.SELL) {
        await Share.update(
            {
                lastPrice: purchaseSell.price
            },
            {
                where: { id: purchaseSell.ShareId },
                transaction: options.transaction
            }
        );
    }
}