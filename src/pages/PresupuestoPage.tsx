"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { PlusCircle, TrendingUp, AlertCircle, ChevronRight } from "lucide-react"

export default function PresupuestoPage() {
  const [expandedBudget, setExpandedBudget] = useState<number | null>(null)

  const budgets = [
    {
      id: 1,
      name: "Alimentación",
      current: 485.25,
      limit: 600,
      percentage: 81,
      status: "normal",
      details: [
        { name: "Supermercado", amount: 320.5 },
        { name: "Restaurantes", amount: 120.75 },
        { name: "Otros", amount: 44.0 },
      ],
    },
    {
      id: 2,
      name: "Transporte",
      current: 320.5,
      limit: 350,
      percentage: 92,
      status: "warning",
      details: [
        { name: "Gasolina", amount: 180.3 },
        { name: "Transporte público", amount: 85.2 },
        { name: "Taxi", amount: 55.0 },
      ],
    },
    {
      id: 3,
      name: "Ocio",
      current: 275.3,
      limit: 250,
      percentage: 110,
      status: "exceeded",
      details: [
        { name: "Cine", amount: 45.0 },
        { name: "Suscripciones", amount: 35.99 },
        { name: "Salidas", amount: 194.31 },
      ],
    },
    {
      id: 4,
      name: "Hogar",
      current: 230.45,
      limit: 900,
      percentage: 26,
      status: "normal",
      details: [
        { name: "Electricidad", amount: 85.45 },
        { name: "Agua", amount: 45.0 },
        { name: "Internet", amount: 100.0 },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-[#8ACE00]"
      case "warning":
        return "bg-amber-500"
      case "exceeded":
        return "bg-red-500"
      default:
        return "bg-[#8ACE00]"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return null
      case "warning":
        return <TrendingUp className="h-4 w-4 text-amber-500" />
      case "exceeded":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const toggleBudget = (id: number) => {
    if (expandedBudget === id) {
      setExpandedBudget(null)
    } else {
      setExpandedBudget(id)
    }
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 max-w-2xl mx-auto">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Presupuesto</h1>
        <p className="text-gray-500 text-sm">Gestiona tus límites de gasto</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="p-6 rounded-xl border border-gray-100 card-shadow">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-500 text-sm">Presupuesto Total</p>
              <h2 className="text-2xl font-bold">
                €2,100 <span className="text-sm font-normal text-gray-500">/ mes</span>
              </h2>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <p>Gastado</p>
              <p className="font-medium">€1,311.50 (62%)</p>
            </div>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Progress value={62} className="h-2" />
            </motion.div>
            <p className="text-xs text-gray-500">Restante: €788.50</p>
          </div>
        </Card>
      </motion.div>

      <h3 className="font-semibold mb-3">Por categorías</h3>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
        {budgets.map((budget) => (
          <motion.div key={budget.id} variants={item} layout className="overflow-hidden">
            <Card
              className="rounded-xl border border-gray-100 card-shadow overflow-hidden"
              onClick={() => toggleBudget(budget.id)}
            >
              <motion.div
                className="p-4 cursor-pointer"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                whileTap={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <h4 className="font-medium">{budget.name}</h4>
                    {getStatusIcon(budget.status) && <div className="ml-2">{getStatusIcon(budget.status)}</div>}
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold mr-2">
                      €{budget.current.toFixed(2)}{" "}
                      <span className="text-xs font-normal text-gray-500">/ €{budget.limit}</span>
                    </p>
                    <motion.div
                      animate={{ rotate: expandedBudget === budget.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <Progress value={budget.percentage} className={`h-2 ${getStatusColor(budget.status)}`} />
                </motion.div>
                <p className="text-xs text-gray-500 mt-1">
                  {budget.status === "exceeded"
                    ? `Excedido por €${(budget.current - budget.limit).toFixed(2)}`
                    : `Restante: €${(budget.limit - budget.current).toFixed(2)}`}
                </p>
              </motion.div>

              <AnimatePresence>
                {expandedBudget === budget.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 border-t border-gray-100"
                  >
                    <p className="text-xs font-medium text-gray-500 mt-3 mb-2">Desglose de gastos</p>
                    {budget.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center py-1"
                      >
                        <p className="text-sm">{detail.name}</p>
                        <p className="text-sm font-medium">€{detail.amount.toFixed(2)}</p>
                      </motion.div>
                    ))}
                    <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-[#8ACE00] text-xs">
                        Ver todos los movimientos
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

