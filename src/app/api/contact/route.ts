import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASSWORD!,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Vérification de la connexion SMTP
    await transporter.verify()

    // Préparation de l’e-mail
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: 'mandimbizarajuno@gmail.com',
      replyTo: email,  // important pour répondre au visiteur
      subject: `Nouveau message (${subject}) de ${name}`,
      html: `
        <h1>Nouveau message de contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || '—'}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }

    // Envoi de l’e-mail
    const info = await transporter.sendMail(mailOptions)
    console.log('✉️ Email sent:', info)

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 },
    )
  } catch (error: any) {
    console.error('🚨 Error in contact route:', error)
    return NextResponse.json(
      { error: `Erreur lors de l'envoi du message: ${error.message}` },
      { status: 500 },
    )
  }
}
