"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Switch } from "../components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import {
  User,
  Shield,
  Bell,
  Smartphone,
  Globe,
  Moon,
  HelpCircle,
  ChevronRight,
  LogOut,
  Lock,
  Eye,
  Fingerprint,
  MessageSquare,
  Settings,
  CreditCard,
  Languages,
  Send,
  Sparkles,
} from "lucide-react"

export default function AjustesPage() {
  const [activeTab, setActiveTab] = useState("perfil")
  const [showAsistente, setShowAsistente] = useState(false)
  const [mensajes, setMensajes] = useState([
    {
      tipo: "sistema",
      contenido: "¡Hola! Soy tu asistente financiero virtual. ¿En qué puedo ayudarte hoy?",
    },
  ])
  const [nuevoMensaje, setNuevoMensaje] = useState("")

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim()) return

    // Añadir mensaje del usuario
    setMensajes([...mensajes, { tipo: "usuario", contenido: nuevoMensaje }])
    setNuevoMensaje("")

    // Simular respuesta del asistente (en una aplicación real, esto se conectaría a la API)
    setTimeout(() => {
      setMensajes((prevMensajes) => [
        ...prevMensajes,
        {
          tipo: "sistema",
          contenido:
            "Entiendo tu consulta. Como asistente financiero, puedo ayudarte a gestionar mejor tus finanzas personales y resolver tus dudas bancarias.",
        },
      ])
    }, 1000)
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Ajustes</h1>
            <p className="text-gray-500 text-sm">Personaliza tu experiencia bancaria</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full relative"
            onClick={() => setShowAsistente(!showAsistente)}
          >
            <MessageSquare className="h-5 w-5 text-[#8ACE00]" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-[#8ACE00] rounded-full"></span>
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`md:col-span-${showAsistente ? "2" : "3"}`}>
          <Tabs defaultValue="perfil" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
              <TabsTrigger value="notificaciones">Alertas</TabsTrigger>
              <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {activeTab === "perfil" && (
                <motion.div
                  key="perfil"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="perfil" className="mt-0">
                    <Card className="p-6 rounded-xl border border-gray-100 card-shadow mb-6">
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 rounded-full bg-[#8ACE00] flex items-center justify-center mr-4 text-white text-xl font-bold">
                          CS
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Carlos Sánchez</h3>
                          <p className="text-sm text-gray-500">carlos.sanchez@email.com</p>
                          <p className="text-sm text-gray-500">+34 612 345 678</p>
                        </div>
                      </div>

                      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                                <User className="h-4 w-4 text-[#8ACE00]" />
                              </div>
                              <p className="font-medium text-sm">Datos personales</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                                <CreditCard className="h-4 w-4 text-[#3B82F6]" />
                              </div>
                              <p className="font-medium text-sm">Información bancaria</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center mr-3">
                                <Settings className="h-4 w-4 text-[#6366F1]" />
                              </div>
                              <p className="font-medium text-sm">Gestión de cuenta</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>
                      </motion.div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Button variant="outline" className="w-full text-red-500 border-red-100 hover:bg-red-50">
                          <LogOut className="h-4 w-4 mr-2" />
                          Cerrar sesión
                        </Button>
                      </div>
                    </Card>
                  </TabsContent>
                </motion.div>
              )}

              {activeTab === "seguridad" && (
                <motion.div
                  key="seguridad"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="seguridad" className="mt-0">
                    <Card className="p-6 rounded-xl border border-gray-100 card-shadow mb-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="font-medium text-lg">Seguridad de la cuenta</h3>
                          <p className="text-sm text-gray-500 mt-1">Gestiona la protección de tu cuenta bancaria</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                          <Shield className="h-5 w-5 text-[#8ACE00]" />
                        </div>
                      </div>

                      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                                <Lock className="h-4 w-4 text-[#8ACE00]" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Cambiar contraseña</p>
                                <p className="text-xs text-gray-500">Última actualización: hace 45 días</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                                <Fingerprint className="h-4 w-4 text-[#3B82F6]" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Autenticación biométrica</p>
                                <p className="text-xs text-gray-500">Huella digital, Face ID</p>
                              </div>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center mr-3">
                                <Smartphone className="h-4 w-4 text-[#6366F1]" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Dispositivos conectados</p>
                                <p className="text-xs text-gray-500">2 dispositivos activos</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#EC4899]/10 flex items-center justify-center mr-3">
                                <Eye className="h-4 w-4 text-[#EC4899]" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Privacidad de datos</p>
                                <p className="text-xs text-gray-500">Gestiona el uso de tus datos</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>
                      </motion.div>
                    </Card>
                  </TabsContent>
                </motion.div>
              )}

              {activeTab === "notificaciones" && (
                <motion.div
                  key="notificaciones"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="notificaciones" className="mt-0">
                    <Card className="p-6 rounded-xl border border-gray-100 card-shadow mb-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="font-medium text-lg">Alertas y notificaciones</h3>
                          <p className="text-sm text-gray-500 mt-1">Configura cómo quieres recibir tus alertas</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                          <Bell className="h-5 w-5 text-[#8ACE00]" />
                        </div>
                      </div>

                      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm">Movimientos de cuenta</p>
                              <p className="text-xs text-gray-500">Notificaciones de cargos y abonos</p>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm">Pagos con tarjeta</p>
                              <p className="text-xs text-gray-500">Alertas de compras y pagos</p>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm">Seguridad</p>
                              <p className="text-xs text-gray-500">Inicios de sesión y cambios de seguridad</p>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm">Ofertas y promociones</p>
                              <p className="text-xs text-gray-500">Información sobre nuevos productos</p>
                            </div>
                            <Switch checked={false} />
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium text-sm">Consejos financieros</p>
                              <p className="text-xs text-gray-500">Recomendaciones personalizadas</p>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </motion.div>
                      </motion.div>
                    </Card>
                  </TabsContent>
                </motion.div>
              )}

              {activeTab === "preferencias" && (
                <motion.div
                  key="preferencias"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="preferencias" className="mt-0">
                    <Card className="p-6 rounded-xl border border-gray-100 card-shadow mb-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="font-medium text-lg">Preferencias de la aplicación</h3>
                          <p className="text-sm text-gray-500 mt-1">Personaliza tu experiencia</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                          <Settings className="h-5 w-5 text-[#8ACE00]" />
                        </div>
                      </div>

                      <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#8ACE00]/10 flex items-center justify-center mr-3">
                                <Moon className="h-4 w-4 text-[#8ACE00]" />
                              </div>
                              <p className="font-medium text-sm">Modo oscuro</p>
                            </div>
                            <Switch checked={false} />
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mr-3">
                                <Languages className="h-4 w-4 text-[#3B82F6]" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Idioma</p>
                                <p className="text-xs text-gray-500">Español</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center mr-3">
                                <Globe className="h-4 w-4 text-[#6366F1]" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Región</p>
                                <p className="text-xs text-gray-500">España</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>

                        <motion.div variants={item}>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-[#EC4899]/10 flex items-center justify-center mr-3">
                                <HelpCircle className="h-4 w-4 text-[#EC4899]" />
                              </div>
                              <p className="font-medium text-sm">Ayuda y soporte</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>
                      </motion.div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 text-center">Versión de la aplicación: 2.4.1</p>
                      </div>
                    </Card>
                  </TabsContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Tabs>
        </div>

        {showAsistente && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="md:col-span-1"
          >
            <Card className="p-4 rounded-xl border border-gray-100 card-shadow h-[600px] flex flex-col">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#8ACE00] flex items-center justify-center mr-2">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Asistente Financiero</h3>
                    <p className="text-xs text-gray-500">Powered by AI</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setShowAsistente(false)}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {mensajes.map((mensaje, index) => (
                  <div key={index} className={`flex ${mensaje.tipo === "usuario" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        mensaje.tipo === "usuario" ? "bg-[#8ACE00] text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{mensaje.contenido}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Escribe tu consulta..."
                  className="flex-1 p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8ACE00]"
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && enviarMensaje()}
                />
                <Button size="sm" className="bg-[#8ACE00] hover:bg-[#7AB800] h-9 w-9 p-0" onClick={enviarMensaje}>
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
