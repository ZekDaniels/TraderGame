import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { purchaseSchema, sellSchema } from "../../validation/purchase_sell";
import { purchase } from "../../controllers/purchaseSellController";

const purchaseSellRouter = Router();

purchaseSellRouter.post("/purchase", requireUser, validateRequest(purchaseSchema), purchase);
// purchaseSellRouter.post("/", requireUser, validateRequest(sellSchema), sell);

export default purchaseSellRouter;