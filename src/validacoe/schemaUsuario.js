const joi = require('joi')

const schemaUsuario = joi.object({
    nome : joi.string().required().messages({
        'string.empty' : 'O campo nome é obrigatório',
        'any.required' : 'O campo nome é obrigatório'
    }),

    email : joi.string().email().required().messages({
        'any.required' : 'O campo email é obrigatório',
        'string.email' : 'O campo email precisa ter um formato válido',
        'string.empty' : 'O campo email é obrigatório',
    }),

    senha : joi.string().min(5).required().messages({
        'string.min' : 'A senha precisa, conter, no mínimo 5 caracteres',
        'any.required' : 'O campo senha é obrigatório',
    })
})

module.exports = schemaUsuario