declare module "embla-carousel-react" {
    export type EmblaCarouselType = any
    export type EmblaEventType = any
    export type EmblaPluginType = any
    export type EmblaOptionsType = any
  
    export type UseEmblaCarouselType = [(instance: HTMLElement | null) => void, EmblaCarouselType | undefined]
  
    export default function useEmblaCarousel(
      options?: EmblaOptionsType,
      plugins?: EmblaPluginType[],
    ): UseEmblaCarouselType
  }
  