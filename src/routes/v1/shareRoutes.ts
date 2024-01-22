import { Router } from "express";
import { requireUser, validateRequest } from "../../middleware";
import { createShare, deleteShare, getShare, getShares, updateShare } from "../../controllers/shareController";
import { createSchema, updateSchema } from "../../validation/share";
// import { updateSchema } from "../../validation/user";

const shareRouter = Router();

shareRouter.get("/", requireUser, getShares);
shareRouter.post("/", requireUser, validateRequest(createSchema),createShare);
shareRouter.get("/:id", requireUser, getShare);
shareRouter.patch("/:id", requireUser, validateRequest(updateSchema),updateShare);
shareRouter.delete("/:id", requireUser, deleteShare);

export default shareRouter;