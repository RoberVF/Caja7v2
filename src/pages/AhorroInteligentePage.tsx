"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import {
  Sparkles,
  TrendingUp,
  Lightbulb,
  PiggyBank,
  Plus,
  ChevronRight,
  Calendar,
  DollarSign,
  Percent,
  ArrowRight,
} from "lucide-react"

export default function AhorroInteligentePage() {
  const [activeTab, setActiveTab] = useState("metas")

  const metas = [
    {
      id: 1,
      nombre: "Vacaciones",
      objetivo: 2500,
      actual: 1750,
      porcentaje: 70,
      fecha: "Ago 2025",
      icono: Calendar,
      color: "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]",
    },
    {
      id: 2,
      nombre: "Nuevo ordenador",
      objetivo: 1200,
      actual: 480,
      porcentaje: 40,
      fecha: "Dic 2024",
      icono: DollarSign,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      id: 3,
      nombre: "Fondo de emergencia",
      objetivo: 5000,
      actual: 3250,
      porcentaje: 65,
      fecha: "Continuo",
      icono: PiggyBank,
      color: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
    },
  ]

  const recomendaciones = [
    {
      id: 1,
      titulo: "Ahorro automático",
      descripcion: "Configura un 10% de tu nómina para ahorro automático",
      impacto: "Alto",
      icono: Sparkles,
    },
    {
      id: 2,
      titulo: "Reducción de gastos",
      descripcion: "Identifica suscripciones duplicadas o sin uso",
      impacto: "Medio",
      icono: TrendingUp,
    },
    {
      id: 3,
      titulo: "Inversión inteligente",
      descripcion: "Considera diversificar tus ahorros en fondos indexados",
      impacto: "Alto",
      icono: Lightbulb,
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

  const getImpactoColor = (impacto: string) => {
    switch (impacto) {
      case "Alto":
        return "text-[#8ACE00]"
      case "Medio":
        return "text-amber-500"
      case "Bajo":
        return "text-gray-500"
      default:
        return "text-[#8ACE00]"
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
        <h1 className="text-2xl font-bold">Ahorro Inteligente</h1>
        <p className="text-gray-500 text-sm">Optimiza tus ahorros y alcanza tus metas financieras</p>
      </motion.div>

      {/* Tarjeta de resumen */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Card className="card-gradient text-white p-6 rounded-xl overflow-hidden relative">
          {/* Elementos decorativos */}
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
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-white/80 text-sm">Capacidad de ahorro</p>
                <motion.h2
                  className="text-3xl font-bold mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  €1,711.75
                </motion.h2>
                <p className="text-white/80 text-xs mt-1">Estimado mensual</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <p>Ahorro actual</p>
                <p className="font-medium">€5,480 (32%)</p>
              </div>
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-2 rounded-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: "32%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
              </motion.div>
              <div className="flex justify-between text-xs text-white/80">
                <p>Meta anual: €17,000</p>
                <p>Potencial: +€20,541</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs de navegación */}
      <Tabs defaultValue="metas" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="metas">Metas</TabsTrigger>
          <TabsTrigger value="automatico">Automático</TabsTrigger>
          <TabsTrigger value="consejos">Consejos</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === "metas" && (
            <motion.div
              key="metas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="metas" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Tus metas de ahorro</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    <span className="text-xs">Nueva meta</span>
                  </Button>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {metas.map((meta) => {
                    const Icon = meta.icono
                    return (
                      <motion.div key={meta.id} variants={item}>
                        <Card className="p-5 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-start">
                              <div
                                className={`w-10 h-10 rounded-lg ${meta.color} flex items-center justify-center mr-3`}
                              >
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-medium">{meta.nombre}</h3>
                                <p className="text-xs text-gray-500">Objetivo: €{meta.objetivo.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">€{meta.actual.toLocaleString()}</p>
                              <p className="text-xs text-gray-500">Meta: {meta.fecha}</p>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <p className="text-gray-500">Progreso</p>
                              <p className="font-medium">{meta.porcentaje}%</p>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-2 rounded-full ${meta.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${meta.porcentaje}%` }}
                                transition={{ duration: 0.8 }}
                              />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "automatico" && (
            <motion.div
              key="automatico"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="automatico" className="mt-0">
                <Card className="p-6 rounded-xl border border-gray-100 card-shadow mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">Ahorro automático</h3>
                      <p className="text-sm text-gray-500 mt-1">Configura reglas para ahorrar sin esfuerzo</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      <PiggyBank className="h-5 w-5 text-[#8ACE00]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                          <Percent className="h-4 w-4 text-[#8ACE00]" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">10% de cada ingreso</p>
                          <p className="text-xs text-gray-500">Ahorro automático de nómina</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                          <Calendar className="h-4 w-4 text-[#3B82F6]" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Ahorro semanal</p>
                          <p className="text-xs text-gray-500">€50 cada lunes</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center mr-3">
                          <Sparkles className="h-4 w-4 text-[#6366F1]" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Redondeo de gastos</p>
                          <p className="text-xs text-gray-500">Ahorra la diferencia al redondear</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-[#8ACE00] hover:bg-[#7AB800]">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear nueva regla
                  </Button>
                </Card>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow">
                  <h3 className="font-medium mb-3">Resumen de ahorro automático</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Este mes</p>
                        <p className="font-medium">€325.50</p>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Último trimestre</p>
                        <p className="font-medium">€975.25</p>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Total anual</p>
                        <p className="font-medium">€3,250.75</p>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "consejos" && (
            <motion.div
              key="consejos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="consejos" className="mt-0">
                <Card className="p-6 rounded-xl border border-gray-100 card-shadow mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-lg">Análisis personalizado</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Basado en tus hábitos financieros de los últimos 3 meses
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      <Lightbulb className="h-5 w-5 text-[#8ACE00]" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                        <TrendingUp className="h-4 w-4 text-[#8ACE00]" />
                      </div>
                      <div>
                        <p className="font-medium">Potencial de ahorro</p>
                        <p className="text-sm text-gray-500">Podrías ahorrar hasta €450 más al mes</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Distribución de gastos</p>
                      <p className="text-xs text-gray-500">Último mes</p>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="h-4 rounded-full bg-[#8ACE00]" style={{ width: "35%" }}></div>
                      <div className="h-4 rounded-full bg-[#3B82F6]" style={{ width: "25%" }}></div>
                      <div className="h-4 rounded-full bg-[#6366F1]" style={{ width: "20%" }}></div>
                      <div className="h-4 rounded-full bg-[#EC4899]" style={{ width: "15%" }}></div>
                      <div className="h-4 rounded-full bg-gray-300" style={{ width: "5%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <p>Esenciales: 35%</p>
                      <p>Ocio: 25%</p>
                      <p>Transporte: 20%</p>
                      <p>Otros: 20%</p>
                    </div>
                  </div>
                </Card>

                <h3 className="font-semibold mb-3">Recomendaciones para ti</h3>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                  {recomendaciones.map((recomendacion) => {
                    const Icon = recomendacion.icono
                    return (
                      <motion.div key={recomendacion.id} variants={item}>
                        <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-3">
                              <Icon className="h-5 w-5 text-[#8ACE00]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h4 className="font-medium">{recomendacion.titulo}</h4>
                                <span className={`text-xs font-medium ${getImpactoColor(recomendacion.impacto)}`}>
                                  Impacto {recomendacion.impacto}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{recomendacion.descripcion}</p>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                            <Button variant="ghost" size="sm" className="text-[#8ACE00] text-xs">
                              Aplicar ahora
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
