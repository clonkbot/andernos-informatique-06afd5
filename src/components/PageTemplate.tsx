import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
}

export default function PageTemplate({ title, subtitle, icon, color, children }: PageTemplateProps) {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-white" />
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${color} opacity-10 rounded-full blur-3xl`} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-xl`}>
              {icon}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Besoin d'un devis ?
            </h2>
            <p className="text-slate-600 mb-8">
              Contactez-nous pour un diagnostic gratuit et un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0556826830"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                05 56 82 68 30
              </a>
              <a
                href="https://maps.google.com/?q=8+Avenue+du+Commandant+Allegre+33510+Andernos-les-Bains"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold border-2 border-slate-200 hover:border-amber-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Venir en boutique
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
