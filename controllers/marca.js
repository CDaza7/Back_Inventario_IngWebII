const Marca = require('../models/marca')
const { request, response} = require('express')

const createMarca = async (req = request, res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const marcaDB = await Marca.findOne({nombre})
        
        if(marcaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  
        }
        const marca = new Marca(data)
        console.log(marca)
        await marca.save()
        return res.status(201).json(marca)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getMarcas = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const marcasDB = await Marca.find({estado})
            return res.json(marcasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = {createMarca, getMarcas}