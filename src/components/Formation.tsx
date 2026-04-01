import { motion } from 'framer-motion';
import PageTemplate from './PageTemplate';

const courses = [
  {
    title: 'Initiation informatique',
    description: 'Découvrez les bases : souris, clavier, bureau Windows, gestion des fichiers.',
    level: 'Débutant',
    duration: '2h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Internet & Email',
    description: 'Naviguer sur internet, utiliser les emails, éviter les arnaques en ligne.',
    level: 'Débutant',
    duration: '2h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    )
  },
  {
    title: 'Smartphone & Tablette',
    description: 'Maîtrisez votre téléphone : appels, messages, photos, applications.',
    level: 'Débutant',
    duration: '2h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Photos & Vidéos',
    description: 'Transférer, organiser et retoucher vos photos. Créer des albums.',
    level: 'Intermédiaire',
    duration: '2h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Bureautique',
    description: 'Word, Excel, PowerPoint : créez documents, tableaux et présentations.',
    level: 'Intermédiaire',
    duration: '3h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Sécurité numérique',
    description: 'Protégez vos données : mots de passe, sauvegardes, arnaques à éviter.',
    level: 'Tous niveaux',
    duration: '2h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function Formation() {
  return (
    <PageTemplate
      title="Formation"
      subtitle="Apprenez à maîtriser l'informatique à votre rythme. Cours individuels ou en petit groupe, adaptés à votre niveau."
      icon={
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      }
      color="from-rose-500 to-pink-500"
    >
      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {[
          { icon: '👤', title: 'Cours personnalisés', desc: 'Adapté à votre rythme et vos besoins' },
          { icon: '🏠', title: 'À domicile ou en boutique', desc: 'Vous choisissez le lieu' },
          { icon: '📱', title: 'Sur votre matériel', desc: 'Formation sur votre propre équipement' }
        ].map((item, index) => (
          <div key={item.title} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg text-slate-900 mb-1">{item.title}</h3>
            <p className="text-slate-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Courses Grid */}
      <div className="mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Nos formations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                  {course.icon}
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                    {course.duration}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{course.title}</h3>
              <p className="text-slate-600 text-sm">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Tarifs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-semibold text-xl text-slate-900 mb-2">Cours individuel</h3>
            <p className="text-slate-600 mb-4">Formation 100% personnalisée, à votre rythme.</p>
            <p className="text-3xl font-bold text-rose-600 mb-1">35€ <span className="text-lg font-normal text-slate-500">/heure</span></p>
            <p className="text-sm text-slate-500">En boutique ou à domicile</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-6 md:p-8 text-white"
          >
            <h3 className="font-semibold text-xl mb-2">Pack 5 heures</h3>
            <p className="text-rose-100 mb-4">Économisez avec notre formule pack.</p>
            <p className="text-3xl font-bold mb-1">150€ <span className="text-lg font-normal text-rose-200">soit 30€/h</span></p>
            <p className="text-sm text-rose-200">15% d'économie</p>
          </motion.div>
        </div>
      </div>
    </PageTemplate>
  );
}
