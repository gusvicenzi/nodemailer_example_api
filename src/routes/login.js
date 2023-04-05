const { Router } = require('express')
const router = Router()

const login = require('../controllers/login')

router.route('/').get(login)

module.exports = router