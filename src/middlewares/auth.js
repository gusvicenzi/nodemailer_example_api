const jwt = require('jsonwebtoken')

function validateToken(req, res, next) {
  const [, token] = req.headers.authorization?.split(' ') || [' ', ' ']

  if (!token) {
    return res.status(401).send('Acesso rejeitado. Token não informado.')
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET)
    console.log(payload)
    const userIdFromToken = typeof payload !== 'string' && payload.user

    if (!userIdFromToken) {
      return res.send(401).json({
        message: 'Invalid token'
      })
    }
    req.headers['user'] = payload.user
    return next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      message: 'Invalid token'
    })
  }
}

module.exports = { validateToken }