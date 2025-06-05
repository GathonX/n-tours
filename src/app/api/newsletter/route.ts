import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // validation simple
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      )
    }

    // éviter les doublons
    const exists = await prisma.subscriber.findUnique({
      where: { email },
    })
    if (exists) {
      return NextResponse.json(
        { message: "Vous êtes déjà abonné·e." },
        { status: 409 }
      )
    }

    // créer l’abonné
    await prisma.subscriber.create({
      data: { email },
    })

    return NextResponse.json(
      { message: "Merci pour votre inscription !" },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Erreur newsletter:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue, veuillez réessayer plus tard." },
      { status: 500 }
    )
  }
}
