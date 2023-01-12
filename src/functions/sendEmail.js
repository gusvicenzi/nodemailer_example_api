const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(user, pass, emailReceiversList, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user,
      pass
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Teste email" <${user}>`,
    to: emailReceiversList.toString(),
    subject,
    text,
    html,
  })

  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  return info
}

// main().catch(console.error)

module.exports = { sendEmail }