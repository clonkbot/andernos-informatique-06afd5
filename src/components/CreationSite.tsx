import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const webPackages = [
  {
    name: 'Site Vitrine',
    description: 'Idéal pour présenter votre activité',
    price: 'À partir de 490€',
    features: ['5 pages', 'Design responsive', 'Formulaire contact', 'Référencement de base', 'Hébergement 1 an inclus']
  },
  {
    name: 'Site E-commerce',
    description: 'Vendez vos produits en ligne',
    price: 'À partir de 990€',
    features: ['Catalogue produits', 'Paiement sécurisé', 'Gestion des stocks', 'Tableau de bord', 'Formation incluse'],
    featured: true
  },
  {
    name: 'Site Sur Mesure',
    description: 'Solution personnalisée à vos besoins',
    price: 'Sur devis',
    features: ['Fonctionnalités sur mesure', 'Design unique', 'Intégrations API', 'Accompagnement complet', 'Maintenance incluse']
  }
];

const printServices = [
  {
    title: 'Cartes de visite',
    description: 'Design professionnel, impression haute qualité.',
    price: 'À partir de 49€ / 500 ex.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Flyers & Dépliants',
    description: 'Communication impactante pour vos événements.',
    price: 'À partir de 79€ / 500 ex.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    title: 'Affiches & Kakemonos',
    description: 'Grand format pour événements et vitrines.',
    price: 'À partir de 29€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Logo & Identité visuelle',
    description: 'Création de votre identité de marque complète.',
    price: 'À partir de 199€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  }
];

export default function CreationSite() {
  return (
    <PageTemplate
      title="Création Site & Flyers"
      subtitle="Développez votre présence en ligne et hors ligne avec un site web professionnel et des supports de communication impactants."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      }
      color="from-indigo-500 to-blue-600"
    >
      {/* Web Packages */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Création de site web
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 ${
                pkg.featured
                  ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white'
                  : 'bg-stone-50'
              }`}
            >
              {pkg.featured && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  Populaire
                </span>
              )}
              <h3 className={`font-semibold text-xl mb-2 ${pkg.featured ? '' : 'text-slate-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-4 ${pkg.featured ? 'text-indigo-100' : 'text-slate-600'}`}>
                {pkg.description}
              </p>
              <p className={`text-2xl font-bold mb-6 ${pkg.featured ? '' : 'text-indigo-600'}`}>
                {pkg.price}
              </p>
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className={`w-5 h-5 ${pkg.featured ? 'text-indigo-200' : 'text-indigo-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={pkg.featured ? 'text-indigo-50' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Print Services */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Print & Design graphique
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {printServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow flex gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 mb-1">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-2">{service.description}</p>
                <p className="text-indigo-600 font-semibold">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Notre méthode
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Écoute', desc: 'Compréhension de vos besoins et objectifs' },
            { step: '2', title: 'Conception', desc: 'Maquettes et propositions créatives' },
            { step: '3', title: 'Réalisation', desc: 'Développement et création des supports' },
            { step: '4', title: 'Formation', desc: 'Prise en main et autonomie' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-bold text-indigo-100 mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
