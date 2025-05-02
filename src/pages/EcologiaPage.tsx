"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Leaf,
    ShoppingBag,
    History,
    Award,
    ChevronRight,
    Search,
    Truck,
    Gift,
    ThumbsUp,
    BadgeCheck,
    Recycle,
} from "lucide-react"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Input } from "../components/ui/input"

export default function EcologicaPage() {
    const [activeTab, setActiveTab] = useState("puntos")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const [puntosVerdes, setPuntosVerdes] = useState(1250)
    const [showProductDetail, setShowProductDetail] = useState<number | null>(null)
    const [canjeExitoso, setCanjeExitoso] = useState(false)

    // Datos de ejemplo
    const historialCompras = [
        {
            id: 1,
            comercio: "EcoMarket",
            fecha: "12 May 2025",
            importe: "€24.50",
            puntos: 49,
            categoria: "Alimentación",
            logo: "🌱",
        },
        {
            id: 2,
            comercio: "GreenBike",
            fecha: "10 May 2025",
            importe: "€145.00",
            puntos: 290,
            categoria: "Movilidad",
            logo: "🚲",
        },
        {
            id: 3,
            comercio: "EcoClothing",
            fecha: "5 May 2025",
            importe: "€78.35",
            puntos: 157,
            categoria: "Moda",
            logo: "👕",
        },
        {
            id: 4,
            comercio: "OrganicFarm",
            fecha: "1 May 2025",
            importe: "€32.20",
            puntos: 64,
            categoria: "Alimentación",
            logo: "🥕",
        },
    ]

    const comerciosVerdes = [
        {
            id: 1,
            nombre: "EcoMarket",
            categoria: "Alimentación",
            puntosPorEuro: 2,
            logo: "🌱",
            direccion: "Calle Verde 23, Madrid",
            destacado: true,
        },
        {
            id: 2,
            nombre: "GreenBike",
            categoria: "Movilidad",
            puntosPorEuro: 2,
            logo: "🚲",
            direccion: "Avenida Sostenible 45, Barcelona",
            destacado: true,
        },
        {
            id: 3,
            nombre: "EcoClothing",
            categoria: "Moda",
            puntosPorEuro: 2,
            logo: "👕",
            direccion: "Plaza Ecológica 7, Valencia",
            destacado: false,
        },
        {
            id: 4,
            nombre: "OrganicFarm",
            categoria: "Alimentación",
            puntosPorEuro: 2,
            logo: "🥕",
            direccion: "Camino Natural 12, Sevilla",
            destacado: false,
        },
        {
            id: 5,
            nombre: "EcoHome",
            categoria: "Hogar",
            puntosPorEuro: 2,
            logo: "🏡",
            direccion: "Calle Sostenible 34, Bilbao",
            destacado: false,
        },
    ]

    const productosEcologicos = [
        {
            id: 1,
            nombre: "Botella reutilizable",
            descripcion: "Botella de acero inoxidable de 750ml, libre de BPA y totalmente reciclable.",
            puntos: 500,
            imagen: "/images/ecologia/botella.jpg",
            categoria: "Hogar",
            stock: 15,
            destacado: true,
        },
        {
            id: 2,
            nombre: "Kit de cubiertos bambú",
            descripcion: "Set completo de cubiertos de bambú sostenible con estuche de tela orgánica.",
            puntos: 350,
            imagen: "/images/ecologia/cubiertos.webp",
            categoria: "Hogar",
            stock: 8,
            destacado: true,
        },
        {
            id: 3,
            nombre: "Huerto urbano",
            descripcion: "Kit completo para crear tu propio huerto urbano en casa, semillas orgánicas incluidas.",
            puntos: 1200,
            imagen: "/images/ecologia/huerto.jpg",
            categoria: "Jardín",
            stock: 5,
            destacado: false,
        },
        {
            id: 4,
            nombre: "Cargador solar",
            descripcion: "Cargador portátil con panel solar integrado para dispositivos móviles.",
            puntos: 950,
            imagen: "/images/ecologia/cargador.jpeg",
            categoria: "Tecnología",
            stock: 7,
            destacado: true,
        },
        {
            id: 5,
            nombre: "Bolsa compra reutilizable",
            descripcion: "Pack de 3 bolsas de compra plegables hechas con materiales reciclados.",
            puntos: 300,
            imagen: "/images/ecologia/bolsas.jpg",
            categoria: "Hogar",
            stock: 20,
            destacado: false,
        },
    ]

    const categorias = ["Todos", "Hogar", "Moda", "Tecnología", "Jardín"]

    const logros = [
        {
            id: 1,
            nombre: "Primeros pasos verdes",
            descripcion: "Realiza tu primera compra en un comercio ecológico",
            puntos: 50,
            completado: true,
            icono: <Leaf className="h-6 w-6 text-green-500" />,
        },
        {
            id: 2,
            nombre: "Consumidor consciente",
            descripcion: "Acumula 500 puntos verdes",
            puntos: 100,
            completado: true,
            icono: <ThumbsUp className="h-6 w-6 text-green-500" />,
        },
        {
            id: 3,
            nombre: "Defensor del planeta",
            descripcion: "Acumula 1000 puntos verdes",
            puntos: 200,
            completado: true,
            icono: <Award className="h-6 w-6 text-green-500" />,
        },
        {
            id: 4,
            nombre: "Embajador ecológico",
            descripcion: "Compra en 5 comercios ecológicos diferentes",
            puntos: 250,
            completado: false,
            progreso: 4,
            total: 5,
            icono: <BadgeCheck className="h-6 w-6 text-gray-400" />,
        },
        {
            id: 5,
            nombre: "Maestro del reciclaje",
            descripcion: "Canjea 3 productos en la tienda eco",
            puntos: 300,
            completado: false,
            progreso: 1,
            total: 3,
            icono: <Recycle className="h-6 w-6 text-gray-400" />,
        },
    ]

    const filteredProducts = productosEcologicos.filter((producto) => {
        return (
            (selectedCategory === "Todos" || producto.categoria === selectedCategory) &&
            producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })

    const handleCanjear = (productoId: number) => {
        const producto = productosEcologicos.find((p) => p.id === productoId)
        if (producto && puntosVerdes >= producto.puntos) {
            setPuntosVerdes((prev) => prev - producto.puntos)
            setCanjeExitoso(true)
            setTimeout(() => {
                setCanjeExitoso(false)
                setShowProductDetail(null)
            }, 2000)
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
        <div className="px-4 sm:px-6 md:px-8 pt-6 pb-24 max-w-2xl mx-auto">
            <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h1 className="text-2xl font-bold">Eco Rewards</h1>
                    <p className="text-gray-500 text-sm">Compra verde, gana puntos</p>
                </div>
                <div className="flex items-center justify-center px-4 py-3 rounded-xl border border-green-100 bg-green-50">
                    <Leaf className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-700 font-bold">{puntosVerdes} pts</span>
                </div>
            </motion.div>

            {/* Tarjeta de nivel ecológico */}
            <Card className="p-4 rounded-xl border border-green-100 mb-6 bg-gradient-to-br from-green-50 to-white">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <Award className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-medium">Nivel Ecológico</h3>
                            <p className="text-sm text-gray-500">Defensor del Planeta</p>
                        </div>
                    </div>
                    <Badge className="bg-green-600">Nivel 3</Badge>
                </div>
                <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                        <span>Progreso al siguiente nivel</span>
                        <span className="font-medium">1250/2000</span>
                    </div>
                    <Progress value={62.5} className="h-2 bg-green-100" />
                </div>
            </Card>

            <Tabs defaultValue="puntos" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="puntos">
                        <Leaf className="h-4 w-4 mr-2" />
                        Puntos
                    </TabsTrigger>
                    <TabsTrigger value="tienda">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Tienda
                    </TabsTrigger>
                    <TabsTrigger value="logros">
                        <Award className="h-4 w-4 mr-2" />
                        Logros
                    </TabsTrigger>
                </TabsList>

                {/* Contenido de la pestaña Puntos */}
                <TabsContent value="puntos" className="mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="puntos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-6">
                                {/* Sección de historial de compras */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold flex items-center">
                                            <History className="h-5 w-5 mr-2 text-green-600" />
                                            Historial de puntos
                                        </h2>
                                        <Button variant="ghost" size="sm" className="text-green-600">
                                            <span className="text-xs">Ver todo</span>
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>

                                    <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                                        {historialCompras.map((compra) => (
                                            <motion.div key={compra.id} variants={item}>
                                                <Card className="p-3 rounded-xl border border-gray-100">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3 text-xl">
                                                                {compra.logo}
                                                            </div>
                                                            <div>
                                                                <h3 className="font-medium">{compra.comercio}</h3>
                                                                <p className="text-xs text-gray-500">{compra.fecha}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-green-600 font-bold">+{compra.puntos} pts</span>
                                                            <p className="text-xs text-gray-500">{compra.importe}</p>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Sección de comercios verdes */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-lg font-semibold flex items-center">
                                            <Leaf className="h-5 w-5 mr-2 text-green-600" />
                                            Comercios verdes
                                        </h2>
                                        <Button variant="ghost" size="sm" className="text-green-600">
                                            <span className="text-xs">Ver mapa</span>
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {comerciosVerdes
                                            .filter((c) => c.destacado)
                                            .map((comercio) => (
                                                <Card key={comercio.id} className="p-3 rounded-xl border border-gray-100">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3 text-xl">
                                                            {comercio.logo}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium">{comercio.nombre}</h3>
                                                            <p className="text-xs text-gray-500">{comercio.categoria}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-xs text-gray-500">{comercio.direccion}</div>
                                                    <div className="mt-2 flex justify-between items-center">
                                                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                                                            {comercio.puntosPorEuro}x puntos
                                                        </Badge>
                                                        <Button variant="ghost" size="sm" className="text-green-600 p-0 h-auto">
                                                            <span className="text-xs">Ver detalles</span>
                                                            <ChevronRight className="h-4 w-4 ml-1" />
                                                        </Button>
                                                    </div>
                                                </Card>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>

                {/* Contenido de la pestaña Tienda */}
                <TabsContent value="tienda" className="mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="tienda"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Buscador y filtros */}
                            <div className="mb-6 space-y-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <Input
                                        placeholder="Buscar productos..."
                                        className="pl-9 rounded-xl"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {categorias.map((categoria) => (
                                        <Button
                                            key={categoria}
                                            variant={selectedCategory === categoria ? "default" : "outline"}
                                            size="sm"
                                            className={selectedCategory === categoria ? "bg-green-600 hover:bg-green-700" : ""}
                                            onClick={() => setSelectedCategory(categoria)}
                                        >
                                            {categoria}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Productos */}
                            {showProductDetail === null ? (
                                <div className="grid grid-cols-2 gap-3">
                                    {filteredProducts.map((producto) => (
                                        <motion.div key={producto.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                            <Card
                                                className="overflow-hidden border border-gray-100 rounded-xl"
                                                onClick={() => setShowProductDetail(producto.id)}
                                            >
                                                <div className="h-32 bg-gray-100 relative">
                                                    <img
                                                        src={producto.imagen || "/placeholder.svg"}
                                                        alt={producto.nombre}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {producto.destacado && (
                                                        <Badge className="absolute top-2 left-2 bg-green-600">Destacado</Badge>
                                                    )}
                                                </div>
                                                <div className="p-3">
                                                    <h3 className="font-medium text-sm line-clamp-1">{producto.nombre}</h3>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                                                            {producto.puntos} pts
                                                        </Badge>
                                                        <span className="text-xs text-gray-500">Stock: {producto.stock}</span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <AnimatePresence>
                                    {canjeExitoso ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="flex flex-col items-center justify-center py-10"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                                <ThumbsUp className="h-8 w-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-center mb-2">¡Canje exitoso!</h3>
                                            <p className="text-gray-500 text-center mb-6">Tu producto será enviado pronto</p>
                                            <Button className="bg-green-600 hover:bg-green-700" onClick={() => setShowProductDetail(null)}>
                                                Volver a la tienda
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                        >
                                            {(() => {
                                                const producto = productosEcologicos.find((p) => p.id === showProductDetail)
                                                if (!producto) return null

                                                return (
                                                    <div className="space-y-4">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="mb-2"
                                                            onClick={() => setShowProductDetail(null)}
                                                        >
                                                            <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                                                            <span>Volver</span>
                                                        </Button>

                                                        <div className="h-48 bg-gray-100 rounded-xl overflow-hidden">
                                                            <img
                                                                src={producto.imagen || "/placeholder.svg"}
                                                                alt={producto.nombre}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>

                                                        <div>
                                                            <h2 className="text-xl font-bold">{producto.nombre}</h2>
                                                            <Badge className="mt-1 bg-green-600">{producto.categoria}</Badge>
                                                        </div>

                                                        <p className="text-gray-600">{producto.descripcion}</p>

                                                        <div className="flex items-center space-x-2">
                                                            <Truck className="h-4 w-4 text-gray-500" />
                                                            <span className="text-sm text-gray-500">Envío gratuito</span>
                                                        </div>

                                                        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                            <div>
                                                                <span className="text-sm text-gray-500">Precio</span>
                                                                <div className="text-2xl font-bold text-green-600">{producto.puntos} pts</div>
                                                            </div>

                                                            <Button
                                                                className={`bg-green-600 hover:bg-green-700 ${puntosVerdes < producto.puntos ? "opacity-50 cursor-not-allowed" : ""}`}
                                                                disabled={puntosVerdes < producto.puntos}
                                                                onClick={() => handleCanjear(producto.id)}
                                                            >
                                                                {puntosVerdes < producto.puntos ? "Puntos insuficientes" : "Canjear ahora"}
                                                            </Button>
                                                        </div>

                                                        {puntosVerdes < producto.puntos && (
                                                            <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg flex items-start">
                                                                <Gift className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                                                                <span>
                                                                    Te faltan {producto.puntos - puntosVerdes} puntos para canjear este producto. ¡Sigue
                                                                    comprando en comercios verdes!
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })()}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>

                {/* Contenido de la pestaña Logros */}
                <TabsContent value="logros" className="mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="logros"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-4">
                                {logros.map((logro) => (
                                    <Card
                                        key={logro.id}
                                        className={`p-4 rounded-xl border ${logro.completado ? "border-green-100 bg-green-50/30" : "border-gray-100"}`}
                                    >
                                        <div className="flex items-start">
                                            <div className="mr-3 mt-1">{logro.icono}</div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <h3 className="font-medium">{logro.nombre}</h3>
                                                    <Badge className={logro.completado ? "bg-green-600" : "bg-gray-300"}>
                                                        {logro.completado ? "Completado" : "Pendiente"}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{logro.descripcion}</p>

                                                {!logro.completado && logro.progreso !== undefined && (
                                                    <div className="mt-2">
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span>Progreso</span>
                                                            <span>
                                                                {logro.progreso}/{logro.total}
                                                            </span>
                                                        </div>
                                                        <Progress
                                                            value={(logro.progreso / logro.total) * 100}
                                                            className="h-2 bg-gray-100"
                                                        />
                                                    </div>
                                                )}

                                                <div className="mt-2 text-sm">
                                                    <span className="text-green-600 font-medium">+{logro.puntos} pts</span>
                                                    {logro.completado && <span className="text-gray-500"> obtenidos</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
            </Tabs>
        </div>
    )
}
