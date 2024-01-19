import Joi from "joi";

export const createSchema = Joi.object({
    name: Joi.string().required(),
    lastPrice: Joi.number().greater(0).required(),
    symbol: Joi.string().length(3).required(),
});

export const updateSchema = Joi.object({
    name: Joi.string(),
    lastPrice: Joi.number().greater(0),
    symbol: Joi.string().length(3),
});
