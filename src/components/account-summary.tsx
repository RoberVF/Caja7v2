import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AccountSummaryProps {
  totalBalance: string;
  monthlyIncome: string;
  monthlyExpenses: string;
  percentageChange: number;
  month: string;
}

export default function AccountSummary({
  totalBalance,
  monthlyIncome,
  monthlyExpenses,
  month
}: AccountSummaryProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <Card className="card-gradient text-white p-6 rounded-xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10"
            animate={{ 
              x: [0, 10, 0], 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white opacity-10"
            animate={{ 
              x: [0, -10, 0], 
              y: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-white/80 text-sm">Balance Total</p>
              <motion.h2 
                className="text-3xl font-bold mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {totalBalance}
              </motion.h2>
            </div>
            {/* <Button variant="ghost" size="sm" className="text-white bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 h-auto">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-xs">Ver análisis</span>
            </Button> */}
          </div>
          
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-white/80 text-xs">Ingresos ({month})</p>
              <div className="flex items-center">
                <p className="text-sm font-medium">{monthlyIncome}</p>
                <TrendingUp className="h-3 w-3 ml-1 text-white/80" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-white/80 text-xs">Gastos ({month})</p>
              <div className="flex items-center">
                <p className="text-sm font-medium">{monthlyExpenses}</p>
                <TrendingDown className="h-3 w-3 ml-1 text-white/80" />
              </div>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`flex items-center justify-center w-12 h-12 rounded-full ${
                isPositiveChange ? 'bg-white/20' : 'bg-white/10'
              }`}
            >
              <div className="text-center">
                <p className={`text-xs font-bold ${isPositiveChange ? 'text-white' : 'text-white/80'}`}>
                  {isPositiveChange ? '+' : ''}{percentageChange}%
                </p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
