import { CreditCard } from "lucide-react"
import { Card as UiCard, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export interface CardData {
  id: number
  type: string
  number: string
  expiry: string
  balance: string
  color: string
}

interface CreditCardCarouselProps {
  cards: CardData[]
}

export function CreditCardCarousel({ cards }: CreditCardCarouselProps) {
  
  return (
    <Carousel className="w-full max-w-sm relative py-4">
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <UiCard className="shadow-lg rounded-2xl overflow-hidden aspect-[1.58/1] relative text-white">
                <CardContent className={`relative z-10 p-5 h-full ${card.color}`}>

                  <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-white blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-white blur-3xl" />
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
                </CardContent>
              </UiCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
