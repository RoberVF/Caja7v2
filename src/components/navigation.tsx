import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, PieChart, ArrowUpDown, BarChart3 } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Cuentas", icon: CreditCard },
    { path: "/gastos", label: "Gastos", icon: PieChart },
    { path: "/movimientos", label: "Movimientos", icon: ArrowUpDown },
    { path: "/presupuesto", label: "Presupuesto", icon: BarChart3 },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-100 z-50 px-4 sm:px-6 md:px-8 max-w-screen-lg mx-auto">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className="relative flex flex-col items-center justify-center w-full h-full"
            >
              <motion.div 
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon 
                  size={20} 
                  className={`${isActive ? "text-[#8ACE00]" : "text-gray-400"} transition-colors duration-200`} 
                />
                <span className={`text-xs mt-1 ${isActive ? "text-[#8ACE00] font-medium" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute -bottom-0 left-0 right-0 h-0.5 bg-[#8ACE00]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
