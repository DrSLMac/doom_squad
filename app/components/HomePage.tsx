"use client";
import React, { useState } from "react";
import doomLogo from "../../public/doom-logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { CarouselPics } from "@/types/CarouselPics";
import { EmblaOptionsType } from "embla-carousel-react";

type Props = {
  carouselPics: CarouselPics[] | undefined;
};

const OPTIONS: EmblaOptionsType = {};

const HomePage = ({ carouselPics }: Props) => {
  return (
    <section className="relative">
      <div className="relative z-99 mt-6">
        <MobileMenu />
      </div>
      <div className="relative flex justify-around items-center -z-10">
        <div className="embla w-[35%]">
          <Carousel carouselPics={carouselPics} options={OPTIONS} />
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
          className="border border-slate-600 rounded-lg shadow-4xl 
            mt-48 p-2
            sm:mt-40 sm:p-4
            midmd:-mt-48 midmd:p-1
            xl:py-4 xl:px-2 2xl:px-2"
        >
          <Image
            src={doomLogo}
            alt="Doom Squad Team Logo"
            width={2000}
            // className="md:w-auto md:h-[10]"
            priority
          />
        </motion.div>

        <div className="embla w-[35%]">
          <Carousel carouselPics={carouselPics} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
