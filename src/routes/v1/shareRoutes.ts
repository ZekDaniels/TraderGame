import { Router } from "express";
import { requireUser } from "../../middleware";
import { createShare } from "../../controllers/shareController";
// import { updateSchema } from "../../validation/user";

const shareRouter = Router();

shareRouter.post("/", requireUser, createShare);

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
 *   get:
 *     summary: Get share information
 *     description: Logged in shares can fetch only their own share information.
 *     tags: [Share]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *
 *   patch:
 *     summary: Update  share
 *     description: Logged in shares can only update their own information.
 *     tags: [Share]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *             example:
 *               firstName: fake name
 *     responses:
 *       "200":
 *         description: OK
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
