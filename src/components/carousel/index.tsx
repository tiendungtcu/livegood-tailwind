// import the hook and options type
import React, { useRef } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import Autoplay from 'embla-carousel-autoplay';

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;
const autoplayOptions = {
  delay: 4000,

  rootNode: (emblaRoot:any) => emblaRoot.parentElement,
}
export const Carousel = ({ children, ...options }: Props) => {
  const autoplay = useRef(
    Autoplay({delay: 1000, active: true, rootNode: (emblaRoot:any) => emblaRoot.parentElement, playOnInit: true} as any)
  );
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef] = useEmblaCarousel(options, [Autoplay() as any])

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="overflow-hidden" ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex">{children}</div>
    </div>
  );
};