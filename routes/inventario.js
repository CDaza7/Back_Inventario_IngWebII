const { Router } = require('express')
const { createInventario, getInventarios} = require('../controllers/inventario')

const router = Router()
router.post('/', createInventario)
router.get('/', getInventarios)

module.exports = router;