import { Router } from "express";

import authRouter from "./authRoute";
import userRouter from "./userRoutes";
import shareRouter from "./shareRoutes";
import portfolioRouter from "./portfolioRoutes";
import purchaseSellRouter from "./purchaseSellRoutes";
import sharePortfolioRouter from "./sharePortfolioRoutes";

const appRouter = Router();
// all routes
const appRoutes = [
  {
    path: "/auth",
    router: authRouter,
  },
  {
    path: "/user",
    router: userRouter,
  },
  {
    path: "/share",
    router: shareRouter,
  },
  {
    path: "/portfolio",
    router: portfolioRouter,
  },
  {
    path: "/trade",
    router: purchaseSellRouter,
  },
  {
    path: "/own_portfolios",
    router: sharePortfolioRouter,
  },
];
appRoutes.forEach(route => {
  appRouter.use(route.path, route.router);
});

export default appRouter;
