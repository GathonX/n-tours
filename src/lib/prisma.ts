// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'

// 1) Déclare dans l’espace global la propriété __prisma
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

// 2) Réutilise le client si déjà instancié (pour éviter de multiples connexions en dev)
const prisma = globalThis.__prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  globalThis.__prisma = prisma
}

export default prisma
