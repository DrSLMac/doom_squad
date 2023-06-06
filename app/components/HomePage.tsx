"use client";
import React, { useState } from "react";
import doomLogo from "../../public/doom-logo.png";
import Image from "next/image";
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
    <section>
      <div className="flex justify-around">
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
            className="h-[20rem] w-auto -z-40"
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
