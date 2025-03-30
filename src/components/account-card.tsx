import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { ChevronRight } from 'lucide-react';

interface AccountProps {
  account: {
    id: number;
    name: string;
    balance: string;
    lastMovement: string;
    type: string;
  };
}

export default function AccountCard({ account }: AccountProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">{account.name}</h3>
            <p className="text-xs text-gray-500">{account.type}</p>
          </div>
          <div className="flex items-center">
            <div className="text-right mr-2">
              <p className="font-semibold">{account.balance}</p>
              <p className="text-xs text-gray-500">Último: {account.lastMovement}</p>
            </div>
            <div className="bg-gray-50 rounded-full p-1">
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
