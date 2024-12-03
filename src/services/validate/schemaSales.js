import Joi from "joi"

export const validateSale = (sale) => {
    const saleSchema = Joi.object({
        idJuego: Joi.number().positive().required(),
        cantVendida: Joi.number().positive().required()
    })

    const { error } = saleSchema.validate(sale)

    const result = error ? false : true
    return result
}

