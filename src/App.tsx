import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import HomePage from './pages/HomePage'
import GastosPage from './pages/GastosPages'
import MovimientosPage from './pages/MovimientosPage'
import PresupuestoPage from './pages/PresupuestoPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
      <main className="flex-1 overflow-hidden pb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gastos" element={<GastosPage />} />
          <Route path="/movimientos" element={<MovimientosPage />} />
          <Route path="/presupuesto" element={<PresupuestoPage />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  )
}

export default App
