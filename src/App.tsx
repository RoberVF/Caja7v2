import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import HomePage from './pages/HomePage'
import GastosPage from './pages/GastosPages'
import MovimientosPage from './pages/MovimientosPage'
import PresupuestoPage from './pages/PresupuestoPage'
import ToolsPage from './pages/ToolsPage'
import AhorroInteligentePage from './pages/AhorroInteligentePage'
import AjustesPage from './pages/AjustesPage'
import PaybackPage from './pages/PaybackPage'
import SplitPage from './pages/SplitPage'
import BizumPage from './pages/BizumPage'
import ExchangePage from './pages/ExchangePage'
import PromocionesPage from './pages/PromocionesPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
      <main className="flex-1 overflow-hidden pb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/gastos" element={<GastosPage />} />
          <Route path="/tools/movimientos" element={<MovimientosPage />} />
          <Route path="/tools/presupuesto" element={<PresupuestoPage />} />
          <Route path="/tools/ahorro" element={< AhorroInteligentePage />} />
          <Route path="/tools/payback" element={< PaybackPage />} />
          <Route path="/tools/split" element={< SplitPage />} />
          <Route path="/tools/bizum" element={< BizumPage />} />
          <Route path="/tools/exchange" element={< ExchangePage />} />
          <Route path="/tools/promociones" element={< PromocionesPage />} />
          <Route path="/settings" element={< AjustesPage />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  )
}

export default App
