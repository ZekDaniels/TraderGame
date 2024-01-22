import Joi from "joi";

export const updatePriceSchema = Joi.object({
    price: Joi.number().greater(0).required(),
});
