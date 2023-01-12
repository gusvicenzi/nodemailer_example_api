const { Router } = require('express')
const router = Router()

const email = require('../controllers/email')

router.route('/').post(email)

module.exports = router