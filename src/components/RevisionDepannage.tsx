import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const services = [
  {
    title: 'Dépannage à domicile',
    description: 'Un technicien se déplace chez vous pour résoudre vos problèmes informatiques.',
    price: 'À partir de 49€/h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Révision complète',
    description: 'Check-up complet de votre ordinateur : système, logiciels, sécurité.',
    price: 'À partir de 59€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: 'Suppression virus',
    description: 'Analyse et nettoyage des virus, malwares, spywares et publicités.',
    price: 'À partir de 49€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Installation logiciels',
    description: 'Installation et configuration de vos logiciels, imprimantes, périphériques.',
    price: 'À partir de 29€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
  {
    title: 'Configuration réseau',
    description: 'Installation box, WiFi, partage de fichiers, réseau domestique.',
    price: 'À partir de 39€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  {
    title: 'Sauvegarde données',
    description: 'Mise en place de solutions de sauvegarde automatique et sécurisée.',
    price: 'À partir de 49€',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  }
];

export default function RevisionDepannage() {
  return (
    <PageTemplate
      title="Révision & Dépannage"
      subtitle="Intervention rapide en boutique ou à domicile. Diagnostic gratuit et devis transparent pour tous vos problèmes informatiques."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      color="from-violet-500 to-purple-500"
    >
      {/* Intervention Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl p-6 md:p-8 text-white">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Dépannage à domicile</h3>
          <p className="text-violet-100 mb-4">Un technicien se déplace chez vous dans un rayon de 20km autour d'Andernos.</p>
          <p className="text-2xl font-bold">49€/h</p>
          <p className="text-violet-200 text-sm">Déplacement inclus</p>
        </div>
        <div className="bg-stone-50 rounded-2xl p-6 md:p-8">
          <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">En boutique</h3>
          <p className="text-slate-600 mb-4">Déposez votre matériel, nous nous occupons du reste. Diagnostic gratuit.</p>
          <p className="text-2xl font-bold text-violet-600">Diagnostic gratuit</p>
          <p className="text-slate-500 text-sm">Sans engagement</p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos interventions
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
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{service.description}</p>
              <p className="text-violet-600 font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zone d'intervention */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Zone d'intervention
        </h2>
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bassin d'Arcachon et environs</h3>
              <p className="text-slate-600 mb-4">Nous intervenons dans un rayon de 20km autour d'Andernos-les-Bains :</p>
              <div className="flex flex-wrap gap-2">
                {['Andernos', 'Arès', 'Lège-Cap-Ferret', 'Audenge', 'Biganos', 'Lanton', 'Marcheprime', 'Le Teich'].map((city) => (
                  <span key={city} className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
