import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import ReparationPortable from './components/ReparationPortable';
import ReparationMac from './components/ReparationMac';
import OptimisationPC from './components/OptimisationPC';
import RecuperationDonnees from './components/RecuperationDonnees';
import RevisionDepannage from './components/RevisionDepannage';
import Formation from './components/Formation';
import HotspotWifi from './components/HotspotWifi';
import CreationSite from './components/CreationSite';
import Professionnels from './components/Professionnels';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

type Page = 'home' | 'reparation-portable' | 'reparation-mac' | 'optimisation-pc' | 'recuperation-donnees' | 'revision-depannage' | 'formation' | 'hotspot-wifi' | 'creation-site' | 'professionnels';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };

    const pages: Record<Page, JSX.Element> = {
      'home': <HomePage setCurrentPage={setCurrentPage} />,
      'reparation-portable': <ReparationPortable />,
      'reparation-mac': <ReparationMac />,
      'optimisation-pc': <OptimisationPC />,
      'recuperation-donnees': <RecuperationDonnees />,
      'revision-depannage': <RevisionDepannage />,
      'formation': <Formation />,
      'hotspot-wifi': <HotspotWifi />,
      'creation-site': <CreationSite />,
      'professionnels': <Professionnels />
    };

    return (
      <motion.div
        key={currentPage}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {pages[currentPage]}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 relative overflow-x-hidden">
      {/* Circuit pattern background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23334155'/%3E%3Ccircle cx='90' cy='10' r='3' fill='%23334155'/%3E%3Ccircle cx='10' cy='90' r='3' fill='%23334155'/%3E%3Ccircle cx='90' cy='90' r='3' fill='%23334155'/%3E%3Cpath d='M50 10v30M10 50h30M60 50h30M50 60v30' stroke='%23334155' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='5' fill='none' stroke='%23334155' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />

      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
