"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { PieChart, ArrowUpDown, BarChart3, Wallet, Sparkles, ChevronRight, TrendingUp, ArchiveRestore, ArrowDownUp, Landmark, BatteryFull } from "lucide-react"

export default function ToolsPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const tools = [
    {
      id: "presupuesto",
      name: "Presupuestos",
      description: "Gestiona tus límites de gasto y ahorra más",
      icon: BarChart3,
      color: "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]",
      path: "/tools/presupuesto",
    },
    {
      id: "movimientos",
      name: "Movimientos",
      description: "Revisa el historial de tus transacciones",
      icon: ArrowUpDown,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
      path: "/tools/movimientos",
    },
    {
      id: "gastos",
      name: "Gastos",
      description: "Analiza y optimiza tus gastos mensuales",
      icon: PieChart,
      color: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
      path: "/tools/gastos",
    },
    {
      id: "ahorro",
      name: "Ahorro Inteligente",
      description: "Configura metas de ahorro automáticas",
      icon: Sparkles,
      color: "bg-gradient-to-br from-[#EC4899] to-[#BE185D]",
      path: "/tools/ahorro",
    },
    {
      id: "payback",
      name: "Payback",
      description: "Consigue un reembolso porcentual con tus compras",
      icon: ArchiveRestore,
      color: "bg-gradient-to-br from-[#CA4332] to-[#CA1234]",
      path: "/tools/payback",
    },
    {
      id: "split",
      name: "Split",
      description: "Divide dinero entre usuarios o cuentas",
      icon: ArrowDownUp,
      color: "bg-gradient-to-br from-[#42f55d] to-[#42f55d]",
      path: "/tools/split",
    },
    {
      id: "exchange",
      name: "Exchange",
      description: "Invierte en los mejores activos financieros y realiza cambio de divisas sobre tu dinero",
      icon: Landmark,
      color: "bg-gradient-to-br from-[#AD2950] to-[#AD2950]",
      path: "/tools/exchange",
    },
    {
      id: "promociones",
      name: "Promociones",
      description: "Consigue descuentos y promociones en tus compras",
      icon: BatteryFull,
      color: "bg-gradient-to-br from-[#9542F5] to-[#9542F5]",
      path: "/tools/promociones",
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

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 max-w-2xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="card-gradient text-white p-6 rounded-xl overflow-hidden relative">

          {/* Design */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white opacity-10"
              animate={{
                x: [0, -10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          {/* Contenido */}
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-white/80 text-sm">Optimiza tus finanzas</p>
                <motion.h2
                  className="text-2xl font-bold mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  7Tools
                </motion.h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Wallet className="h-5 w-5 text-white" />
              </div>
            </div>

            <p className="text-white/90 text-sm mb-4">
              Descubre herramientas inteligentes para gestionar tu dinero de forma eficiente y alcanzar tus metas
              financieras.
            </p>

            <div className="flex items-center">
              <div className="flex space-x-1">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <BarChart3 className="h-3 w-3 text-white" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <PieChart className="h-3 w-3 text-white" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpDown className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-white/80 text-xs">Herramientas personalizadas para ti</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tools */}
      <h3 className="font-semibold mb-4">Selecciona una herramienta</h3>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setActiveCard(tool.id)}
            onHoverEnd={() => setActiveCard(null)}
          >
            <Link to={tool.path}>
              <Card
                className={`p-5 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300 overflow-hidden relative h-full`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-3`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-medium text-lg">{tool.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
                  </div>
                  <motion.div
                    animate={{
                      x: activeCard === tool.id ? 0 : 5,
                      opacity: activeCard === tool.id ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-50 rounded-full p-2"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 ${tool.color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: activeCard === tool.id ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <Card className="p-5 rounded-xl border border-gray-100 card-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Resumen financiero</h3>
            <TrendingUp className="h-5 w-5 text-[#8ACE00]" />
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <p className="text-gray-500">Gastos vs. Ingresos</p>
                <p className="font-medium">47%</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-[#8ACE00]"
                  initial={{ width: 0 }}
                  animate={{ width: "47%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <p className="text-gray-500">Ahorro mensual</p>
                <p className="font-medium">€1,711.75</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-[#3B82F6]"
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <p className="text-gray-500">Metas completadas</p>
                <p className="font-medium">2/3</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-[#6366F1]"
                  initial={{ width: 0 }}
                  animate={{ width: "66%" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
