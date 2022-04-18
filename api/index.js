const app = require('express')()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

module.exports = { path: '/api', handler: app }

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/message', async (req, res) => {
 const contenuFormulaireContact = `
     <div> ${req.body.notification}</div>
 `
 // NODEMAILER
 const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
     user: 'ithealthandfitnessaudit@gmail.com',
     pass: 'Project@123'
   }
 })

 const info = await transporter.sendMail({
    from: 'ithealthandfitnessaudit@gmail.com',
    to: req.body.email,
    subject: 'Result Shared', 
    text: 'test',
    html: contenuFormulaireContact 
  })
 
 

 console.log('Message sent: %s', info.messageId)
 console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
 res.send('True');

 //res.redirect(200, '/')
 })