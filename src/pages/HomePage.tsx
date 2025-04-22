"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import {
  PlusCircle,
  CircleDollarSign,
  ChevronRight,
  CreditCard,
  Bell,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  Calendar,
  Sparkles,
} from "lucide-react"
import AccountCard from "../components/account-card"
import AccountSummary from "../components/account-summary"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("cards")
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cards = [
    {
      id: 1,
      type: "Visa Débito",
      number: "**** **** **** 5678",
      expiry: "05/28",
      balance: "€2,547.80",
      color: "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]",
      lastTransactions: [
        { name: "Supermercado", amount: "-€45.30", time: "Hoy, 10:25" },
        { name: "Cafetería", amount: "-€3.50", time: "Ayer, 16:40" },
      ],
      limit: "€3,000",
      used: 35,
    },
    {
      id: 2,
      type: "Mastercard Oro",
      number: "**** **** **** 1234",
      expiry: "09/26",
      balance: "€8,942.15",
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
      lastTransactions: [
        { name: "Restaurante", amount: "-€78.50", time: "Hace 2 días" },
        { name: "Tienda de ropa", amount: "-€125.00", time: "Hace 3 días" },
      ],
      limit: "€10,000",
      used: 25,
    },
    {
      id: 3,
      type: "American Express",
      number: "**** **** **** 9012",
      expiry: "12/27",
      balance: "€4,271.33",
      color: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
      lastTransactions: [
        { name: "Aerolínea", amount: "-€350.00", time: "Hace 1 semana" },
        { name: "Hotel", amount: "-€220.00", time: "Hace 1 semana" },
      ],
      limit: "€8,000",
      used: 45,
    },
  ]

  const accounts = [
    { id: 1, name: "Cuenta Principal", balance: "€2,547.80", lastMovement: "Hoy", type: "Corriente" },
    { id: 2, name: "Ahorros", balance: "€8,942.15", lastMovement: "Ayer", type: "Ahorro" },
    { id: 3, name: "Inversiones", balance: "€4,271.33", lastMovement: "23 Mar", type: "Inversión" },
  ]

  const quickActions = [
    { name: "Bizum", icon: CircleDollarSign, color: "bg-[#8ACE00]", path: "/tools/bizum" },
    { name: "Split", icon: Wallet, color: "bg-[#3B82F6]", path: "/tools/split" },
    { name: "Inversiones", icon: TrendingUp, color: "bg-[#6366F1]", path: "/tools/exchange" },
  ]

  const upcomingPayments = [
    { name: "Netflix", amount: "€12.99", date: "25 Abr", logo: "/placeholder.svg?height=30&width=30" },
    { name: "Gimnasio", amount: "€45.00", date: "01 May", logo: "/placeholder.svg?height=30&width=30" },
    { name: "Alquiler", amount: "€850.00", date: "05 May", logo: "/placeholder.svg?height=30&width=30" },
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

  const handleCarouselChange = (index: number) => {
    setActiveCardIndex(index)
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 max-w-2xl mx-auto">
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-bold">Hola, Carlos</h1>
          <p className="text-gray-500 text-sm">Bienvenido de nuevo</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-[#8ACE00] rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-8 h-8 rounded-full bg-[#8ACE00] flex items-center justify-center text-white font-medium">
              CS
            </div>
          </Button>
        </div>
      </motion.div>

      <AccountSummary
        totalBalance="€15,761.28"
        monthlyIncome="+€3,240.50"
        monthlyExpenses="-€1,528.75"
        percentageChange={12.5}
        month="Mar"
      />

      {/* Acciones rápidas */}
      <motion.div
        className="mt-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-semibold">Acciones rápidas</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Link to={action.path} key={index}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
              >
                <Card className="p-3 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full ${action.color} flex items-center justify-center mb-2 text-white`}
                    >
                      <action.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-medium">{action.name}</p>
                  </div>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="mt-6">
        <Tabs defaultValue="cards" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="cards">Tarjetas</TabsTrigger>
            <TabsTrigger value="accounts">Cuentas</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            {activeTab === "cards" && (
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="cards" className="mt-0">
                  {mounted && (
                    <Carousel
                      opts={{
                        align: "center",
                        loop: true,
                      }}
                      className="w-full"
                      onSelect={(index) => {
                        if (typeof index === "number") {
                          handleCarouselChange(index)
                        }
                      }}
                    >
                      <CarouselContent>
                        {cards.map((card) => (
                          <CarouselItem key={card.id} className="md:basis-4/5 lg:basis-3/4">
                            <div className="p-1">
                              <div
                                className={`w-full aspect-[1.58/1] rounded-2xl p-5 shadow-lg relative overflow-hidden ${card.color}`}
                              >
                                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-white blur-3xl"></div>
                                  <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-white blur-3xl"></div>
                                </div>

                                <div className="flex flex-col justify-between h-full relative z-10">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="text-white/80 text-xs font-medium">{card.type}</p>
                                      <h3 className="text-white font-bold mt-1">Balance</h3>
                                      <p className="text-white text-xl font-bold">{card.balance}</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                      <CreditCard className="h-4 w-4 text-white" />
                                    </div>
                                  </div>

                                  <div>
                                    <p className="text-white/80 text-xs mb-1">Número de tarjeta</p>
                                    <p className="text-white font-medium tracking-wider">{card.number}</p>
                                    <div className="flex justify-between items-center mt-2">
                                      <p className="text-white/80 text-xs">
                                        Válida hasta: <span className="text-white">{card.expiry}</span>
                                      </p>
                                      <div className="flex space-x-1">
                                        <div className="h-4 w-4 rounded-full bg-white/80"></div>
                                        <div className="h-4 w-4 rounded-full bg-white/40"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex items-center justify-center mt-4">
                        <CarouselPrevious className="static transform-none mx-1 bg-white" />
                        <div className="flex space-x-1">
                          {cards.map((_, idx) => (
                            <div
                              key={idx}
                              className={`h-2 rounded-full transition-all ${
                                idx === activeCardIndex ? "w-6 bg-[#8ACE00]" : "w-2 bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <CarouselNext className="static transform-none mx-1 bg-white" />
                      </div>
                    </Carousel>
                  )}

                  <div className="mt-6 space-y-4">
                    <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <h3 className="font-medium">Últimos movimientos</h3>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                          <span className="text-xs">Ver todos</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>

                      {activeCardIndex !== undefined && cards[activeCardIndex]?.lastTransactions && (
                        <div className="space-y-2">
                          {cards[activeCardIndex].lastTransactions.map((transaction, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50">
                              <div>
                                <p className="text-sm font-medium">{transaction.name}</p>
                                <p className="text-xs text-gray-500">{transaction.time}</p>
                              </div>
                              <p className="font-semibold text-sm">{transaction.amount}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>

                    <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-medium">Límites de tarjeta</h3>
                          <p className="text-xs text-gray-500">Gestiona tus límites</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                          <span className="text-xs">Ajustar</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>

                      {activeCardIndex !== undefined && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Límite mensual</p>
                            <p className="font-medium">
                              {cards[activeCardIndex].balance} / {cards[activeCardIndex].limit}
                            </p>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-2 rounded-full bg-[#8ACE00]"
                              style={{ width: `${cards[activeCardIndex].used}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500">
                            Has utilizado el {cards[activeCardIndex].used}% de tu límite mensual
                          </p>
                        </div>
                      )}
                    </Card>
                  </div>
                </TabsContent>
              </motion.div>
            )}

            {activeTab === "accounts" && (
              <motion.div
                key="accounts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="accounts" className="mt-0">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Tus cuentas</h2>
                    <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                      <PlusCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs">Nueva</span>
                    </Button>
                  </div>

                  <motion.div variants={container} initial="hidden" animate="show" className="space-y-3 mb-6">
                    {accounts.map((account) => (
                      <motion.div key={account.id} variants={item}>
                        <AccountCard account={account} />
                      </motion.div>
                    ))}
                  </motion.div>

                  <Card className="p-4 rounded-xl border border-gray-100 card-shadow mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <h3 className="font-medium">Próximos pagos</h3>
                        <Badge className="ml-2 bg-gray-100 text-gray-600 hover:bg-gray-100">
                          <Calendar className="h-3 w-3 mr-1" />
                          Programados
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                        <span className="text-xs">Ver todos</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {upcomingPayments.map((payment, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                              <img src={payment.logo || "/placeholder.svg"} alt={payment.name} className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{payment.name}</p>
                              <p className="text-xs text-gray-500">{payment.date}</p>
                            </div>
                          </div>
                          <p className="font-semibold text-sm">{payment.amount}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Button className="w-full bg-[#8ACE00] hover:bg-[#7AB800]">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Realizar transferencia
                  </Button>
                </TabsContent>
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>
      </div>

      {/* Promociones o consejos financieros */}
      <motion.div
        className="mt-8 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-4 rounded-xl border border-gray-100 card-shadow bg-gradient-to-r from-[#f0f9e8] to-[#e8f4fd]">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-[#8ACE00]/20 flex items-center justify-center mr-3 flex-shrink-0">
              <Sparkles className="h-5 w-5 text-[#8ACE00]" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Consejo financiero</h3>
              <p className="text-xs text-gray-600 mt-1">
                Configura ahorros automáticos para alcanzar tus metas financieras más rápido.
              </p>
              <Button variant="ghost" size="sm" className="text-[#8ACE00] text-xs mt-2 h-7 px-2">
                Saber más
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
