import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { purchaseSchema, sellSchema } from "../../validation/purchaseSell";
import { getPurchaseSellLogs, purchase, sell } from "../../controllers/purchaseSellController";

const purchaseSellRouter = Router();

purchaseSellRouter.post("/purchase", requireUser, validateRequest(purchaseSchema), purchase);
purchaseSellRouter.post("/sell", requireUser, validateRequest(sellSchema), sell);
purchaseSellRouter.get("/logs", requireUser, getPurchaseSellLogs);

export default purchaseSellRouter;