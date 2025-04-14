"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { PlusCircle, Bell, ChevronRight } from "lucide-react"
import AccountCard from "../components/account-card"
import AccountSummary from "../components/account-summary"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"

import { CreditCardCarousel } from "../components/credit-card-carousel"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("cards")

  const cards = [
    {
      id: 1,
      type: "Visa Débito",
      number: "**** **** **** 5678",
      expiry: "05/28",
      balance: "€2,547.80",
      color: "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]",
    },
    {
      id: 2,
      type: "Mastercard Oro",
      number: "**** **** **** 1234",
      expiry: "09/26",
      balance: "€8,942.15",
      color: "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]",
    },
    {
      id: 3,
      type: "American Express",
      number: "**** **** **** 9012",
      expiry: "12/27",
      balance: "€4,271.33",
      color: "bg-gradient-to-br from-[#6366F1] to-[#4338CA]",
    },
  ]

  const accounts = [
    { id: 1, name: "Cuenta Principal", balance: "€2,547.80", lastMovement: "Hoy", type: "Corriente" },
    { id: 2, name: "Ahorros", balance: "€8,942.15", lastMovement: "Ayer", type: "Ahorro" },
    { id: 3, name: "Inversiones", balance: "€4,271.33", lastMovement: "23 Mar", type: "Inversión" },
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
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-bold">Hola, Carlos</h1>
          <p className="text-gray-500 text-sm">Bienvenido de nuevo</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-[#8ACE00] rounded-full"></span>
        </Button>
      </motion.div>

      <AccountSummary
        totalBalance="€15,761.28"
        monthlyIncome="+€3,240.50"
        monthlyExpenses="-€1,528.75"
        percentageChange={12.5}
        month="Mar"
      />

      <div className="mt-8">
        <Tabs defaultValue="cards" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="cards">Tarjetas</TabsTrigger>
            <TabsTrigger value="accounts">Cuentas</TabsTrigger>
          </TabsList>

          <TabsContent value="cards" className="mt-0">
            {/* Animación opcional, solo visual */}
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >

              <div className="flex items-center justify-center">
                <CreditCardCarousel cards={cards} />
              </div>
              <div className="mt-6 space-y-4">
                <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Últimos movimientos</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                      <span className="text-xs">Ver todos</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>

                <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Límites de tarjeta</h3>
                      <p className="text-xs text-gray-500">Gestiona tus límites</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                      <span className="text-xs">Ajustar</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="accounts" className="mt-0">
            <motion.div
              key="accounts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Tus cuentas</h2>
                <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                  <PlusCircle className="h-4 w-4 mr-1" />
                  <span className="text-xs">Nueva</span>
                </Button>
              </div>

              <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                {accounts.map((account) => (
                  <motion.div key={account.id} variants={item}>
                    <AccountCard account={account} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}