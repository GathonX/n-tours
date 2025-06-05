'use client'
import { useState, FormEvent } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null)
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || data.message)
      }
    } catch {
      setStatus('error')
      setMessage("Impossible de contacter le serveur.")
    }
  }

  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Restez informé
          </h2>
          <p className="text-text-secondary mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et découvrir Madagascar.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-full transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Envoi...' : "S'inscrire"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-sm text-text-secondary mt-4">
            En vous inscrivant, vous acceptez de recevoir nos newsletters. Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}
