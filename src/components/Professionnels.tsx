import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const services = [
  {
    title: 'Contrat de maintenance',
    description: 'Intervention prioritaire, suivi régulier, tarifs préférentiels. Sérénité garantie.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Gestion parc informatique',
    description: 'Inventaire, mises à jour, renouvellement. Votre parc sous contrôle.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: 'Solutions cloud',
    description: 'Sauvegarde, partage de fichiers, emails professionnels. Microsoft 365 & Google Workspace.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    title: 'Cybersécurité',
    description: 'Audit, antivirus, firewall, sensibilisation équipes. Protection complète.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: 'Infrastructure réseau',
    description: 'Conception, installation et maintenance de votre réseau d\'entreprise.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  {
    title: 'Formation équipes',
    description: 'Bureautique, cybersécurité, outils métier. En groupe ou individuel.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const contracts = [
  {
    name: 'Essentiel',
    description: 'Pour les petites structures',
    features: ['Intervention sous 48h', 'Maintenance préventive trimestrielle', 'Hotline téléphonique', 'Tarif horaire -15%'],
    price: 'À partir de 49€/mois'
  },
  {
    name: 'Premium',
    description: 'Pour les PME exigeantes',
    features: ['Intervention sous 24h', 'Maintenance préventive mensuelle', 'Hotline prioritaire', 'Tarif horaire -25%', 'Prêt de matériel', 'Rapport mensuel'],
    price: 'À partir de 149€/mois',
    featured: true
  },
  {
    name: 'Sur Mesure',
    description: 'Solution personnalisée',
    features: ['Intervention immédiate', 'Technicien dédié', 'SLA garanti', 'Services illimités', 'Audit annuel', 'Accompagnement DSI'],
    price: 'Sur devis'
  }
];

export default function Professionnels() {
  return (
    <PageTemplate
      title="Espace Professionnels"
      subtitle="Solutions informatiques sur mesure pour entreprises. Contrats de maintenance, gestion de parc, infrastructure et sécurité."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      }
      color="from-amber-600 to-yellow-500"
    >
      {/* Trust Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-600 to-yellow-500 rounded-2xl p-6 md:p-8 mb-12 text-white"
      >
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-1">15+</div>
            <p className="text-amber-100 text-sm">Années d'expérience</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">200+</div>
            <p className="text-amber-100 text-sm">Entreprises accompagnées</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">4h</div>
            <p className="text-amber-100 text-sm">Délai d'intervention moyen</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">98%</div>
            <p className="text-amber-100 text-sm">Clients fidèles</p>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos services entreprise
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
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contracts */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Contrats de maintenance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contracts.map((contract, index) => (
            <motion.div
              key={contract.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 ${
                contract.featured
                  ? 'bg-gradient-to-br from-amber-600 to-yellow-500 text-white'
                  : 'bg-stone-50'
              }`}
            >
              {contract.featured && (
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  Le plus choisi
                </span>
              )}
              <h3 className={`font-semibold text-xl mb-2 ${contract.featured ? '' : 'text-slate-900'}`}>
                {contract.name}
              </h3>
              <p className={`text-sm mb-4 ${contract.featured ? 'text-amber-100' : 'text-slate-600'}`}>
                {contract.description}
              </p>
              <p className={`text-2xl font-bold mb-6 ${contract.featured ? '' : 'text-amber-600'}`}>
                {contract.price}
              </p>
              <ul className="space-y-2">
                {contract.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className={`w-5 h-5 ${contract.featured ? 'text-amber-200' : 'text-amber-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={contract.featured ? 'text-amber-50' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Ils nous font confiance
        </h2>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8">
          <p className="text-slate-600 mb-6">
            Commerces, artisans, PME, associations, professions libérales... Depuis plus de 15 ans, nous accompagnons les professionnels du Bassin d'Arcachon dans leur transition numérique.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Commerces', 'Restaurants', 'Hôtels', 'Artisans', 'PME', 'Associations', 'Professions libérales', 'Agences immobilières'].map((sector) => (
              <span key={sector} className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium text-sm">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
