import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const cases = [
  {
    title: 'Disque dur défaillant',
    description: 'Clics, bruits suspects, disque non détecté. Récupération en salle blanche si nécessaire.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    )
  },
  {
    title: 'Fichiers supprimés',
    description: 'Corbeille vidée, formatage accidentel. Récupération possible dans la plupart des cas.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  },
  {
    title: 'SSD / Clé USB',
    description: 'Mémoire flash corrompue, partitions perdues. Outils spécialisés.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Carte SD / Photo',
    description: 'Photos de vacances, événements. Récupération images et vidéos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'NAS / RAID',
    description: 'Serveur de stockage en panne. Reconstruction RAID et récupération.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: 'Ransomware',
    description: 'Fichiers chiffrés par virus. Tentative de décryptage et récupération.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export default function RecuperationDonnees() {
  return (
    <PageTemplate
      title="Récupération de Données"
      subtitle="Vos données sont précieuses. Photos, documents, souvenirs... Nous mettons tout en oeuvre pour les récupérer."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      }
      color="from-emerald-500 to-teal-500"
    >
      {/* Warning Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-12"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg text-amber-800 mb-2">En cas de perte de données</h3>
            <ul className="text-amber-700 space-y-1 text-sm">
              <li>• <strong>N'essayez pas</strong> de réparer vous-même - vous pourriez aggraver la situation</li>
              <li>• <strong>Éteignez</strong> immédiatement l'appareil si vous entendez des bruits suspects</li>
              <li>• <strong>Ne réinstallez rien</strong> sur le support - les données pourraient être écrasées</li>
              <li>• <strong>Contactez-nous</strong> rapidement pour maximiser les chances de récupération</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Cases Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Cas de récupération
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Notre processus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Diagnostic', desc: 'Analyse gratuite de votre support de stockage' },
            { step: '2', title: 'Devis', desc: 'Estimation du taux de récupération et tarif' },
            { step: '3', title: 'Récupération', desc: 'Travail en conditions optimales' },
            { step: '4', title: 'Livraison', desc: 'Données sur nouveau support sécurisé' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-display font-bold text-emerald-100 mb-2">{item.step}</div>
              <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Tarification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Récupération logicielle</h3>
            <p className="text-slate-600 text-sm mb-4">Fichiers supprimés, partition corrompue</p>
            <p className="text-2xl font-bold text-emerald-600">À partir de 79€</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white"
          >
            <h3 className="font-semibold text-lg mb-2">Récupération matérielle</h3>
            <p className="text-emerald-100 text-sm mb-4">Disque dur défaillant, SSD endommagé</p>
            <p className="text-2xl font-bold">À partir de 149€</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-stone-50 rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Salle blanche</h3>
            <p className="text-slate-600 text-sm mb-4">Cas critiques nécessitant intervention spécialisée</p>
            <p className="text-2xl font-bold text-emerald-600">Sur devis</p>
          </motion.div>
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">
          * Pas de récupération = pas de facturation. Diagnostic toujours gratuit.
        </p>
      </div>
    </PageTemplate>
  );
}
