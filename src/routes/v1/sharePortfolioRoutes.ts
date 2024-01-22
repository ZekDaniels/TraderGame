import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { updatePriceSchema } from "../../validation/sharePortfolio";
import { updateSharePrice } from "../../controllers/sharePortfolioController";

const sharePortfolioRouter = Router();

sharePortfolioRouter.patch("/:id/update_price", requireUser, validateRequest(updatePriceSchema), updateSharePrice);

export default sharePortfolioRouter;