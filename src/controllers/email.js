const { sendEmail } = require('../functions/sendEmail')
let config


// get access by plate string from .txt/.csv
const emailSender = async (req, res, next) => {
  const email = {
    emailReceiversList: req.body.emailReceiversList,
    subject: req.body.subject,
    text: req.body.text,
    html: req.body.html
  }
  try {
    const response = await sendEmail(process.env.USER, process.env.PASSWORD, email.emailReceiversList, email.subject, email.text, email.html)
    return res.status(200).json(response)
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    })
  }
}

module.exports = emailSender