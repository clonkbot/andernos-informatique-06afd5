import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const services = [
  {
    title: 'Remplacement écran MacBook',
    description: 'Écran fissuré, pixels morts, taches. Pièces Apple certifiées.',
    price: 'À partir de 249€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Batterie MacBook',
    description: 'Autonomie réduite, batterie gonflée. Remplacement certifié.',
    price: 'À partir de 129€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Clavier MacBook',
    description: 'Touches bloquées, liquide renversé. Réparation ou remplacement.',
    price: 'À partir de 149€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'SSD & Stockage',
    description: 'Upgrade SSD, plus de stockage, plus de vitesse.',
    price: 'À partir de 99€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    )
  },
  {
    title: 'Carte mère iMac',
    description: 'Diagnostic et réparation composants. Micro-soudure.',
    price: 'Devis gratuit',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: 'Récupération données Mac',
    description: 'Disque dur HS, système corrompu. Récupération complète.',
    price: 'À partir de 79€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  }
];

const products = ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac Mini', 'Mac Pro', 'Mac Studio'];

export default function ReparationMac() {
  return (
    <PageTemplate
      title="Réparation Mac"
      subtitle="Spécialistes Apple depuis plus de 15 ans. MacBook, iMac, Mac Mini - diagnostic gratuit et pièces certifiées."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      }
      color="from-slate-600 to-slate-800"
    >
      {/* Apple Expertise Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 mb-12 text-white"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Expertise Apple Certifiée</h3>
            <p className="text-slate-300">Plus de 15 ans d'expérience sur les produits Apple. Pièces d'origine et garantie sur toutes nos réparations.</p>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos prestations Mac
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <p className="text-slate-800 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Produits pris en charge
        </h2>
        <div className="flex flex-wrap gap-3">
          {products.map((product) => (
            <span
              key={product}
              className="px-5 py-3 bg-slate-100 rounded-xl text-slate-700 font-medium"
            >
              {product}
            </span>
          ))}
        </div>
      </div>

      {/* Why Us */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Diagnostic gratuit', desc: 'Analyse complète sans engagement de votre Mac' },
            { title: 'Pièces certifiées', desc: 'Uniquement des composants Apple d\'origine ou haute qualité' },
            { title: 'Garantie incluse', desc: 'Toutes nos réparations sont garanties 6 mois minimum' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6"
            >
              <div className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center mb-4 font-bold">
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
