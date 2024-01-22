import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { getUserData, updateUser } from "../../controllers/userController";
import { updateSchema } from "../../validation/user";

const userRouter = Router();

userRouter.patch("/", requireUser, validateRequest(updateSchema), updateUser);
userRouter.get("/", requireUser, getUserData);

export default userRouter;