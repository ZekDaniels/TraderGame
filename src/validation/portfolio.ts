import Joi from "joi";

export const createSchema = Joi.object({
    name: Joi.string().required(),
});

export const updateSchema = Joi.object({
    name: Joi.string(),
});
