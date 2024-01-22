import Share from "../models/Share";

export async function updateSharePrice(purchaseSell: any, options: any) {
    await Share.update(
        {
            lastPrice: purchaseSell.price
        },
        {
            where: { ShareId: purchaseSell.ShareId },
            transaction: options.transaction
        }
    );
}