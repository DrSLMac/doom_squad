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
      <div className="relative z-99">
        <MobileMenu />
      </div>
      <div className="relative flex justify-around -z-10">
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
          className="flex mt-20 px-2"
        >
          <Image
            src={doomLogo}
            alt="Doom Squad Team Logo"
            className="2xl:h-[20rem] w-auto"
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
