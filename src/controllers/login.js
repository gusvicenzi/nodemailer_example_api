const jwt = require('jsonwebtoken')

function login(req, res) {
  const { user, password } = req.headers

  try {
    const isCorrectPassword = user === process.env.USER && password === process.env.PASSWORD

    if (!isCorrectPassword) {
      return res.status(401).send('Combinação de e-mail e senha incorreta!')
    }

    const token = jwt.sign({
      user: JSON.stringify(user)
    }, process.env.SECRET, {
      expiresIn: '60m'
    })
    return res.status(200).json({ data: { user, token } })
  } catch (error) {
    console.log(error)
    return res.send(error)
  }
}

module.exports = login