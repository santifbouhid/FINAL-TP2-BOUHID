import Joi from "joi"

export const validateGame = (game) => {
    const gameSchema = Joi.object({
        nombre: Joi.string().alphanum().trim().required(), 
        categoria: Joi.string().trim(), 
        precio: Joi.number().positive().precision(2).required(), 
        stock: Joi.number().min(0)
    })

    const { error } = gameSchema.validate(game)

    const result = error ? false : true
    return result
}

