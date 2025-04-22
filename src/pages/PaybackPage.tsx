"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"
import {
  Wallet,
  ShoppingBag,
  Clock,
  Tag,
  ChevronRight,
  Star,
  Coffee,
  ShoppingCart,
  Utensils,
  Plane,
  Smartphone,
  Percent,
  Plus,
  Check,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react"

export default function PaybackPage() {
  const [activeTab, setActiveTab] = useState("destacados")
  const [activatedOffers, setActivatedOffers] = useState<number[]>([1, 3])

  const toggleOffer = (id: number) => {
    if (activatedOffers.includes(id)) {
      setActivatedOffers(activatedOffers.filter((offerId) => offerId !== id))
    } else {
      setActivatedOffers([...activatedOffers, id])
    }
  }

  const featuredStores = [
    {
      id: 1,
      name: "Café Delicia",
      category: "Restaurantes",
      cashback: 8,
      logo: Coffee,
      color: "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]",
      isPopular: true,
    },
    {
      id: 2,
      name: "SuperMarket",
      category: "Supermercados",
      cashback: 3,
      logo: ShoppingCart,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
      isPopular: false,
    },
    {
      id: 3,
      name: "Restaurante Gourmet",
      category: "Restaurantes",
      cashback: 5,
      logo: Utensils,
      color: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
      isPopular: true,
    },
    {
      id: 4,
      name: "TechStore",
      category: "Electrónica",
      cashback: 4,
      logo: Smartphone,
      color: "bg-gradient-to-br from-[#EC4899] to-[#BE185D]",
      isPopular: false,
    },
  ]

  const specialOffers = [
    {
      id: 1,
      name: "Viajes Europa",
      description: "10% de reembolso en reservas de hotel",
      expires: "15 May",
      cashback: 10,
      logo: Plane,
      color: "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]",
    },
    {
      id: 2,
      name: "Supermercados Día",
      description: "5% extra en compras de más de €50",
      expires: "30 Abr",
      cashback: 5,
      logo: ShoppingCart,
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      id: 3,
      name: "Restaurantes Premium",
      description: "8% en cenas de fin de semana",
      expires: "10 May",
      cashback: 8,
      logo: Utensils,
      color: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
    },
  ]

  const recentCashbacks = [
    {
      id: 1,
      store: "Café Delicia",
      amount: "€3.20",
      date: "Hoy, 10:30",
      purchase: "€40.00",
      logo: Coffee,
    },
    {
      id: 2,
      store: "SuperMarket",
      amount: "€1.65",
      date: "Ayer, 16:45",
      purchase: "€55.00",
      logo: ShoppingCart,
    },
    {
      id: 3,
      store: "Restaurante Gourmet",
      amount: "€5.75",
      date: "22 Mar, 21:15",
      purchase: "€115.00",
      logo: Utensils,
    },
  ]

  const categories = [
    { name: "Restaurantes", cashback: "5-8%", icon: Utensils, count: 24 },
    { name: "Supermercados", cashback: "1-3%", icon: ShoppingCart, count: 18 },
    { name: "Viajes", cashback: "3-10%", icon: Plane, count: 15 },
    { name: "Tecnología", cashback: "2-5%", icon: Smartphone, count: 12 },
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
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Payback</h1>
        <p className="text-gray-500 text-sm">Reembolsos por tus compras en comercios asociados</p>
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
                <p className="text-white/80 text-sm">Reembolsos acumulados</p>
                <motion.h2
                  className="text-3xl font-bold mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  €42.85
                </motion.h2>
                <p className="text-white/80 text-xs mt-1">Este mes: €10.60</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Wallet className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <p>Objetivo mensual</p>
                <p className="font-medium">€10.60 / €25.00</p>
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
                    animate={{ width: "42%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
              </motion.div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-white/80">Comercios activos: 12</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 h-auto"
                >
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span className="text-xs">Ver historial</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs de navegación */}
      <Tabs defaultValue="destacados" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="destacados">Destacados</TabsTrigger>
          <TabsTrigger value="ofertas">Ofertas</TabsTrigger>
          <TabsTrigger value="historial">Historial</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === "destacados" && (
            <motion.div
              key="destacados"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="destacados" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Comercios destacados</h2>
                  <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                    <span className="text-xs">Ver todos</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  {featuredStores.map((store) => (
                    <motion.div key={store.id} variants={item}>
                      <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300 h-full">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-between items-start mb-3">
                            <div className={`w-10 h-10 rounded-lg ${store.color} flex items-center justify-center`}>
                              <store.logo className="h-5 w-5 text-white" />
                            </div>
                            {store.isPopular && (
                              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0 text-xs">
                                <Star className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-medium">{store.name}</h3>
                          <p className="text-xs text-gray-500 mb-2">{store.category}</p>
                          <div className="mt-auto">
                            <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                              <Percent className="h-3 w-3 mr-1" />
                              {store.cashback}% reembolso
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <h3 className="font-semibold mb-3">Categorías</h3>
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <motion.div key={index} variants={item}>
                        <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-3">
                                <Icon className="h-5 w-5 text-[#8ACE00]" />
                              </div>
                              <div>
                                <h4 className="font-medium">{category.name}</h4>
                                <p className="text-xs text-gray-500">{category.count} comercios</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0 mr-2">
                                {category.cashback}
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-gray-400" />
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

          {activeTab === "ofertas" && (
            <motion.div
              key="ofertas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="ofertas" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Ofertas especiales</h2>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0">
                    <Clock className="h-3 w-3 mr-1" />
                    Tiempo limitado
                  </Badge>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 mb-6">
                  {specialOffers.map((offer) => {
                    const isActivated = activatedOffers.includes(offer.id)
                    const Icon = offer.logo
                    return (
                      <motion.div key={offer.id} variants={item}>
                        <Card
                          className={`p-4 rounded-xl border ${
                            isActivated ? "border-[#8ACE00]/30 bg-[#8ACE00]/5" : "border-gray-100"
                          } card-shadow hover:shadow-md transition-all duration-300`}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-12 h-12 rounded-lg ${offer.color} flex items-center justify-center mr-4`}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{offer.name}</h3>
                                  <p className="text-sm text-gray-600 mb-1">{offer.description}</p>
                                  <div className="flex items-center">
                                    <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0 mr-2">
                                      <Percent className="h-3 w-3 mr-1" />
                                      {offer.cashback}% reembolso
                                    </Badge>
                                    <span className="text-xs text-gray-500">
                                      <Clock className="h-3 w-3 inline mr-1" />
                                      Expira: {offer.expires}
                                    </span>
                                  </div>
                                </div>
                                <Button
                                  variant={isActivated ? "default" : "outline"}
                                  size="sm"
                                  className={`rounded-full h-8 w-8 p-0 ${
                                    isActivated ? "bg-[#8ACE00] hover:bg-[#7AB800]" : ""
                                  }`}
                                  onClick={() => toggleOffer(offer.id)}
                                >
                                  {isActivated ? (
                                    <Check className="h-4 w-4 text-white" />
                                  ) : (
                                    <Plus className="h-4 w-4 text-[#8ACE00]" />
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Ofertas activadas</h3>
                    <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                      {activatedOffers.length} de {specialOffers.length}
                    </Badge>
                  </div>
                  <Progress value={(activatedOffers.length / specialOffers.length) * 100} className="h-2" />
                  <p className="text-xs text-gray-500 mt-2">Activa todas las ofertas para maximizar tus reembolsos</p>
                </Card>

                <Button className="w-full bg-[#8ACE00] hover:bg-[#7AB800]">
                  <Tag className="h-4 w-4 mr-2" />
                  Descubrir más ofertas
                </Button>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "historial" && (
            <motion.div
              key="historial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="historial" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Reembolsos recientes</h2>
                  <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Este mes
                  </Badge>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3 mb-6">
                  {recentCashbacks.map((cashback) => {
                    const Icon = cashback.logo
                    return (
                      <motion.div key={cashback.id} variants={item}>
                        <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-3">
                              <Icon className="h-5 w-5 text-[#8ACE00]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h4 className="font-medium">{cashback.store}</h4>
                                <p className="font-semibold text-[#8ACE00]">+{cashback.amount}</p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-xs text-gray-500">{cashback.date}</p>
                                <p className="text-xs text-gray-500">Compra: {cashback.purchase}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <h3 className="font-medium mb-3">Resumen de reembolsos</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Este mes</p>
                        <p className="font-medium">€10.60</p>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Último trimestre</p>
                        <p className="font-medium">€32.25</p>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Total anual</p>
                        <p className="font-medium">€42.85</p>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                  </div>
                </Card>

                <Button className="w-full bg-[#8ACE00] hover:bg-[#7AB800]">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Ver todos los reembolsos
                </Button>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
