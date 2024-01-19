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

/**
 * @swagger
 * tags:
 *   name: Share
 *   description: Share
 */

/**
 * @swagger
 * /v1/share:
 *   
 *   post:
 *     summary: create a new Share
 *     tags: [Share]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - symbol
 *               - number
 *             properties:
 *               name:
 *                 type: string
 *               symbol:
 *                 type: string
 *                 format: symbol
 *                 description: must be unique
 *               lastPrice:
 *                 type: number
 *                 format: number
 *                 description: Max two decimal field
 *             example:
 *               name:  Atlas Jet
 *               symbol: ATJ
 *               lastPrice: 14.55
 *     responses:
 *       "201":
 *         description: Created
 *
 *
 *       "400":
 *         description:  Bad Request
 */
