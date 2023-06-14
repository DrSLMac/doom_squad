"use client";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import BallIcon from "../components/BallIcon";
import SocialIcons from "../components/SocialIcons";
import Link from "next/link";

export default async function About() {
  const about = await getAbout();
  return (
    <div>
      <div className="text-white flex items-center justify-between 
          shorter:pt-4
            px-8 pt-8
            xs:px-10
            minism:px-12
            sm:px-16
            md:px-20
            lg:px-24 lg:pt-8
            ">
        <BallIcon />
        <a href="/">
          <HomeIcon className="text-white short:h-8 h-10"/>
        </a>
      </div>
      <h3 className="uppercase text-center mt-4 text-3xl">{about[0].title}</h3>
      
      <div className="flex flex-col items-center py-8">
        <div className="flex justify-center minism:px-4 sm:px-2">
          <div className="
            space-y-3
            pb-8
            px-10 md:px-20
            minism:px-0 minism:w-[70%] max-w-[48rem] md:text-base midmd:text-lg
            bg-gradient-to-b from-black from-60% via-neon via-80% to-white bg-clip-text text-transparent
            ">
            <PortableText value={about[0].about} />
          </div>
          <div className="hidden minism:flex animate-pulse">
            <Image 
              src={about[0].image}
              alt={about[0]._id}
              width={200}
              height={200}
              className="h-64 w-auto md:h-72 lg:h-84"
              priority
            />
          </div>
        </div>
        <button className="pageButtons bg-black text-neon
            h-[4rem] px-7 text-lg">
          <Link href='/coaches'>
            Meet the Coaches
          </Link>
        </button>
      </div>
      <div className='flex justify-center py-4'>
        <footer className='relative bottom-5'>
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
}
