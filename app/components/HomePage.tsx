"use client";
import React, { useState } from "react";
import doomLogo from "../../public/doom-logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { CarouselPics } from "@/types/CarouselPics";
import { EmblaOptionsType } from "embla-carousel-react";
import { Rubik_Wet_Paint } from "next/font/google";

const rubikWet = Rubik_Wet_Paint({ 
  subsets: ['latin'],
  weight: '400',
})

type Props = {
  carouselPics: CarouselPics[] | undefined;
};

const OPTIONS: EmblaOptionsType = {};

const HomePage = ({ carouselPics }: Props) => {
  return (
    <section id="/" className="h-screen">
      <div className="relative flex justify-around items-center -z-20">
        {/* <div className="embla w-[35%]">
          <Carousel carouselPics={carouselPics} options={OPTIONS} />
        </div> */}

        <motion.div
          initial={{
            x: 0,
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 1.5,
          }}
          className="flex items-center rounded-lg drop-shadow-3xl
            short:my-8
            my-24 px-16 py-4
            xs:my-28
            minism:py-10
            sm:p-4
            md:my-32
            lg:my-28
            xl:py-4 xl:px-2 2xl:px-2"
        >
          <Image
            src={doomLogo}
            alt="Doom Squad Team Logo"
            // width={300}
            className="max-w-16"
            priority
          />
        </motion.div>

        {/* <div className="embla w-[35%]">
          <Carousel carouselPics={carouselPics} options={OPTIONS} />
        </div> */}
      </div>
      <motion.div 
        initial={{
          x: 0,
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 1.5,
        }}
        className="relative -z-30 font-semibold text-center drop-shadow-grey 
        short:mt-0 short:space-y-3
        p-2 text-xl -mt-8
        sm:text-3xl sm:-mt-6"
      >
        <h1>Welcome to the 
          <br className="sm:hidden"></br><span className={rubikWet.className}> Doom Squad!</span>
        </h1>
        <p>We are an elite basketball<span> </span>
        <br></br>
           program serving the
        <br></br>  
          Dallas/Fort Worth metroplex.</p>
      </motion.div>
    </section>
  );
};

export default HomePage;
