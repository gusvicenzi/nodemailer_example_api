const express = require('express')
const app = express()
require('dotenv').config()
const emailRoutes = require('./src/routes/email')

app.use(express.json())

const port = process.env.PORT || 3000

app.use('/EnviarEmail', emailRoutes)

app.get('/', (req, res) => {
  res.send('Server is running. Reach /EnviarEmail to send email.')
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}.`)
})