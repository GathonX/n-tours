'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    tourType: '',
    startDate: '',
    duration: '',
    participants: '1',
    specialRequests: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la réservation');
      }

      setStatus({
        type: 'success',
        message: 'Votre demande de réservation a été envoyée avec succès !',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        tourType: '',
        startDate: '',
        duration: '',
        participants: '1',
        specialRequests: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.',
      });
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px]">
          <OptimizedImage
            src="/images/Nosy iranja/iranja1.jpg"
            alt="Réservation de circuit"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Réservez votre circuit
              </h1>
              <p className="text-xl text-white/90">
                Planifiez votre voyage de rêve à Madagascar
              </p>
            </div>
          </div>
        </section>

        {/* Formulaire de réservation */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Informations personnelles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Détails du voyage */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Détails du voyage
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-text-primary mb-2">
                        Destination *
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Sélectionnez une destination</option>
                        <option value="nosy-be">Nosy Be</option>
                        <option value="nosy-komba">Nosy Komba</option>
                        <option value="nosy-sakatia">Nosy Sakatia</option>
                        <option value="lokobe">Lokobe</option>
                        <option value="nosy-iranja">Nosy Iranja</option>
                        <option value="nosy-mitsio">Nosy Mitsio</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="tourType" className="block text-sm font-medium text-text-primary mb-2">
                        Type de circuit *
                      </label>
                      <select
                        id="tourType"
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Sélectionnez un type de circuit</option>
                        <option value="tour-iles">Tour des îles</option>
                        <option value="aventure-lokobe">Aventure Lokobe</option>
                        <option value="paradis-marin">Paradis Marin</option>
                        <option value="culture-traditions">Culture et Traditions</option>
                        <option value="sur-mesure">Circuit sur mesure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-text-primary mb-2">
                        Date de début *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-text-primary mb-2">
                        Durée *
                      </label>
                      <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Sélectionnez une durée</option>
                        <option value="1-jour">1 jour</option>
                        <option value="2-3-jours">2-3 jours</option>
                        <option value="4-7-jours">4-7 jours</option>
                        <option value="plus-7-jours">Plus de 7 jours</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="participants" className="block text-sm font-medium text-text-primary mb-2">
                        Nombre de participants *
                      </label>
                      <input
                        type="number"
                        id="participants"
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        min="1"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Demandes spéciales */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-text-primary mb-2">
                    Demandes spéciales
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Régime alimentaire particulier, besoins spécifiques..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-md ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-800'
                        : 'bg-blue-50 text-blue-800'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande de réservation'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 