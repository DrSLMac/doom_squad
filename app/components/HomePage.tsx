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
    <section className="">
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
            my-24 px-10 p-4
            sm:p-4
            md:my-32
            lg:my-28
            xl:py-4 xl:px-2 2xl:px-2"
        >
          <Image
            src={doomLogo}
            alt="Doom Squad Team Logo"
            // width={300}
            // className="w-[12] h-auto"
            priority
          />
        </motion.div>

        {/* <div className="embla w-[35%]">
          <Carousel carouselPics={carouselPics} options={OPTIONS} />
        </div> */}
      </div>
      <div className="-mt-8 font-semibold text-center drop-shadow-grey
        p-2 text-2xl
      ">
        <h1>Welcome to the 
          <br></br><span className={rubikWet.className}> Doom Sqad!</span>
        </h1>
        <p>We are an elite basketball program serving the Dallas/Fort Worth metroplex.</p>
      </div>
    </section>
  );
};

export default HomePage;
