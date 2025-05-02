"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Ticket,
  Tag,
  Star,
  StarOff,
  Filter,
  ChevronRight,
  Music,
  Film,
  Plane,
  Coffee,
  Smartphone,
  Calendar,
  Search,
  Heart,
  HeartOff,
  Clock,
  Percent,
} from "lucide-react"
import { Card } from "../components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { cn } from "../lib/utils"

// Tipos para las promociones
interface Promocion {
  id: string
  titulo: string
  descripcion: string
  fechaExpiracion: string
  categoria: string
  descuento: string
  imagen: string
  destacado: boolean
  nuevo: boolean
  codigo?: string
  condiciones: string[]
  comercio: string
  logoComercio: string
  favorito: boolean
}

export default function PromocionesPage() {
  const [activeTab, setActiveTab] = useState("destacados")
  const [categoriaActiva, setCategoriaActiva] = useState("todas")
  const [promociones, setPromociones] = useState<Promocion[]>([])
  const [promocionExpandida, setPromocionExpandida] = useState<string | null>(null)
  const [busqueda, setBusqueda] = useState("")
  const [filtroFavoritos, setFiltroFavoritos] = useState(false)

  // Datos de ejemplo para promociones
  useEffect(() => {
    // Simulación de carga de datos
    const promocionesData: Promocion[] = [
      {
        id: "promo1",
        titulo: "30% dto. Concierto de Quevedo",
        descripcion:
          "Consigue un 30% de descuento en entradas para el próximo concierto de Quevedo en Madrid. Oferta exclusiva para clientes de nuestro banco.",
        fechaExpiracion: "15 Jun 2025",
        categoria: "musica",
        descuento: "30%",
        imagen: "/images/quevedo.jpg",
        destacado: true,
        nuevo: true,
        codigo: "QUEVEDO30",
        condiciones: ["Máximo 2 entradas por cliente", "Sujeto a disponibilidad", "No acumulable con otras ofertas"],
        comercio: "Ticketmaster",
        logoComercio: "/images/entradas.jpg",
        favorito: false,
      },
      {
        id: "promo2",
        titulo: "5% mensual en Netflix",
        descripcion:
          "Ahorra un 5% todos los meses en tu suscripción a Netflix al pagar con tu tarjeta. Descuento aplicado automáticamente.",
        fechaExpiracion: "Sin fecha límite",
        categoria: "streaming",
        descuento: "5%",
        imagen: "/images/netflix.png",
        destacado: true,
        nuevo: false,
        condiciones: [
          "Válido para todas las suscripciones",
          "Se aplica automáticamente al pagar con tu tarjeta",
          "Reembolso en tu cuenta a final de mes",
        ],
        comercio: "Netflix",
        logoComercio: "/images/netflix_logo.jpg",
        favorito: true,
      },
      {
        id: "promo3",
        titulo: "2x1 en cines Cinesa",
        descripcion:
          "Disfruta de 2x1 en entradas de cine todos los miércoles. Presenta tu tarjeta en taquilla o usa el código al comprar online.",
        fechaExpiracion: "31 Dic 2025",
        categoria: "ocio",
        descuento: "2x1",
        imagen: "/images/cinesa.webp",
        destacado: false,
        nuevo: true,
        codigo: "CINE2X1BANCO",
        condiciones: [
          "Válido solo miércoles no festivos",
          "No válido para estrenos, 3D o salas especiales",
          "Sujeto a aforo disponible",
        ],
        comercio: "Cinesa",
        logoComercio: "/images/cinesa_logo.png",
        favorito: false,
      },
      {
        id: "promo4",
        titulo: "15% dto. en Booking.com",
        descripcion:
          "Reserva tus vacaciones con un 15% de descuento en alojamientos seleccionados de Booking.com pagando con tu tarjeta.",
        fechaExpiracion: "30 Sep 2025",
        categoria: "viajes",
        descuento: "15%",
        imagen: "/images/booking.jpg",
        destacado: true,
        nuevo: false,
        codigo: "BANCO15BOOKING",
        condiciones: [
          "Válido para reservas superiores a 3 noches",
          "Solo en alojamientos participantes",
          "No acumulable con otras promociones",
        ],
        comercio: "Booking.com",
        logoComercio: "/images/booking_logo.svg",
        favorito: false,
      },
      {
        id: "promo5",
        titulo: "10% dto. en Starbucks",
        descripcion:
          "Disfruta de un 10% de descuento en todas tus compras en Starbucks al pagar con tu tarjeta de débito o crédito.",
        fechaExpiracion: "Sin fecha límite",
        categoria: "restauracion",
        descuento: "10%",
        imagen: "/images/starbucks.jpg",
        destacado: false,
        nuevo: false,
        condiciones: [
          "Válido en todos los establecimientos de España",
          "No acumulable con otras promociones",
          "Descuento aplicado en el momento del pago",
        ],
        comercio: "Starbucks",
        logoComercio: "/images/starbucks_logo.webp",
        favorito: true,
      },
      {
        id: "promo6",
        titulo: "20% dto. en Apple Store",
        descripcion:
          "Consigue un 20% de descuento en accesorios al comprar un iPhone o iPad en la Apple Store oficial.",
        fechaExpiracion: "15 Jul 2025",
        categoria: "tecnologia",
        descuento: "20%",
        imagen: "/images/apple.webp",
        destacado: true,
        nuevo: true,
        codigo: "BANCOAPPLE20",
        condiciones: [
          "Válido solo en Apple Store físicas",
          "Necesario presentar tarjeta del banco",
          "Máximo descuento de 100€",
        ],
        comercio: "Apple",
        logoComercio: "/images/apple_logo.png",
        favorito: false,
      },
    ]

    setPromociones(promocionesData)
  }, [])

  // Función para alternar favoritos
  const toggleFavorito = (id: string) => {
    setPromociones(promociones.map((promo) => (promo.id === id ? { ...promo, favorito: !promo.favorito } : promo)))
  }

  // Función para expandir/colapsar detalles de promoción
  const toggleExpansion = (id: string) => {
    setPromocionExpandida(promocionExpandida === id ? null : id)
  }

  // Filtrar promociones según búsqueda, categoría y favoritos
  const promocionesFiltradas = promociones.filter((promo) => {
    const coincideBusqueda =
      promo.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      promo.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaActiva === "todas" || promo.categoria === categoriaActiva
    const coincideFavoritos = !filtroFavoritos || promo.favorito

    return coincideBusqueda && coincideCategoria && coincideFavoritos
  })

  // Promociones destacadas
  const promocionesDestacadas = promocionesFiltradas.filter((promo) => promo.destacado)

  // Categorías para el filtro
  const categorias = [
    { id: "todas", nombre: "Todas", icono: Tag },
    { id: "musica", nombre: "Música", icono: Music },
    { id: "streaming", nombre: "Streaming", icono: Film },
    { id: "viajes", nombre: "Viajes", icono: Plane },
    { id: "restauracion", nombre: "Cafeterías", icono: Coffee },
    { id: "ocio", nombre: "Ocio", icono: Ticket },
    { id: "tecnologia", nombre: "Tecnología", icono: Smartphone },
  ]

  // Animaciones
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

  // Renderizar tarjeta de promoción
  const renderPromocionCard = (promo: Promocion) => {
    const isExpanded = promocionExpandida === promo.id

    return (
      <motion.div key={promo.id} variants={item} layout className="w-full">
        <Card
          className={cn(
            "overflow-hidden border border-gray-100 rounded-xl card-shadow transition-all duration-300",
            isExpanded ? "mb-6" : "mb-4",
          )}
        >
          <div className="relative">
            {/* Imagen de fondo */}
            <div className="h-40 bg-gradient-to-r from-gray-700 to-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src={promo.imagen || "/placeholder.svg"}
                alt={promo.titulo}
                className="w-full h-full object-cover opacity-60"
              />

              {/* Logo del comercio */}
              <div className="absolute top-3 left-3 bg-white rounded-full p-1 shadow-md z-20">
                <img
                  src={promo.logoComercio || "/placeholder.svg"}
                  alt={promo.comercio}
                  className="w-8 h-8 rounded-full"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                {promo.nuevo && <Badge className="bg-[#8ACE00] hover:bg-[#7AB800]">Nuevo</Badge>}
                {promo.destacado && <Badge className="bg-amber-500 hover:bg-amber-600">Destacado</Badge>}
              </div>

              {/* Descuento */}
              <div className="absolute bottom-3 right-3 z-20">
                <div className="bg-white text-gray-900 font-bold rounded-lg px-3 py-1 text-lg shadow-lg flex items-center">
                  <Percent className="w-4 h-4 mr-1" />
                  {promo.descuento}
                </div>
              </div>

              {/* Título */}
              <div className="absolute bottom-3 left-3 z-20 pr-16">
                <h3 className="text-white font-bold text-lg leading-tight">{promo.titulo}</h3>
                <p className="text-gray-200 text-xs flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {promo.fechaExpiracion === "Sin fecha límite" ? "Sin caducidad" : `Hasta ${promo.fechaExpiracion}`}
                </p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-600 line-clamp-2 pr-8">{promo.descripcion}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-[#8ACE00]"
                  onClick={() => toggleFavorito(promo.id)}
                >
                  {promo.favorito ? (
                    <Heart className="h-5 w-5 fill-[#8ACE00] text-[#8ACE00]" />
                  ) : (
                    <HeartOff className="h-5 w-5" />
                  )}
                </Button>
              </div>

              {/* Botones de acción */}
              <div className="flex justify-between items-center mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-gray-200"
                  onClick={() => toggleExpansion(promo.id)}
                >
                  {isExpanded ? "Ver menos" : "Ver detalles"}
                </Button>
                <Button size="sm" className="text-xs bg-[#8ACE00] hover:bg-[#7AB800] text-white">
                  Activar oferta
                </Button>
              </div>

              {/* Detalles expandidos */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <h4 className="font-medium text-sm mb-2">Condiciones:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {promo.condiciones.map((condicion, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#8ACE00] mr-2">•</span>
                          <span>{condicion}</span>
                        </li>
                      ))}
                    </ul>

                    {promo.codigo && (
                      <div className="mt-4">
                        <h4 className="font-medium text-sm mb-2">Código promocional:</h4>
                        <div className="bg-gray-50 border border-gray-200 rounded-md p-2 flex justify-between items-center">
                          <code className="text-sm font-mono">{promo.codigo}</code>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-[#8ACE00] hover:text-[#7AB800]"
                            onClick={() => navigator.clipboard.writeText(promo.codigo || "")}
                          >
                            Copiar
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6 pb-20 max-w-2xl mx-auto">
      {/* Cabecera */}
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-bold">Promociones</h1>
          <p className="text-gray-500 text-sm">Descuentos exclusivos para ti</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={filtroFavoritos ? "default" : "outline"}
            size="sm"
            className={cn("rounded-full", filtroFavoritos ? "bg-[#8ACE00] hover:bg-[#7AB800]" : "")}
            onClick={() => setFiltroFavoritos(!filtroFavoritos)}
          >
            {filtroFavoritos ? <Star className="h-4 w-4" /> : <StarOff className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Buscador */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar promociones..."
            className="pl-10 pr-4 py-2 w-full rounded-xl border-gray-200"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Categorías */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 overflow-x-auto pb-2"
      >
        <div className="flex space-x-2 min-w-max">
          {categorias.map((cat) => {
            const Icon = cat.icono
            return (
              <Button
                key={cat.id}
                variant={categoriaActiva === cat.id ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full flex items-center",
                  categoriaActiva === cat.id ? "bg-[#8ACE00] hover:bg-[#7AB800]" : "",
                )}
                onClick={() => setCategoriaActiva(cat.id)}
              >
                <Icon className="h-4 w-4 mr-1" />
                <span>{cat.nombre}</span>
              </Button>
            )
          })}
        </div>
      </motion.div>

      {/* Contenido principal */}
      <Tabs defaultValue="destacados" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="destacados">Destacados</TabsTrigger>
          <TabsTrigger value="todos">Todos los descuentos</TabsTrigger>
        </TabsList>

        {/* Pestaña de destacados */}
        <TabsContent value="destacados" className="mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key="destacados"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {promocionesDestacadas.length > 0 ? (
                promocionesDestacadas.map(renderPromocionCard)
              ) : (
                <motion.div variants={item} className="text-center py-10">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <Ticket className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                    <h3 className="text-lg font-medium text-gray-700">No hay promociones destacadas</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {busqueda || filtroFavoritos || categoriaActiva !== "todas"
                        ? "Prueba a cambiar los filtros de búsqueda"
                        : "Pronto añadiremos nuevas ofertas para ti"}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Pestaña de todos los descuentos */}
        <TabsContent value="todos" className="mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key="todos"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {promocionesFiltradas.length > 0 ? (
                promocionesFiltradas.map(renderPromocionCard)
              ) : (
                <motion.div variants={item} className="text-center py-10">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <Tag className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                    <h3 className="text-lg font-medium text-gray-700">No hay promociones disponibles</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {busqueda || filtroFavoritos || categoriaActiva !== "todas"
                        ? "Prueba a cambiar los filtros de búsqueda"
                        : "Pronto añadiremos nuevas ofertas para ti"}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>

      {/* Banner promocional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="bg-gradient-to-r from-[#8ACE00] to-[#6BA300] p-4 relative">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
              <Calendar className="w-full h-full" />
            </div>
            <h3 className="text-white font-bold text-lg">¿Tienes un negocio?</h3>
            <p className="text-white/90 text-sm mt-1">
              Únete a nuestro programa de promociones y llega a miles de clientes
            </p>
            <Button className="mt-3 bg-white text-[#8ACE00] hover:bg-gray-100 hover:text-[#7AB800]">
              Más información
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
