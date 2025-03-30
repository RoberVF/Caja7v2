import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/navigation';
import HomePage from './pages/HomePage';
import GastosPage from './pages/GastosPages';
import MovimientosPage from './pages/MovimientosPage';
import PresupuestoPage from './pages/PresupuestoPage';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

function App() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pb-20 min-h-screen"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/gastos" element={<GastosPage />} />
              <Route path="/movimientos" element={<MovimientosPage />} />
              <Route path="/presupuesto" element={<PresupuestoPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
