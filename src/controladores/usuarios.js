const {usuarios} = require('../bancoDeDados')


const cadastrarUsuario = async (req, res) =>{
    const {nome, email, senha} = req.body
    
    try {
        const novoUsuario = {
            nome,
            email,
            senha
        }
        usuarios.push(novoUsuario)
        return res.status(201).json(novoUsuario)
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message)
    }
}

const listarUsuarios = async (req, res) =>{
    return res.json(usuarios)
}
module.exports= {
    cadastrarUsuario,
    listarUsuarios
}