// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'N-Tours Madagascar',
  description: 'Découvrez Madagascar avec N-Tours',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
