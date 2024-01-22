import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { purchaseSchema, sellSchema } from "../../validation/purchaseSell";
import { purchase, sell } from "../../controllers/purchaseSellController";

const purchaseSellRouter = Router();

purchaseSellRouter.post("/purchase", requireUser, validateRequest(purchaseSchema), purchase);
purchaseSellRouter.post("/sell", requireUser, validateRequest(sellSchema), sell);

export default purchaseSellRouter;