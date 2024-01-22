import Joi from "joi";

export const purchaseSchema = Joi.object({
    portfolioId: Joi.number().greater(0).integer().required(),
    symbol: Joi.string().length(3).required().uppercase(),
    quantity: Joi.number().greater(0).integer().required(),
});

export const sellSchema = Joi.object({
    symbol: Joi.string().length(3).uppercase().required(),
    portfolioId: Joi.number().greater(0).integer().required(),
    quantity: Joi.number().greater(0).integer().required(),
});
