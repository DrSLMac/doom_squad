"use client";
import React from "react";
import UnderConstruction from "../components/UnderConstruction";
import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import BallIcon from "../components/BallIcon";
import SocialIcons from "../components/SocialIcons";

export default async function About() {
  const about = await getAbout();
  return (
    <div>
      <div>
        <BallIcon />
        <SocialIcons />
      </div>
      <h3 className="text-white uppercase text-center text-3xl">{about[0].title}</h3>
      <div className="space-y-4">
        <PortableText value={about[0].about} />
      I</div>
      <Image 
        src={about[0].image}
        alt={about[0]._id}
        width={300}
        height={300}
        className="w-auto"
        priority
      />
    </div>
  );
  // return (
  //   <div className='p-12'>
  //       <h1 className='text-white'>This is the About Page</h1>
  //       <UnderConstruction/>
  //   </div>
  // )
}
