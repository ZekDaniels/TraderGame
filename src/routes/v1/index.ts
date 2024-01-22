import { Router } from "express";

import authRouter from "./authRoute";
import userRouter from "./userRoutes";
import shareRouter from "./shareRoutes";
import portfolioRouter from "./portfolioRoutes";

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
];

appRoutes.forEach(route => {
  appRouter.use(route.path, route.router);
});

export default appRouter;
