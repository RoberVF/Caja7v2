import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, CreditCard } from 'lucide-react';
import { Button } from "./ui/button";

export interface Card {
  id: number;
  type: string;
  number: string;
  expiry: string;
  balance: string;
  color: string;
}

interface CardCarouselProps {
  cards: Card[];
  onCardChange: (card: Card) => void;
}

export default function CardCarousel({ cards, onCardChange }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    // Only call onCardChange when the component mounts or when currentIndex actually changes
    onCardChange(cards[currentIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, cards]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // setIsDragging(false);
    const threshold = 100;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrevious();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="relative w-full overflow-hidden py-4" ref={constraintsRef}>
      <div className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 shadow-sm h-8 w-8"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2">
        <Button variant="ghost" size="icon" className="rounded-full bg-white/80 shadow-sm h-8 w-8" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center items-center h-56 sm:h-64">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            // onDragStart={() => setIsDragging(true)}
            onDragStart={() => {}}
            onDragEnd={handleDragEnd}
            className="absolute w-full max-w-xs sm:max-w-sm"
          >
            <div
              className={`w-full aspect-[1.58/1] rounded-2xl p-5 shadow-lg relative overflow-hidden ${cards[currentIndex].color}`}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-white blur-3xl"></div>
              </div>

              <div className="flex flex-col justify-between h-full relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-xs font-medium">{cards[currentIndex].type}</p>
                    <h3 className="text-white font-bold mt-1">Balance</h3>
                    <p className="text-white text-xl font-bold">{cards[currentIndex].balance}</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div>
                  <p className="text-white/80 text-xs mb-1">Número de tarjeta</p>
                  <p className="text-white font-medium tracking-wider">{cards[currentIndex].number}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-white/80 text-xs">
                      Válida hasta: <span className="text-white">{cards[currentIndex].expiry}</span>
                    </p>
                    <div className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-white/80"></div>
                      <div className="h-4 w-4 rounded-full bg-white/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-[#8ACE00]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
