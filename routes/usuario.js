const { Router } = require('express')
const {createUsuario, getUsuarios} =
 require('../controllers/usuario')

const router = Router()
router.post('/', createUsuario)
router.get('/', getUsuarios)

module.exports = router;