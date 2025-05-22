export default function Newsletter() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Restez informé
          </h2>
          <p className="text-text-secondary mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et découvrir les merveilles de Madagascar
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              S'inscrire
            </button>
          </form>

          <p className="text-sm text-text-secondary mt-4">
            En vous inscrivant, vous acceptez de recevoir nos newsletters. Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
} 