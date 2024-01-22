import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { updatePriceSchema } from "../../validation/sharePortfolio";
import { getSharePortfolio, updateSharePrice } from "../../controllers/sharePortfolioController";

const sharePortfolioRouter = Router();

sharePortfolioRouter.get("/:id", requireUser, getSharePortfolio);
sharePortfolioRouter.patch("/:id/update_price", requireUser, validateRequest(updatePriceSchema), updateSharePrice);

export default sharePortfolioRouter;