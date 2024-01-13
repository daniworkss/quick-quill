import nodemailer from 'nodemailer'
import { email, pass,receivingEmail } from './Api-urls-and-keys'

export const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth:{
      user: email,
      pass: pass
   },
   tls:{
    rejectUnauthorized: true
   }
})

// to send email
export const mailOption = {
   from: email,
   to: receivingEmail
}