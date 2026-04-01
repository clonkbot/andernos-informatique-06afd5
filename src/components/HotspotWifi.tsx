import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const services = [
  {
    title: 'Installation WiFi domestique',
    description: 'Configuration optimale de votre box et extension de couverture WiFi.',
    price: 'À partir de 49€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Répéteur / Mesh WiFi',
    description: 'Extension de portée pour couvrir toute votre maison sans zone morte.',
    price: 'À partir de 79€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0" />
      </svg>
    )
  },
  {
    title: 'Borne WiFi professionnelle',
    description: 'Points d\'accès haute performance pour entreprises et commerces.',
    price: 'Sur devis',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Hotspot captif',
    description: 'Portail de connexion personnalisé pour hôtels, restaurants, campings.',
    price: 'Sur devis',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: 'Câblage réseau',
    description: 'Installation de prises Ethernet pour connexion filaire stable.',
    price: 'À partir de 39€/prise',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Audit réseau',
    description: 'Analyse de votre infrastructure et recommandations d\'amélioration.',
    price: 'À partir de 59€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  }
];

export default function HotspotWifi() {
  return (
    <PageTemplate
      title="Hotspot WiFi"
      subtitle="Installation et configuration de réseaux WiFi pour particuliers et professionnels. Couverture optimale garantie."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      }
      color="from-sky-500 to-blue-500"
    >
      {/* Coverage Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl p-6 md:p-8 mb-12 text-white"
      >
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl mb-2">📶</div>
            <h3 className="font-bold text-lg">Couverture totale</h3>
            <p className="text-sky-100 text-sm">Plus de zones mortes</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold text-lg">Performance maximale</h3>
            <p className="text-sky-100 text-sm">WiFi 6 et dernières technologies</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="font-bold text-lg">Sécurité renforcée</h3>
            <p className="text-sky-100 text-sm">WPA3 et réseau invité</p>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos solutions WiFi
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
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <p className="text-sky-600 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Pour qui ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-2xl p-6"
          >
            <h3 className="font-semibold text-xl text-slate-900 mb-4">Particuliers</h3>
            <ul className="space-y-3">
              {[
                'Maison à étages avec WiFi qui ne passe pas',
                'Jardin ou terrasse à couvrir',
                'Télétravail avec besoin de connexion stable',
                'Streaming 4K et gaming sans lag'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl p-6 text-white"
          >
            <h3 className="font-semibold text-xl mb-4">Professionnels</h3>
            <ul className="space-y-3">
              {[
                'Hôtels et chambres d\'hôtes',
                'Restaurants et cafés',
                'Campings et résidences de vacances',
                'Bureaux et espaces de coworking'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sky-200 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sky-50">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
}
