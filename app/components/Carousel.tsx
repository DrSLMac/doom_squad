"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CarouselPics } from "@/types/CarouselPics";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

// type Props = {
//     id: string,
//     image: string,
//     alt: string,
//   }

type Props = {
  carouselPics: CarouselPics[] | undefined;
  options?: EmblaOptionsType
};
//  id, image, alt
const Carousel = ({ carouselPics, options }: Props) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="hidden md:flex embla__container">

          {carouselPics
            ? carouselPics.map((pic) => {
                const { _id, image, alt } = pic;
                return (
                  <div key={_id} className="embla__slide">
                    <Image
                      src={image}
                      alt={alt}
                      height={250}
                      width={300}
                      className="embla__slide__img rounded-md border border-white shadow-4xl"
                      priority
                    />
                  </div>
                );
              })
            : null}

        </div>
      </div>
    </>
  );
};

export default Carousel;

// const [current, setCurrent] = useState(0);
//   const initialCarouselState = {
//     offset: 0,
//     desired: 0,
//     active: 0,
//   };

// useEffect(() => {
//     if (carouselPics) {
//       const next = (current + 1) % carouselPics.length;
//       const id = setTimeout(() => setCurrent(next), 5000);
//       return () => clearTimeout(id);
//     }
//   }, [current]);
