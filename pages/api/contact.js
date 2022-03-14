export default function (req, res) {
    const data = {'message' : "envoyé"}
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
    host: 'mail.gmx.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    });
    const mailData = {
        from: 'romain.breuil@gmx.com',
        to: 'dahint77@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `
          <div>
            <h1>Email de ${req.body.name}</h1>
            <p>Son adresse est ${req.body.email}</p>
            <span>il a écrit "${req.body.message}"</span>
          </div>`
      }
      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
    res.status(200).json({data})
}