const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const emailRoutes = require('./src/routes/email')
const login = require('./src/routes/login')
const { validateToken } = require('./src/middlewares/auth')

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Server is running. Reach /EnviarEmail to send email.')
})

app.use('/login', login)

app.use('*', validateToken)
// Secure routes below
app.use('/EnviarEmail', emailRoutes)

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})