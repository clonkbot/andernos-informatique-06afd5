import { motion, AnimatePresence } from 'framer-motion';

type Page = 'home' | 'reparation-portable' | 'reparation-mac' | 'optimisation-pc' | 'recuperation-donnees' | 'revision-depannage' | 'formation' | 'hotspot-wifi' | 'creation-site' | 'professionnels';

interface NavigationProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const navItems: { page: Page; label: string }[] = [
  { page: 'home', label: 'Accueil' },
  { page: 'reparation-portable', label: 'Réparation Portable' },
  { page: 'reparation-mac', label: 'Réparation Mac' },
  { page: 'optimisation-pc', label: 'Optimisation PC' },
  { page: 'recuperation-donnees', label: 'Récupération Données' },
  { page: 'revision-depannage', label: 'Révision & Dépannage' },
  { page: 'formation', label: 'Formation' },
  { page: 'hotspot-wifi', label: 'Hotspot WiFi' },
  { page: 'creation-site', label: 'Création Site & Flyers' },
  { page: 'professionnels', label: 'Professionnels' },
];

export default function Navigation({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
              className="flex items-center gap-2 md:gap-3 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg md:text-xl font-bold text-slate-800 tracking-tight">Andernos</span>
                <span className="font-display text-lg md:text-xl font-light text-amber-600 tracking-tight"> Informatique</span>
              </div>
            </button>

            {/* Desktop Nav - Hidden on smaller screens */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.slice(0, 6).map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.page
                      ? 'text-amber-700 bg-amber-50'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="relative group">
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-stone-100 transition-all duration-200 flex items-center gap-1">
                  Plus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-stone-200 py-2 min-w-[200px]">
                    {navItems.slice(6).map((item) => (
                      <button
                        key={item.page}
                        onClick={() => setCurrentPage(item.page)}
                        className={`w-full px-4 py-2 text-left text-sm font-medium transition-all duration-200 ${
                          currentPage === item.page
                            ? 'text-amber-700 bg-amber-50'
                            : 'text-slate-600 hover:text-slate-800 hover:bg-stone-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden w-12 h-12 flex items-center justify-center rounded-xl hover:bg-stone-100 transition-colors"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-slate-700 rounded-full origin-left"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="w-full h-0.5 bg-slate-700 rounded-full"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-slate-700 rounded-full origin-left"
                />
              </div>
            </button>

            {/* CTA Button */}
            <a
              href="tel:0556826830"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              05 56 82 68 30
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm xl:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-white shadow-2xl xl:hidden overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => { setCurrentPage(item.page); setIsMenuOpen(false); }}
                    className={`w-full px-4 py-4 rounded-xl text-left font-medium transition-all duration-200 ${
                      currentPage === item.page
                        ? 'text-amber-700 bg-amber-50'
                        : 'text-slate-700 hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl"
              >
                <p className="text-slate-600 text-sm mb-3">Besoin d'aide rapidement ?</p>
                <a
                  href="tel:0556826830"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold shadow-lg shadow-amber-500/25"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  05 56 82 68 30
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
