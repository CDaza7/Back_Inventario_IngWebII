const Usuario = require('../models/usuario')
const { request, response} = require('express')

const createUsuario= async (req = request, res = response) => {
    try{
        const data = req.body
        const email = data.email
        console.log(data)
        const usuarioBD = await Usuario.findOne({ email })
        if(usuarioBD){
            return res.status(400).json({msg: 'Ya existe usuario'})
        }
        const usuario = new Usuario(data)
        console.log(usuario)
        await usuario.save()
        return res.status(201).json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({e})
    }
}

const getUsuarios= async (req = request, res = response) => {
        try{
            const { estado } = req.query
            const usuariosDB = await Usuario.find({estado})
            return res.json(usuariosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = {createUsuario, getUsuarios}