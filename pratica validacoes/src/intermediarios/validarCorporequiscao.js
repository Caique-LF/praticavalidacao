const validarCorporequisicao = joiSchema => async (req, res, next) =>{
    try {
        await joiSchema.validateAsync(req.body)
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({mensagem: error.message})
    }
    next()
}

module.exports = validarCorporequisicao