"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Search, Filter, ShoppingBag, Coffee, Home, Car, ArrowDownLeft, ArrowUpRight } from "lucide-react"
import { Badge } from "../components/ui/badge"

export default function MovimientosPage() {
  const [selectedFilter, setSelectedFilter] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = ["Todos", "Ingresos", "Gastos", "Transferencias", "Suscripciones"]

  const transactions = [
    {
      id: 1,
      title: "Supermercado El Corte",
      category: "Alimentación",
      amount: "-€85.25",
      date: "Hoy, 14:30",
      icon: ShoppingBag,
      type: "expense",
    },
    {
      id: 2,
      title: "Nómina Marzo",
      category: "Ingresos",
      amount: "+€2,450.00",
      date: "Hoy, 09:15",
      icon: ArrowDownLeft,
      type: "income",
    },
    {
      id: 3,
      title: "Cafetería Central",
      category: "Ocio",
      amount: "-€12.50",
      date: "Ayer, 13:20",
      icon: Coffee,
      type: "expense",
    },
    {
      id: 4,
      title: "Alquiler Marzo",
      category: "Hogar",
      amount: "-€850.00",
      date: "23 Mar, 10:00",
      icon: Home,
      type: "expense",
    },
    {
      id: 5,
      title: "Transferencia a Ana",
      category: "Transferencia",
      amount: "-€200.00",
      date: "22 Mar, 18:45",
      icon: ArrowUpRight,
      type: "expense",
    },
    {
      id: 6,
      title: "Gasolina",
      category: "Transporte",
      amount: "-€65.30",
      date: "20 Mar, 12:15",
      icon: Car,
      type: "expense",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedFilter !== "Todos") {
      if (selectedFilter === "Ingresos" && transaction.type !== "income") return false
      if (selectedFilter === "Gastos" && transaction.type !== "expense") return false
      if (selectedFilter === "Transferencias" && transaction.category !== "Transferencia") return false
    }

    if (searchQuery) {
      return (
        transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return true
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 max-w-2xl mx-auto">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Movimientos</h1>
        <p className="text-gray-500 text-sm">Historial de transacciones</p>
      </motion.div>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar movimientos"
            className="pl-9 bg-gray-50 border-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon" className="bg-gray-50 border-0">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant="outline"
            className={`bg-white whitespace-nowrap cursor-pointer transition-all ${
              selectedFilter === filter ? "bg-[#8ACE00]/10 text-[#8ACE00] border-[#8ACE00]/30" : ""
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      <AnimatePresence>
        {filteredTransactions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <Search className="h-10 w-10 text-gray-300 mb-2" />
            <p className="text-gray-400">No se encontraron movimientos</p>
          </motion.div>
        ) : (
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
            {filteredTransactions.map((transaction) => {
              const Icon = transaction.icon

              return (
                <motion.div
                  key={transaction.id}
                  variants={item}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                >
                  <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                          transaction.type === "income" ? "bg-[#8ACE00]/10 text-[#8ACE00]" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{transaction.title}</h4>
                        <p className="text-xs text-gray-500">
                          {transaction.category} • {transaction.date}
                        </p>
                      </div>
                      <p
                        className={`font-semibold ${
                          transaction.type === "income" ? "text-[#8ACE00]" : "text-gray-800"
                        }`}
                      >
                        {transaction.amount}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

