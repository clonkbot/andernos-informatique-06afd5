import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const services = [
  {
    title: 'Remplacement écran',
    description: 'Écran cassé, fissures, affichage défaillant. Pièces d\'origine ou compatibles haute qualité.',
    price: 'À partir de 79€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Batterie',
    description: 'Autonomie réduite ? Remplacement batterie avec garantie. Toutes marques.',
    price: 'À partir de 49€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    title: 'Connecteur de charge',
    description: 'Port USB-C ou Lightning endommagé. Réparation ou remplacement.',
    price: 'À partir de 59€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Boutons & Haut-parleur',
    description: 'Bouton power, volume, haut-parleur, micro. Diagnostic offert.',
    price: 'À partir de 39€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    )
  },
  {
    title: 'Caméra avant/arrière',
    description: 'Photos floues, caméra HS. Remplacement module caméra.',
    price: 'À partir de 69€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Oxydation / Eau',
    description: 'Téléphone tombé dans l\'eau ? Nettoyage et réparation composants.',
    price: 'Devis gratuit',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

const brands = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Google Pixel', 'Oppo', 'Sony'];

export default function ReparationPortable() {
  return (
    <PageTemplate
      title="Réparation Portable"
      subtitle="Écran cassé, batterie fatiguée, problème de charge ? Nous réparons tous les smartphones et tablettes, toutes marques."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      }
      color="from-blue-500 to-cyan-500"
    >
      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos prestations
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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Marques réparées
        </h2>
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-medium"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Process */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Diagnostic', desc: 'Gratuit et sans engagement' },
            { step: '2', title: 'Devis', desc: 'Transparent et détaillé' },
            { step: '3', title: 'Réparation', desc: 'Sous 24-48h en général' },
            { step: '4', title: 'Garantie', desc: '3 à 6 mois selon pièces' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-bold text-blue-100 mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
