const { Router } = require('express')
const {createEstado, getEstados} = require('../controllers/estado')

const router = Router()
router.post('/', createEstado)
router.get('/', getEstados)

module.exports = router;