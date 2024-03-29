const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID} = require('../controllers/tipoEquipo')

const router = Router()
router.post('/', createTipoEquipo)
router.get('/', getTipoEquipos)
router.put('/:id', updateTipoEquipoByID)

module.exports = router;