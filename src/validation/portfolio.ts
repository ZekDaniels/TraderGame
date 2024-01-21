import Joi from "joi";

export const createSchema = Joi.object({
    name: Joi.string().required(),
    status: Joi.boolean()
});

export const updateSchema = Joi.object({
    name: Joi.string(),
    status: Joi.boolean(),
    isMain: Joi.boolean()
});
