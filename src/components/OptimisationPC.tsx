import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const services = [
  {
    title: 'Upgrade SSD',
    description: 'Remplacez votre disque dur par un SSD. Démarrage en 10 secondes garanti.',
    price: 'À partir de 89€',
    boost: 'x10 plus rapide',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Ajout de RAM',
    description: 'Plus de mémoire = plus de fluidité. Idéal pour le multitâche.',
    price: 'À partir de 49€',
    boost: '+50% fluidité',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: 'Nettoyage système',
    description: 'Suppression virus, malwares, fichiers inutiles. Système comme neuf.',
    price: 'À partir de 39€',
    boost: 'Performance optimale',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  },
  {
    title: 'Réinstallation Windows',
    description: 'Windows propre + tous vos logiciels. Transfert de données inclus.',
    price: 'À partir de 59€',
    boost: 'Système neuf',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Nettoyage physique',
    description: 'Dépoussiérage complet, changement pâte thermique. Températures optimales.',
    price: 'À partir de 29€',
    boost: '-15°C température',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'Pack Performance',
    description: 'SSD + RAM + Nettoyage complet. La formule tout-en-un.',
    price: 'À partir de 149€',
    boost: 'Pack complet',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
];

export default function OptimisationPC() {
  return (
    <PageTemplate
      title="Optimisation PC"
      subtitle="Votre ordinateur rame ? Ne le jetez pas ! Nous lui redonnons une seconde jeunesse avec des upgrades ciblés."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      }
      color="from-amber-500 to-orange-500"
    >
      {/* Before/After Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 md:p-8 mb-12 text-white"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Avant</h3>
            <ul className="space-y-2 text-amber-100">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Démarrage en 3-5 minutes
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Applications qui freezent
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Ventilateur bruyant
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Après</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Démarrage en 10 secondes
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fluidité retrouvée
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Silence et fraîcheur
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos solutions d'optimisation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                {service.boost}
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <p className="text-amber-600 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Résultats garantis
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10x', label: 'Plus rapide avec SSD' },
            { value: '2000+', label: 'PC optimisés' },
            { value: '98%', label: 'Clients satisfaits' },
            { value: '24h', label: 'Délai moyen' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-amber-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
