"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Progress } from "../components/ui/progress"
import { Input } from "../components/ui/input"
import {
  TrendingUp,
  TrendingDown,
  BarChart2,
  DollarSign,
  Bitcoin,
  Globe,
  Clock,
  Search,
  Filter,
  ChevronRight,
  Star,
  Plus,
  ArrowRight,
  ArrowLeft,
  Wallet,
  CreditCard,
  Plane,
  AlertCircle,
  Info,
  RefreshCw,
  ArrowUpRight,
  LineChart,
  PieChart,
  Percent,
  Briefcase,
} from "lucide-react"

export default function ExchangePage() {
  const [activeTab, setActiveTab] = useState("cartera")
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD")
  const [amount, setAmount] = useState<string>("100")
  const [convertedAmount, setConvertedAmount] = useState<string>("92.34")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAsset, setSelectedAsset] = useState<number | null>(null)

  const toggleAssetDetails = (id: number) => {
    setSelectedAsset(selectedAsset === id ? null : id)
  }

  // Datos de la cartera de inversiones
  const portfolioAssets = [
    {
      id: 1,
      name: "Apple Inc.",
      ticker: "AAPL",
      type: "accion",
      value: "€2,450.75",
      shares: "15",
      price: "€163.38",
      change: "+2.4%",
      performance: "positivo",
      purchasePrice: "€142.65",
      purchaseDate: "15 Ene 2023",
      profit: "+€311.00",
      profitPercentage: "+14.5%",
    },
    {
      id: 2,
      name: "Bitcoin",
      ticker: "BTC",
      type: "cripto",
      value: "€1,850.30",
      amount: "0.032",
      price: "€57,821.88",
      change: "-1.2%",
      performance: "negativo",
      purchasePrice: "€52,450.25",
      purchaseDate: "3 Mar 2023",
      profit: "+€172.30",
      profitPercentage: "+10.3%",
    },
    {
      id: 3,
      name: "EUR/USD",
      ticker: "EUR/USD",
      type: "forex",
      value: "€1,200.00",
      lotSize: "0.1",
      price: "1.0923",
      change: "+0.3%",
      performance: "positivo",
      purchasePrice: "1.0850",
      purchaseDate: "28 Feb 2023",
      profit: "+€73.00",
      profitPercentage: "+6.1%",
    },
    {
      id: 4,
      name: "Fondo Indexado Global",
      ticker: "VWCE",
      type: "fondo",
      value: "€3,750.45",
      shares: "42.5",
      price: "€88.25",
      change: "+0.8%",
      performance: "positivo",
      purchasePrice: "€82.40",
      purchaseDate: "10 Dic 2022",
      profit: "+€248.12",
      profitPercentage: "+7.1%",
    },
  ]

  // Datos de mercados disponibles
  const markets = [
    {
      id: 1,
      name: "Tesla Inc.",
      ticker: "TSLA",
      type: "accion",
      price: "€182.63",
      change: "+3.5%",
      performance: "positivo",
      marketCap: "€578.9B",
      volume: "€22.3B",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Bitcoin",
      ticker: "BTC",
      type: "cripto",
      price: "€3,245.78",
      change: "+5.2%",
      performance: "positivo",
      marketCap: "€389.5B",
      volume: "€15.7B",
      isFavorite: false,
    },
    {
      id: 3,
      name: "EUR/GBP",
      ticker: "EUR/GBP",
      type: "forex",
      price: "0.8532",
      change: "-0.4%",
      performance: "negativo",
      spread: "0.0002",
      volume: "€4.2B",
      isFavorite: true,
    },
    {
      id: 4,
      name: "Microsoft Corp.",
      ticker: "MSFT",
      type: "accion",
      price: "€415.25",
      change: "+1.2%",
      performance: "positivo",
      marketCap: "€3.1T",
      volume: "€8.5B",
      isFavorite: false,
    },
    {
      id: 5,
      name: "Cardano",
      ticker: "ADA",
      type: "cripto",
      price: "€0.45",
      change: "-2.1%",
      performance: "negativo",
      marketCap: "€15.8B",
      volume: "€1.2B",
      isFavorite: false,
    },
  ]

  // Datos de divisas para cambio
  const currencies = [
    { code: "USD", name: "Dólar estadounidense", rate: 1.0923, flag: "🇺🇸" },
    { code: "GBP", name: "Libra esterlina", rate: 0.8532, flag: "🇬🇧" },
    { code: "JPY", name: "Yen japonés", rate: 164.35, flag: "🇯🇵" },
    { code: "CHF", name: "Franco suizo", rate: 0.9876, flag: "🇨🇭" },
    { code: "CAD", name: "Dólar canadiense", rate: 1.4765, flag: "🇨🇦" },
    { code: "AUD", name: "Dólar australiano", rate: 1.6543, flag: "🇦🇺" },
  ]

  // Historial de operaciones
  const transactionHistory = [
    {
      id: 1,
      type: "compra",
      asset: "Apple Inc.",
      ticker: "AAPL",
      amount: "€1,426.50",
      quantity: "10 acciones",
      date: "15 Ene 2023",
      status: "completado",
    },
    {
      id: 2,
      type: "venta",
      asset: "Bitcoin",
      ticker: "BTC",
      amount: "€950.25",
      quantity: "0.35 BTC",
      date: "28 Feb 2023",
      status: "completado",
    },
    {
      id: 3,
      type: "compra",
      asset: "Bitcoin",
      ticker: "BTC",
      amount: "€1,678.00",
      quantity: "0.032 BTC",
      date: "3 Mar 2023",
      status: "completado",
    },
    {
      id: 4,
      type: "cambio",
      asset: "EUR a USD",
      ticker: "EUR/USD",
      amount: "€500.00",
      quantity: "$546.15",
      date: "10 Mar 2023",
      status: "completado",
    },
    {
      id: 5,
      type: "compra",
      asset: "Fondo Indexado Global",
      ticker: "VWCE",
      amount: "€3,502.00",
      quantity: "42.5 participaciones",
      date: "10 Dic 2022",
      status: "completado",
    },
  ]

  const getAssetIcon = (type: string) => {
    switch (type) {
      case "accion":
        return <BarChart2 className="h-5 w-5 text-white" />
      case "cripto":
        return <Bitcoin className="h-5 w-5 text-white" />
      case "forex":
        return <DollarSign className="h-5 w-5 text-white" />
      case "fondo":
        return <PieChart className="h-5 w-5 text-white" />
      default:
        return <BarChart2 className="h-5 w-5 text-white" />
    }
  }

  const getAssetColor = (type: string) => {
    switch (type) {
      case "accion":
        return "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]"
      case "cripto":
        return "bg-gradient-to-br from-[#F59E0B] to-[#D97706]"
      case "forex":
        return "bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]"
      case "fondo":
        return "bg-gradient-to-br from-[#6366F1] to-[#4338CA]"
      default:
        return "bg-gradient-to-br from-[#8ACE00] to-[#7AB800]"
    }
  }

  const getPerformanceColor = (performance: string) => {
    return performance === "positivo" ? "text-[#8ACE00]" : "text-red-500"
  }

  const getPerformanceIcon = (performance: string) => {
    return performance === "positivo" ? (
      <TrendingUp className="h-4 w-4 text-[#8ACE00]" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    )
  }

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case "compra":
        return "bg-[#8ACE00]/10 text-[#8ACE00]"
      case "venta":
        return "bg-red-100 text-red-800"
      case "cambio":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTransactionTypeIcon = (type: string) => {
    switch (type) {
      case "compra":
        return <ArrowRight className="h-3 w-3 mr-1" />
      case "venta":
        return <ArrowLeft className="h-3 w-3 mr-1" />
      case "cambio":
        return <RefreshCw className="h-3 w-3 mr-1" />
      default:
        return <Info className="h-3 w-3 mr-1" />
    }
  }

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency)
    // En una aplicación real, aquí se calcularía el valor convertido basado en tasas reales
    const selectedRate = currencies.find((c) => c.code === currency)?.rate || 1
    const convertedValue = (Number.parseFloat(amount) / selectedRate).toFixed(2)
    setConvertedAmount(convertedValue)
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    // Actualizar el valor convertido
    const selectedRate = currencies.find((c) => c.code === selectedCurrency)?.rate || 1
    const convertedValue = (Number.parseFloat(value || "0") / selectedRate).toFixed(2)
    setConvertedAmount(convertedValue)
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

  const filteredMarkets = markets.filter((market) => {
    if (!searchQuery) return true
    return (
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.ticker.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 max-w-2xl mx-auto">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Inversiones</h1>
        <p className="text-gray-500 text-sm">Gestiona tus inversiones y cambio de divisas</p>
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
                <p className="text-white/80 text-sm">Valor total de inversiones</p>
                <motion.h2
                  className="text-3xl font-bold mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  €9,251.50
                </motion.h2>
                <p className="text-white/80 text-xs mt-1">Rentabilidad: +€804.42 (+9.5%)</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <p>Distribución de activos</p>
              </div>
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-full h-2 rounded-full overflow-hidden flex">
                  <motion.div
                    className="h-full bg-white/90"
                    initial={{ width: 0 }}
                    animate={{ width: "40%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <motion.div
                    className="h-full bg-amber-300"
                    initial={{ width: 0 }}
                    animate={{ width: "20%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.div
                    className="h-full bg-blue-300"
                    initial={{ width: 0 }}
                    animate={{ width: "13%" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                  <motion.div
                    className="h-full bg-indigo-300"
                    initial={{ width: 0 }}
                    animate={{ width: "27%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </div>
              </motion.div>
              <div className="flex justify-between items-center text-xs text-white/80">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white/90 mr-1"></div>
                  <span>Acciones (40%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-300 mr-1"></div>
                  <span>Cripto (20%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-300 mr-1"></div>
                  <span>Forex (13%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-300 mr-1"></div>
                  <span>Fondos (27%)</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs de navegación */}
      <Tabs defaultValue="cartera" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="cartera">Cartera</TabsTrigger>
          <TabsTrigger value="mercados">Mercados</TabsTrigger>
          <TabsTrigger value="divisas">Divisas</TabsTrigger>
          <TabsTrigger value="historial">Historial</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {activeTab === "cartera" && (
            <motion.div
              key="cartera"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="cartera" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Mis inversiones</h2>
                  <Button variant="outline" size="sm" className="rounded-lg h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    <span className="text-xs">Nueva inversión</span>
                  </Button>
                </div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Rendimiento</h3>
                    <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +9.5% total
                    </Badge>
                  </div>

                  <div className="relative h-40 mb-2">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <motion.path
                        d="M0,35 L10,32 L20,33 L30,30 L40,28 L50,25 L60,20 L70,15 L80,18 L90,16 L100,10"
                        fill="none"
                        stroke="#8ACE00"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      <motion.path
                        d="M0,35 L10,32 L20,33 L30,30 L40,28 L50,25 L60,20 L70,15 L80,18 L90,16 L100,10"
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
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 px-2">
                      <span>Ene</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Abr</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm mt-4 mb-2">
                    <p className="text-gray-500">Inversión inicial</p>
                    <p className="font-medium">€8,447.08</p>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <p className="text-gray-500">Valor actual</p>
                    <p className="font-medium">€9,251.50</p>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <p className="text-gray-500">Beneficio</p>
                    <p className="font-medium text-[#8ACE00]">+€804.42</p>
                  </div>
                </Card>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {portfolioAssets.map((asset) => (
                    <motion.div key={asset.id} variants={item} layout>
                      <Card
                        className="rounded-xl border border-gray-100 card-shadow overflow-hidden"
                        onClick={() => toggleAssetDetails(asset.id)}
                      >
                        <motion.div
                          className="p-4 cursor-pointer"
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                          whileTap={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-10 h-10 rounded-lg ${getAssetColor(
                                asset.type,
                              )} flex items-center justify-center mr-3`}
                            >
                              {getAssetIcon(asset.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{asset.name}</h3>
                                  <p className="text-xs text-gray-500">{asset.ticker}</p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <p className="font-semibold">{asset.value}</p>
                                  <div className="flex items-center">
                                    {getPerformanceIcon(asset.performance)}
                                    <span
                                      className={`text-xs font-medium ml-1 ${getPerformanceColor(asset.performance)}`}
                                    >
                                      {asset.change}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <p className="text-xs text-gray-500">
                                  {asset.type === "accion"
                                    ? `${asset.shares} acciones`
                                    : asset.type === "cripto"
                                      ? `${asset.amount} ${asset.ticker}`
                                      : asset.type === "forex"
                                        ? `${asset.lotSize} lotes`
                                        : `${asset.shares} participaciones`}
                                </p>
                                <div className="flex items-center">
                                  <p className="text-xs text-gray-500 mr-2">
                                    Precio: <span className="font-medium">{asset.price}</span>
                                  </p>
                                  <motion.div
                                    animate={{ rotate: selectedAsset === asset.id ? 90 : 0 }}
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
                          {selectedAsset === asset.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 pb-4 border-t border-gray-100"
                            >
                              <div className="grid grid-cols-2 gap-4 mt-3">
                                <div>
                                  <p className="text-xs text-gray-500">Precio de compra</p>
                                  <p className="text-sm font-medium">{asset.purchasePrice}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Fecha de compra</p>
                                  <p className="text-sm font-medium">{asset.purchaseDate}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Beneficio</p>
                                  <p
                                    className={`text-sm font-medium ${
                                      asset.profit.startsWith("+") ? "text-[#8ACE00]" : "text-red-500"
                                    }`}
                                  >
                                    {asset.profit} ({asset.profitPercentage})
                                  </p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Precio actual</p>
                                  <p className="text-sm font-medium">{asset.price}</p>
                                </div>
                              </div>

                              <div className="flex justify-between mt-4">
                                <Button variant="outline" size="sm" className="text-xs">
                                  <ArrowLeft className="h-3 w-3 mr-1" />
                                  Vender
                                </Button>
                                <Button size="sm" className="bg-[#8ACE00] hover:bg-[#7AB800] text-xs">
                                  <ArrowRight className="h-3 w-3 mr-1" />
                                  Comprar más
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

          {activeTab === "mercados" && (
            <motion.div
              key="mercados"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="mercados" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Explorar mercados</h2>
                  <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                    <LineChart className="h-3 w-3 mr-1" />
                    Tiempo real
                  </Badge>
                </div>

                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar activos"
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
                  <Badge
                    variant="outline"
                    className="bg-white whitespace-nowrap cursor-pointer transition-all bg-[#8ACE00]/10 text-[#8ACE00] border-[#8ACE00]/30"
                  >
                    Todos
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Acciones
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Criptomonedas
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Forex
                  </Badge>
                  <Badge variant="outline" className="bg-white whitespace-nowrap cursor-pointer transition-all">
                    Fondos
                  </Badge>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3 mb-6">
                  {filteredMarkets.map((market) => (
                    <motion.div key={market.id} variants={item}>
                      <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                        <div className="flex items-start">
                          <div
                            className={`w-10 h-10 rounded-lg ${getAssetColor(
                              market.type,
                            )} flex items-center justify-center mr-3`}
                          >
                            {getAssetIcon(market.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <h4 className="font-medium">{market.name}</h4>
                                {market.isFavorite && <Star className="h-4 w-4 text-amber-400 ml-1 fill-amber-400" />}
                              </div>
                              <div className="flex items-center">
                                <p className="font-semibold mr-2">{market.price}</p>
                                <Badge
                                  className={`${
                                    market.performance === "positivo"
                                      ? "bg-[#8ACE00]/10 text-[#8ACE00]"
                                      : "bg-red-100 text-red-800"
                                  } border-0`}
                                >
                                  {getPerformanceIcon(market.performance)}
                                  <span className="ml-1">{market.change}</span>
                                </Badge>
                              </div>
                            </div>
                            <div className="flex justify-between mt-1">
                              <p className="text-xs text-gray-500">{market.ticker}</p>
                              <p className="text-xs text-gray-500">
                                {market.type === "accion" || market.type === "cripto"
                                  ? `Cap: ${market.marketCap}`
                                  : market.type === "forex"
                                    ? `Spread: ${market.spread}`
                                    : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                          <Button variant="ghost" size="sm" className="text-[#8ACE00] text-xs">
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            Invertir
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {filteredMarkets.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-10">
                    <Search className="h-10 w-10 text-gray-300 mb-2" />
                    <p className="text-gray-400">No se encontraron activos</p>
                  </div>
                )}
              </TabsContent>
            </motion.div>
          )}

          {activeTab === "divisas" && (
            <motion.div
              key="divisas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="divisas" className="mt-0">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Cambio de divisas</h2>
                  <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                    <Globe className="h-3 w-3 mr-1" />
                    Para viajes
                  </Badge>
                </div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Conversor de moneda</h3>
                      <p className="text-sm text-gray-500 mt-1">Calcula el cambio para tu viaje</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      <Plane className="h-5 w-5 text-[#8ACE00]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Cantidad (EUR)
                      </label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="text"
                          placeholder="0.00"
                          className="pl-8"
                          value={amount}
                          onChange={(e) => handleAmountChange(e.target.value)}
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                        Selecciona moneda
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {currencies.map((currency) => (
                          <Button
                            key={currency.code}
                            variant={selectedCurrency === currency.code ? "default" : "outline"}
                            className={`h-auto py-2 ${
                              selectedCurrency === currency.code
                                ? "bg-[#8ACE00] hover:bg-[#7AB800]"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() => handleCurrencyChange(currency.code)}
                          >
                            <div className="flex flex-col items-center">
                              <span className="text-lg mb-1">{currency.flag}</span>
                              <span className="text-xs">{currency.code}</span>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500">Recibirás aproximadamente</p>
                          <p className="text-xl font-bold">
                            {selectedCurrency === "USD"
                              ? "$"
                              : selectedCurrency === "GBP"
                                ? "£"
                                : selectedCurrency === "JPY"
                                  ? "¥"
                                  : selectedCurrency === "CHF"
                                    ? "Fr"
                                    : selectedCurrency === "CAD"
                                      ? "C$"
                                      : selectedCurrency === "AUD"
                                        ? "A$"
                                        : ""}
                            {convertedAmount}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xs text-gray-500 mr-2">
                            1 EUR ={" "}
                            {selectedCurrency === "USD"
                              ? "$"
                              : selectedCurrency === "GBP"
                                ? "£"
                                : selectedCurrency === "JPY"
                                  ? "¥"
                                  : selectedCurrency === "CHF"
                                    ? "Fr"
                                    : selectedCurrency === "CAD"
                                      ? "C$"
                                      : selectedCurrency === "AUD"
                                        ? "A$"
                                        : ""}
                            {currencies.find((c) => c.code === selectedCurrency)?.rate.toFixed(4)}
                          </p>
                          <RefreshCw className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm" className="text-xs">
                      <CreditCard className="h-3 w-3 mr-1" />
                      Configurar tarjeta
                    </Button>
                    <Button size="sm" className="bg-[#8ACE00] hover:bg-[#7AB800] text-xs">
                      <Wallet className="h-3 w-3 mr-1" />
                      Solicitar divisa
                    </Button>
                  </div>
                </Card>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <h3 className="font-medium mb-4">Información para viajeros</h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <CreditCard className="h-4 w-4 text-[#8ACE00]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Tarjeta sin comisiones</p>
                        <p className="text-xs text-gray-500">
                          Usa tu tarjeta <strong>Caja7</strong> en el extranjero sin comisiones adicionales
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Globe className="h-4 w-4 text-[#3B82F6]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Cambio de divisa garantizado</p>
                        <p className="text-xs text-gray-500">Bloquea el tipo de cambio actual para tu próximo viaje</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Notifica tus viajes</p>
                        <p className="text-xs text-gray-500">
                          Informa de tus viajes para evitar bloqueos de seguridad en tu tarjeta
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-[#8ACE00] hover:bg-[#7AB800]">
                    <Plane className="h-4 w-4 mr-2" />
                    Configurar mi viaje
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
                  <h2 className="text-lg font-semibold">Historial de operaciones</h2>
                  <Badge className="bg-[#8ACE00]/10 text-[#8ACE00] hover:bg-[#8ACE00]/20 border-0">
                    <Clock className="h-3 w-3 mr-1" />
                    Últimos 3 meses
                  </Badge>
                </div>

                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3 mb-6">
                  {transactionHistory.map((transaction) => (
                    <motion.div key={transaction.id} variants={item}>
                      <Card className="p-4 rounded-xl border border-gray-100 card-shadow hover:shadow-md transition-all duration-300">
                        <div className="flex items-center">
                          <div
                            className={`w-10 h-10 rounded-full ${getTransactionTypeColor(
                              transaction.type,
                            )} flex items-center justify-center mr-3`}
                          >
                            {getTransactionTypeIcon(transaction.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{transaction.asset}</h4>
                              <p className="font-semibold">{transaction.amount}</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-xs text-gray-500">
                                {transaction.ticker} • {transaction.date}
                              </p>
                              <p className="text-xs text-gray-500">{transaction.quantity}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <Card className="p-5 rounded-xl border border-gray-100 card-shadow mb-6">
                  <h3 className="font-medium mb-3">Resumen de operaciones</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Compras</p>
                        <p className="font-medium">€6,606.50</p>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Ventas</p>
                        <p className="font-medium">€950.25</p>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-gray-500">Cambios de divisa</p>
                        <p className="font-medium">€500.00</p>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                  </div>
                </Card>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    <Percent className="h-4 w-4 inline mr-1 text-[#8ACE00]" />
                    Rentabilidad media: <span className="font-medium text-[#8ACE00]">+9.5%</span>
                  </p>
                  <Button variant="ghost" size="sm" className="text-[#8ACE00] text-xs">
                    Ver informe fiscal
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </TabsContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
