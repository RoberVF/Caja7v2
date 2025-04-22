"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Input } from "../components/ui/input"
import {
  Send,
  ArrowDownLeft,
  Users,
  Clock,
  Star,
  Search,
  ChevronRight,
  Plus,
  QrCode,
  Settings,
  ArrowUpRight,
  UserPlus,
  History,
  Check,
  Smartphone,
  Wallet,
  Filter,
  CalendarDays,
  UsersRound,
  UserCircle,
  Sparkles,
} from "lucide-react"

export default function BizumPage() {
  const [activeTab, setActiveTab] = useState("enviar")
  const [amount, setAmount] = useState("")
  const [concept, setConcept] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedContact, setSelectedContact] = useState<number | null>(null)
  const [selectedTransaction, setSelectedTransaction] = useState<number | null>(null)
  const amountInputRef = useRef<HTMLInputElement>(null)

  const toggleTransactionDetails = (id: number) => {
    setSelectedTransaction(selectedTransaction === id ? null : id)
  }

  const handleContactSelect = (id: number) => {
    setSelectedContact(id)
    // Enfocar automáticamente el campo de importe cuando se selecciona un contacto
    if (amountInputRef.current) {
      amountInputRef.current.focus()
    }
  }

  const favoriteContacts = [
    {
      id: 1,
      name: "Ana M.",
      phone: "+34 612 345 678",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: true,
      lastTransaction: "Hace 2 días",
    },
    {
      id: 2,
      name: "Luis R.",
      phone: "+34 623 456 789",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: true,
      lastTransaction: "Hace 1 semana",
    },
    {
      id: 3,
      name: "Elena G.",
      phone: "+34 634 567 890",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: true,
      lastTransaction: "Hace 3 días",
    },
    {
      id: 4,
      name: "Miguel A.",
      phone: "+34 645 678 901",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: false,
      lastTransaction: "Hace 2 semanas",
    },
  ]

  const allContacts = [
    ...favoriteContacts,
    {
      id: 5,
      name: "Carlos P.",
      phone: "+34 656 789 012",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: false,
      lastTransaction: "Hace 1 mes",
    },
    {
      id: 6,
      name: "Laura S.",
      phone: "+34 667 890 123",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: false,
      lastTransaction: "Hace 3 semanas",
    },
    {
      id: 7,
      name: "Javier M.",
      phone: "+34 678 901 234",
      avatar: "/placeholder.svg?height=40&width=40",
      isFavorite: false,
      lastTransaction: "Hace 2 meses",
    },
  ]

  const filteredContacts = allContacts.filter(
    (contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || contact.phone.includes(searchQuery),
  )

  const recentTransactions = [
    {
      id: 1,
      type: "received",
      contact: "Ana M.",
      amount: "€25.00",
      date: "Hoy, 14:30",
      concept: "Cena de ayer",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "completed",
    },
    {
      id: 2,
      type: "sent",
      contact: "Luis R.",
      amount: "€15.50",
      date: "Ayer, 18:45",
      concept: "Entradas cine",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "completed",
    },
    {
      id: 3,
      type: "sent",
      contact: "Elena G.",
      amount: "€35.00",
      date: "22 Mar, 12:20",
      concept: "Regalo cumpleaños",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "completed",
    },
    {
      id: 4,
      type: "received",
      contact: "Miguel A.",
      amount: "€50.00",
      date: "20 Mar, 09:15",
      concept: "Pago compartido",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "completed",
    },
    {
      id: 5,
      type: "sent",
      contact: "Carlos P.",
      amount: "€12.75",
      date: "15 Mar, 21:30",
      concept: "Café y postre",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
    },
  ]

  const bizumGroups = [
    {
      id: 1,
      name: "Compañeros de piso",
      members: 3,
      lastActivity: "Ayer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Amigos del fútbol",
      members: 6,
      lastActivity: "Hace 3 días",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Familia",
      members: 4,
      lastActivity: "Hace 1 semana",
      avatar: "/placeholder.svg?height=40&width=40",
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

  const getStatusBadge = (status: string, type: string) => {
    if (status === "completed") {
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">
          <Check className="h-3 w-3 mr-1" />
          {type === "sent" ? "Enviado" : "Recibido"}
        </Badge>
      )
    } else {
      return (
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0">
          <Clock className="h-3 w-3 mr-1" />
          Pendiente
        </Badge>
      )
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
        <h1 className="text-2xl font-bold">Bizum</h1>
        <p className="text-gray-500 text-sm">Envía y recibe dinero al instante</p>
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
                <p className="text-white/80 text-sm">Balance Bizum</p>
                <motion.div
                  className="flex items-baseline mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold">+€47.25</h2>
                </motion.div>
                <p className="text-white/80 text-xs mt-1">Este mes: 8 operaciones</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <p>Límite mensual</p>
                <p className="font-medium">€500 / €1,000</p>
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
                    animate={{ width: "50%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
              </motion.div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1 text-white/80" />
                  <p className="text-xs text-white/80">Enviado: €63.25</p>
                </div>
                <div className="flex items-center">
                  <ArrowDownLeft className="h-4 w-4 mr-1 text-white/80" />
                  <p className="text-xs text-white/80">Recibido: €110.50</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs de navegación */}
      <Tabs defaultValue="enviar" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="enviar">Enviar</TabsTrigger>
          <TabsTrigger value="contactos">Contactos</TabsTrigger>
          <TabsTrigger value="actividad">Actividad</TabsTrigger>
          <TabsTrigger value="grupos">Grupos</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === "enviar" && (
            <motion.div
              key="enviar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="enviar" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Enviar dinero</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="rounded-lg h-8">
                      <QrCode className="h-4 w-4 mr-1" />
                      <span className="text-xs">Escanear</span>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg h-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Selecciona un contacto</h3>
                      <p className="text-sm text-gray-500 mt-1">Contactos frecuentes</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#8ACE00]">
                      <span className="text-xs">Ver todos</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
                    <div className="flex flex-col items-center min-w-[60px]">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full border-dashed border-gray-300 mb-1"
                      >
                        <Plus className="h-5 w-5 text-gray-400" />
                      </Button>
                      <p className="text-xs text-gray-500">Nuevo</p>
                    </div>

                    {favoriteContacts.map((contact) => (
                      <div key={contact.id} className="flex flex-col items-center min-w-[60px]">
                        <button
                          className={`relative h-12 w-12 rounded-full mb-1 ${
                            selectedContact === contact.id ? "ring-2 ring-[#8ACE00]" : ""
                          }`}
                          onClick={() => handleContactSelect(contact.id)}
                        >
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                            <AvatarFallback>
                              {contact.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {contact.isFavorite && (
                            <div className="absolute -top-1 -right-1 h-4 w-4 bg-white rounded-full flex items-center justify-center">
                              <Star className="h-3 w-3 text-[#8ACE00]" />
                            </div>
                          )}
                        </button>
                        <p className="text-xs text-center truncate w-full">{contact.name}</p>
                      </div>
                    ))}
                  </div>

                  {selectedContact && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                            Importe
                          </label>
                          <div className="relative">
                            <Input
                              id="amount"
                              ref={amountInputRef}
                              type="text"
                              placeholder="0.00"
                              className="pl-8 text-lg font-medium"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="concept" className="block text-sm font-medium text-gray-700 mb-1">
                            Concepto (opcional)
                          </label>
                          <Input
                            id="concept"
                            type="text"
                            placeholder="Ej: Cena, Entradas, Regalo..."
                            value={concept}
                            onChange={(e) => setConcept(e.target.value)}
                          />
                        </div>

                        <div className="flex space-x-3">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => {
                              setSelectedContact(null)
                              setAmount("")
                              setConcept("")
                            }}
                          >
                            Cancelar
                          </Button>
                          <Button className="flex-1 bg-[#8ACE00] hover:bg-[#7AB800]">
                            <Send className="h-4 w-4 mr-2" />
                            Enviar
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mb-2">
                        <Send className="h-5 w-5 text-[#8ACE00]" />
                      </div>
                      <h3 className="font-medium text-sm">Enviar dinero</h3>
                      <p className="text-xs text-gray-500 mt-1">Paga a tus contactos</p>
                    </div>
                  </Card>

                  <Card className="p-4 rounded-xl border border-gray-100 card-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mb-2">
                        <ArrowDownLeft className="h-5 w-5 text-[#3B82F6]" />
                      </div>
                      <h3 className="font-medium text-sm">Solicitar dinero</h3>
                      <p className="text-xs text-gray-500 mt-1">Pide pagos pendientes</p>
                    </div>
                  </Card>
                </div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow">
                  <h3 className="font-medium mb-3">Actividad reciente</h3>
                  <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                    {recentTransactions.slice(0, 3).map((transaction) => (
                      <motion.div key={transaction.id} variants={item}>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={transaction.avatar || "/placeholder.svg"} alt={transaction.contact} />
                            <AvatarFallback>
                              {transaction.contact
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium text-sm">{transaction.contact}</h4>
                              <p
                                className={`font-semibold text-sm ${
                                  transaction.type === "received" ? "text-[#8ACE00]" : ""
                                }`}
                              >
                                {transaction.type === "sent" ? "-" : "+"}
                                {transaction.amount}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-xs text-gray-500">{transaction.date}</p>
                              <p className="text-xs text-gray-500">{transaction.concept}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-center">
                    <Button variant="ghost" size="sm" className="text-[#8ACE00] text-xs">
                      Ver todo el historial
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "contactos" && (
            <motion.div
              key="contactos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="contactos" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Contactos Bizum</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <UserPlus className="h-4 w-4 mr-1" />
                    <span className="text-xs">Añadir</span>
                  </Button>
                </div>

                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar contactos"
                      className="pl-9 bg-gray-50 border-0"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon" className="bg-gray-50 border-0">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Favoritos</h3>
                  <motion.div variants={container} initial="hidden" animate="show" className="space-y-2">
                    {filteredContacts
                      .filter((contact) => contact.isFavorite)
                      .map((contact) => (
                        <motion.div key={contact.id} variants={item}>
                          <Card className="p-3 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                              <div className="relative">
                                <Avatar className="h-10 w-10 mr-3">
                                  <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                                  <AvatarFallback>
                                    {contact.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="absolute -top-1 -right-1 h-4 w-4 bg-white rounded-full flex items-center justify-center">
                                  <Star className="h-3 w-3 text-[#8ACE00]" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h4 className="font-medium">{contact.name}</h4>
                                  <div className="flex space-x-1">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 w-7 p-0 rounded-full bg-[#8ACE00]/10 text-[#8ACE00]"
                                    >
                                      <Send className="h-3 w-3" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 w-7 p-0 rounded-full bg-[#3B82F6]/10 text-[#3B82F6]"
                                    >
                                      <ArrowDownLeft className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <p className="text-xs text-gray-500">{contact.phone}</p>
                                  <p className="text-xs text-gray-500">{contact.lastTransaction}</p>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Todos los contactos</h3>
                  <motion.div variants={container} initial="hidden" animate="show" className="space-y-2">
                    {filteredContacts
                      .filter((contact) => !contact.isFavorite)
                      .map((contact) => (
                        <motion.div key={contact.id} variants={item}>
                          <Card className="p-3 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                                <AvatarFallback>
                                  {contact.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h4 className="font-medium">{contact.name}</h4>
                                  <div className="flex space-x-1">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 w-7 p-0 rounded-full bg-[#8ACE00]/10 text-[#8ACE00]"
                                    >
                                      <Send className="h-3 w-3" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-7 w-7 p-0 rounded-full bg-[#3B82F6]/10 text-[#3B82F6]"
                                    >
                                      <ArrowDownLeft className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <p className="text-xs text-gray-500">{contact.phone}</p>
                                  <p className="text-xs text-gray-500">{contact.lastTransaction}</p>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                  </motion.div>
                </div>

                {filteredContacts.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-10">
                    <Search className="h-10 w-10 text-gray-300 mb-2" />
                    <p className="text-gray-400">No se encontraron contactos</p>
                  </div>
                )}
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "actividad" && (
            <motion.div
              key="actividad"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="actividad" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Actividad Bizum</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <History className="h-4 w-4 mr-1" />
                    <span className="text-xs">Filtrar</span>
                  </Button>
                </div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <h3 className="font-medium mb-3">Resumen de actividad</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Enviado</p>
                        <p className="font-medium">€63.25</p>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Recibido</p>
                        <p className="font-medium">€110.50</p>
                      </div>
                      <Progress value={65} className="h-2 bg-gray-100">
                        <div className="h-full bg-[#8ACE00]" style={{ width: "65%" }} />
                      </Progress>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Balance</p>
                        <p className="font-medium text-[#8ACE00]">+€47.25</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
                  <Badge
                    variant="outline"
                    className="bg-white whitespace-nowrap cursor-pointer transition-all bg-[#8ACE00]/10 text-[#8ACE00] border-[#8ACE00]/30"
                  >
                    Todos
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Enviados
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Recibidos
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Pendientes
                  </Badge>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <motion.div key={transaction.id} variants={item} layout>
                      <Card
                        className="rounded-xl border border-gray-100 card-shadow overflow-hidden"
                        onClick={() => toggleTransactionDetails(transaction.id)}
                      >
                        <motion.div
                          className="p-4 cursor-pointer"
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                          whileTap={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                        >
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={transaction.avatar || "/placeholder.svg"} alt={transaction.contact} />
                              <AvatarFallback>
                                {transaction.contact
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{transaction.contact}</h3>
                                  <p className="text-xs text-gray-500">{transaction.date}</p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <p
                                    className={`font-semibold ${
                                      transaction.type === "received" ? "text-[#8ACE00]" : ""
                                    }`}
                                  >
                                    {transaction.type === "sent" ? "-" : "+"}
                                    {transaction.amount}
                                  </p>
                                  {getStatusBadge(transaction.status, transaction.type)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <AnimatePresence>
                          {selectedTransaction === transaction.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 pb-4 border-t border-gray-100"
                            >
                              <div className="pt-3 space-y-2">
                                <div className="flex justify-between">
                                  <p className="text-sm text-gray-500">Concepto</p>
                                  <p className="text-sm font-medium">{transaction.concept}</p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="text-sm text-gray-500">Fecha y hora</p>
                                  <p className="text-sm font-medium">{transaction.date}</p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="text-sm text-gray-500">Estado</p>
                                  <p className="text-sm font-medium">
                                    {transaction.status === "completed" ? "Completado" : "Pendiente"}
                                  </p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="text-sm text-gray-500">Referencia</p>
                                  <p className="text-sm font-medium">BIZ{Math.floor(Math.random() * 1000000)}</p>
                                </div>
                              </div>

                              <div className="flex justify-end mt-4">
                                <Button variant="outline" size="sm" className="text-xs">
                                  <Send className="h-3 w-3 mr-1" />
                                  Repetir operación
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "grupos" && (
            <motion.div
              key="grupos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="grupos" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Grupos Bizum</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-xs">Crear grupo</span>
                  </Button>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 mb-6">
                  {bizumGroups.map((group) => (
                    <motion.div key={group.id} variants={item}>
                      <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={group.avatar || "/placeholder.svg"} alt={group.name} />
                            <AvatarFallback>
                              {group.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{group.name}</h3>
                                <p className="text-xs text-gray-500">
                                  {group.members} miembros • Última actividad: {group.lastActivity}
                                </p>
                              </div>
                              <div className="flex space-x-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 rounded-full bg-[#8ACE00]/10 text-[#8ACE00]"
                                >
                                  <Send className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Crear un nuevo grupo</h3>
                      <p className="text-sm text-gray-500 mt-1">Divide gastos fácilmente</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      <UsersRound className="h-5 w-5 text-[#8ACE00]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                        <Wallet className="h-4 w-4 text-[#8ACE00]" />
                      </div>
                      <p className="text-sm">Gastos compartidos</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                        <CalendarDays className="h-4 w-4 text-[#3B82F6]" />
                      </div>
                      <p className="text-sm">Eventos</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center mr-3">
                        <UserCircle className="h-4 w-4 text-[#6366F1]" />
                      </div>
                      <p className="text-sm">Personalizado</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-[#8ACE00] hover:bg-[#7AB800]">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Crear nuevo grupo
                  </Button>
                </Card>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow">
                  <h3 className="font-medium mb-3">Beneficios de los grupos</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#8ACE00] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Divide gastos entre múltiples personas</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#8ACE00] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Realiza pagos recurrentes fácilmente</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#8ACE00] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Gestiona eventos y actividades grupales</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-[#8ACE00] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Mantén un registro de todos los pagos</p>
                    </li>
                  </ul>
                </Card>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
