import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { createPortfolio, deletePortfolio, getPortfolio, getPortfolios, updatePortfolio } from "../../controllers/portfolioController";
import { createSchema, updateSchema } from "../../validation/portfolio";

const portfolioRouter = Router();

portfolioRouter.get("/", requireUser, getPortfolios);
portfolioRouter.post("/", requireUser, validateRequest(createSchema),createPortfolio);
portfolioRouter.get("/:id", requireUser, getPortfolio);
portfolioRouter.patch("/:id", requireUser, validateRequest(updateSchema),updatePortfolio);
portfolioRouter.delete("/:id", requireUser, deletePortfolio);

export default portfolioRouter;
