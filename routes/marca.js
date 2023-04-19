const { Router } = require('express')
const { createMarca, getMarcas} = require('../controllers/marca')

const router = Router()
router.post('/', createMarca)
router.get('/', getMarcas)

module.exports = router;