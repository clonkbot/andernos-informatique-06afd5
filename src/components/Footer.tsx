import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h40v40H10z' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%23fff'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23fff'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23fff'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%23fff'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-bold">Andernos</span>
                <span className="font-display text-xl font-light text-amber-400"> Informatique</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Votre partenaire informatique de confiance sur le Bassin d'Arcachon depuis plus de 15 ans.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-amber-400">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Réparation PC & Mac</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Optimisation PC</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Récupération de données</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Dépannage à domicile</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Formation informatique</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-amber-400">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>8 Avenue du Commandant Allegre<br />33510 Andernos-les-Bains</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0556826830" className="hover:text-white transition-colors">05 56 82 68 30</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hover:text-white transition-colors cursor-pointer">contact@andernosinformatique.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-amber-400">Horaires</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="text-white">9h - 12h30 / 14h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="text-white">9h - 12h30</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-slate-500">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Andernos Informatique. Tous droits réservés.
          </p>
          <p className="text-slate-600 text-xs">
            Requested by @web-user · Built by @clonkbot
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
