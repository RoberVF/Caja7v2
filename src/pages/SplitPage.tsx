"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  Split,
  Users,
  Plus,
  ChevronRight,
  Clock,
  Check,
  AlertCircle,
  UserPlus,
  Receipt,
  CreditCard,
  DollarSign,
  Send,
  UserCircle,
  UsersRound,
  Utensils,
  Home,
  Car,
  ShoppingBag,
  CalendarDays,
} from "lucide-react"

export default function SplitPage() {
  const [activeTab, setActiveTab] = useState("activos")
  const [selectedSplit, setSelectedSplit] = useState<number | null>(null)

  const toggleSplitDetails = (id: number) => {
    setSelectedSplit(selectedSplit === id ? null : id)
  }

  const activeSplits = [
    {
      id: 1,
      title: "Cena Restaurante Italiano",
      amount: "€120.00",
      date: "Ayer, 21:30",
      myShare: "€30.00",
      status: "pendiente",
      category: "restaurante",
      participants: [
        { id: 1, name: "Carlos S", paid: true, amount: "€30.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, name: "Ana M", paid: false, amount: "€30.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, name: "Luis R", paid: false, amount: "€30.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, name: "Elena G", paid: true, amount: "€30.00", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      creator: "Carlos S",
      description: "Cena del viernes con amigos",
    },
    {
      id: 2,
      title: "Alquiler Abril",
      amount: "€900.00",
      date: "20 Mar, 10:15",
      myShare: "€300.00",
      status: "completado",
      category: "hogar",
      participants: [
        { id: 1, name: "Carlos S", paid: true, amount: "€300.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, name: "Miguel A", paid: true, amount: "€300.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, name: "Laura P", paid: true, amount: "€300.00", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      creator: "Miguel A",
      description: "Pago mensual del alquiler",
    },
    {
      id: 3,
      title: "Viaje a Barcelona",
      amount: "€450.00",
      date: "15 Mar, 18:45",
      myShare: "€150.00",
      status: "pendiente",
      category: "viaje",
      participants: [
        { id: 1, name: "Carlos S", paid: true, amount: "€150.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, name: "Ana M", paid: false, amount: "€150.00", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, name: "Luis R", paid: false, amount: "€150.00", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      creator: "Carlos S",
      description: "Fin de semana en Barcelona, hotel y transporte",
    },
  ]

  const groups = [
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

  const historySplits = [
    {
      id: 4,
      title: "Compra supermercado",
      amount: "€85.50",
      date: "10 Mar, 16:20",
      myShare: "€28.50",
      status: "completado",
      category: "compras",
    },
    {
      id: 5,
      title: "Gasolina viaje",
      amount: "€60.00",
      date: "5 Mar, 12:30",
      myShare: "€20.00",
      status: "completado",
      category: "transporte",
    },
    {
      id: 6,
      title: "Cine y cena",
      amount: "€75.00",
      date: "28 Feb, 22:15",
      myShare: "€25.00",
      status: "completado",
      category: "ocio",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "restaurante":
        return <Utensils className="h-5 w-5 text-white" />
      case "hogar":
        return <Home className="h-5 w-5 text-white" />
      case "viaje":
        return <Car className="h-5 w-5 text-white" />
      case "compras":
        return <ShoppingBag className="h-5 w-5 text-white" />
      case "transporte":
        return <Car className="h-5 w-5 text-white" />
      case "ocio":
        return <CalendarDays className="h-5 w-5 text-white" />
      default:
        return <Receipt className="h-5 w-5 text-white" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pendiente":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "completado":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pendiente":
        return <Clock className="h-3 w-3 mr-1" />
      case "completado":
        return <Check className="h-3 w-3 mr-1" />
      default:
        return <AlertCircle className="h-3 w-3 mr-1" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "restaurante":
        return "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]"
      case "hogar":
        return "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]"
      case "viaje":
        return "bg-gradient-to-br from-[#6366F1] to-[#4338CA]"
      case "compras":
        return "bg-gradient-to-br from-[#EC4899] to-[#BE185D]"
      case "transporte":
        return "bg-gradient-to-br from-[#F59E0B] to-[#D97706]"
      case "ocio":
        return "bg-gradient-to-br from-[#10B981] to-[#059669]"
      default:
        return "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]"
    }
  }

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
        <h1 className="text-2xl font-bold">Split</h1>
        <p className="text-gray-500 text-sm">Divide gastos y cuentas con amigos y familiares</p>
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
                <p className="text-white/80 text-sm">Balance de gastos compartidos</p>
                <motion.div
                  className="flex items-baseline mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold">€180.00</h2>
                  <span className="text-white/80 text-sm ml-2">pendiente de recibir</span>
                </motion.div>
                <p className="text-white/80 text-xs mt-1">€45.00 pendiente de pagar</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Split className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-white bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 h-auto"
              >
                <Users className="h-4 w-4 mr-1" />
                <span className="text-xs">Mis grupos</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1 h-auto"
              >
                <Plus className="h-4 w-4 mr-1" />
                <span className="text-xs">Nuevo Split</span>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs de navegación */}
      <Tabs defaultValue="activos" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="activos">Activos</TabsTrigger>
          <TabsTrigger value="grupos">Grupos</TabsTrigger>
          <TabsTrigger value="historial">Historial</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === "activos" && (
            <motion.div
              key="activos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="activos" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Splits activos</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    <span className="text-xs">Crear nuevo</span>
                  </Button>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {activeSplits.map((split) => (
                    <motion.div key={split.id} variants={item} layout>
                      <Card
                        className="rounded-xl border border-gray-100 card-shadow overflow-hidden"
                        onClick={() => toggleSplitDetails(split.id)}
                      >
                        <motion.div
                          className="p-4 cursor-pointer"
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                          whileTap={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-10 h-10 rounded-lg ${getCategoryColor(
                                split.category,
                              )} flex items-center justify-center mr-3`}
                            >
                              {getCategoryIcon(split.category)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{split.title}</h3>
                                  <p className="text-xs text-gray-500">
                                    {split.date} • Creado por {split.creator}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <p className="font-semibold">{split.amount}</p>
                                  <Badge className={`mt-1 border-0 ${getStatusColor(split.status)}`}>
                                    {getStatusIcon(split.status)}
                                    {split.status === "pendiente" ? "Pendiente" : "Completado"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex space-x-2">
                                  {split.participants.slice(0, 3).map((participant) => (
                                    <Avatar key={participant.id} className="h-6 w-6 border-2 border-white text-xs">
                                      <AvatarImage
                                        src={participant.avatar || "/placeholder.svg"}
                                        alt={participant.name}
                                      />
                                      <AvatarFallback>
                                        {participant.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                  ))}
                                  {split.participants.length > 3 && (
                                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs border-2 border-white">
                                      +{split.participants.length - 3}
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center">
                                  <p className="text-sm mr-2">
                                    Tu parte: <span className="font-medium">{split.myShare}</span>
                                  </p>
                                  <motion.div
                                    animate={{ rotate: selectedSplit === split.id ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        <AnimatePresence>
                          {selectedSplit === split.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 pb-4 border-t border-gray-100"
                            >
                              <p className="text-sm text-gray-600 mt-3 mb-2">{split.description}</p>

                              <div className="mt-3 mb-4">
                                <p className="text-xs font-medium text-gray-500 mb-2">Estado de pagos</p>
                                <div className="space-y-2">
                                  {split.participants.map((participant) => (
                                    <div key={participant.id} className="flex justify-between items-center">
                                      <div className="flex items-center">
                                        <Avatar className="h-7 w-7 mr-2">
                                          <AvatarImage
                                            src={participant.avatar || "/placeholder.svg"}
                                            alt={participant.name}
                                          />
                                          <AvatarFallback>
                                            {participant.name
                                              .split(" ")
                                              .map((n) => n[0])
                                              .join("")}
                                          </AvatarFallback>
                                        </Avatar>
                                        <p className="text-sm">{participant.name}</p>
                                      </div>
                                      <div className="flex items-center">
                                        <p className="text-sm font-medium mr-2">{participant.amount}</p>
                                        {participant.paid ? (
                                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0">
                                            <Check className="h-3 w-3 mr-1" />
                                            Pagado
                                          </Badge>
                                        ) : (
                                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0">
                                            <Clock className="h-3 w-3 mr-1" />
                                            Pendiente
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex justify-between mt-4">
                                {split.status === "pendiente" ? (
                                  <>
                                    <Button variant="outline" size="sm" className="text-xs">
                                      <Send className="h-3 w-3 mr-1" />
                                      Recordar
                                    </Button>
                                    <Button size="sm" className="bg-[#8ACE00] hover:bg-[#7AB800] text-xs">
                                      <CreditCard className="h-3 w-3 mr-1" />
                                      Pagar mi parte
                                    </Button>
                                  </>
                                ) : (
                                  <Button variant="outline" size="sm" className="text-xs ml-auto">
                                    <Receipt className="h-3 w-3 mr-1" />
                                    Ver detalles
                                  </Button>
                                )}
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
                  <h2 className="text-lg font-semibold">Mis grupos</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <UserPlus className="h-4 w-4 mr-1" />
                    <span className="text-xs">Crear grupo</span>
                  </Button>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4 mb-6">
                  {groups.map((group) => (
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
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
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
                      <p className="text-sm text-gray-500 mt-1">Divide gastos recurrentes fácilmente</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      <UsersRound className="h-5 w-5 text-[#8ACE00]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                        <Home className="h-4 w-4 text-[#8ACE00]" />
                      </div>
                      <p className="text-sm">Compañeros de piso</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-[#3B82F6]" />
                      </div>
                      <p className="text-sm">Amigos</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center mr-3">
                        <UserCircle className="h-4 w-4 text-[#6366F1]" />
                      </div>
                      <p className="text-sm">Personalizado</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-[#8ACE00] hover:bg-[#7AB800]">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Crear nuevo grupo
                  </Button>
                </Card>
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
                  <h2 className="text-lg font-semibold">Historial de splits</h2>
                  <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                    <Check className="h-3 w-3 mr-1" />
                    Completados
                  </Badge>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3 mb-6">
                  {historySplits.map((split) => (
                    <motion.div key={split.id} variants={item}>
                      <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                        <div className="flex items-start">
                          <div
                            className={`w-10 h-10 rounded-lg ${getCategoryColor(
                              split.category,
                            )} flex items-center justify-center mr-3`}
                          >
                            {getCategoryIcon(split.category)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{split.title}</h4>
                              <p className="font-semibold">{split.amount}</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-xs text-gray-500">{split.date}</p>
                              <p className="text-xs text-gray-500">
                                Tu parte: <span className="font-medium">{split.myShare}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <h3 className="font-medium mb-3">Resumen de gastos compartidos</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Este mes</p>
                        <p className="font-medium">€73.50</p>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Último trimestre</p>
                        <p className="font-medium">€245.75</p>
                      </div>
                      <Progress value={48} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Por categoría</p>
                        <p className="font-medium">Restaurantes (42%)</p>
                      </div>
                      <div className="flex h-2 rounded-full overflow-hidden">
                        <div className="bg-[#8ACE00] h-full" style={{ width: "42%" }}></div>
                        <div className="bg-[#3B82F6] h-full" style={{ width: "25%" }}></div>
                        <div className="bg-[#6366F1] h-full" style={{ width: "18%" }}></div>
                        <div className="bg-[#EC4899] h-full" style={{ width: "15%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Restaurantes</span>
                        <span>Hogar</span>
                        <span>Viajes</span>
                        <span>Otros</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Button className="w-full bg-[#8ACE00] hover:bg-[#7AB800]">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Ver todos los gastos
                </Button>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
