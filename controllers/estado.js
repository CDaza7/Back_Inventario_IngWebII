const Estado = require('../models/estado')
const { request, response} = require('express')

const createEstado= async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const estadoDB = await Estado.findOne({nombre})
        
        if(estadoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre 
        }
        const estado = new Estado(data)
        console.log(estado)
        await estado.save()
        return res.status(201).json(estado)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getEstados = async (req = request, res = response) => {
    try{
        const { estado } = req.query
        const estadosDB = await Estado.find({estado})
        return res.json(estadosDB)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

module.exports = {createEstado, getEstados}