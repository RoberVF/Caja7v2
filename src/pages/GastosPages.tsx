"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { PieChart, BarChart, LineChart } from "lucide-react"
import { Button } from "../components/ui/button"

export default function GastosPage() {
  const [activeView, setActiveView] = useState<"pie" | "bar" | "line">("pie")

  const categories = [
    { name: "Alimentación", amount: "€485.25", percentage: 32, color: "#8ACE00" },
    { name: "Transporte", amount: "€320.50", percentage: 21, color: "#5D8C00" },
    { name: "Ocio", amount: "€275.30", percentage: 18, color: "#B5E550" },
    { name: "Hogar", amount: "€230.45", percentage: 15, color: "#D8F0A0" },
    { name: "Otros", amount: "€217.25", percentage: 14, color: "#F0F0F0" },
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

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 max-w-2xl mx-auto">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Gastos</h1>
        <p className="text-gray-500 text-sm">Análisis de tus gastos</p>
      </motion.div>

      <Tabs defaultValue="mensual" className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="semanal" className="text-xs">
              Semanal
            </TabsTrigger>
            <TabsTrigger value="mensual" className="text-xs">
              Mensual
            </TabsTrigger>
            <TabsTrigger value="anual" className="text-xs">
              Anual
            </TabsTrigger>
          </TabsList>

          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-md ${activeView === "pie" ? "bg-gray-100" : ""}`}
              onClick={() => setActiveView("pie")}
            >
              <PieChart className="h-4 w-4 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-md ${activeView === "bar" ? "bg-gray-100" : ""}`}
              onClick={() => setActiveView("bar")}
            >
              <BarChart className="h-4 w-4 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 rounded-md ${activeView === "line" ? "bg-gray-100" : ""}`}
              onClick={() => setActiveView("line")}
            >
              <LineChart className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>

        <TabsContent value="mensual">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Card className="p-6 rounded-xl border border-gray-100 card-shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Total Gastos (Mar)</p>
                  <h2 className="text-2xl font-bold">€1,528.75</h2>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">vs. Feb</p>
                  <p className="text-[#8ACE00] font-medium">-12.5%</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeView === "pie" && (
                  <motion.div
                    key="pie"
                    variants={chartVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative h-40 mb-4"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-28 h-28 rounded-full border-8 border-[#8ACE00] flex items-center justify-center"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <p className="text-sm font-medium">32% Alim.</p>
                      </motion.div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#F0F0F0"
                        strokeWidth="10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#8ACE00"
                        strokeWidth="10"
                        strokeDasharray="282.6"
                        strokeDashoffset="192.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.32 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </svg>
                  </motion.div>
                )}

                {activeView === "bar" && (
                  <motion.div
                    key="bar"
                    variants={chartVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-40 mb-4 flex items-end justify-between px-2"
                  >
                    {categories.map((category, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <motion.div
                          className="w-8 rounded-t-md"
                          style={{ backgroundColor: category.color }}
                          initial={{ height: 0 }}
                          animate={{ height: `${category.percentage * 1.2}px` }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        />
                        <p className="text-xs mt-2">{category.name.substring(0, 3)}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeView === "line" && (
                  <motion.div
                    key="line"
                    variants={chartVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-40 mb-4"
                  >
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <motion.path
                        d="M0,50 L20,30 L40,35 L60,15 L80,25 L100,5"
                        fill="none"
                        stroke="#8ACE00"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      <motion.path
                        d="M0,50 L20,30 L40,35 L60,15 L80,25 L100,5"
                        fill="none"
                        stroke="#8ACE00"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="0.1 8.9"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          <h3 className="font-semibold mb-3">Por categorías</h3>

          <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
            {categories.map((category, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{category.name}</h4>
                    <p className="font-semibold">{category.amount}</p>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{category.percentage}% del total</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="semanal">
          <div className="flex items-center justify-center h-60 bg-gray-50 rounded-xl">
            <p className="text-gray-400">Vista semanal</p>
          </div>
        </TabsContent>

        <TabsContent value="anual">
          <div className="flex items-center justify-center h-60 bg-gray-50 rounded-xl">
            <p className="text-gray-400">Vista anual</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

