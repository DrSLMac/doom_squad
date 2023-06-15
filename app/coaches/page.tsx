"use client";
import React from "react";
import { getCoaches } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import BallIcon from "../components/BallIcon";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";

export default async function Coaches() {
  const coaches = await getCoaches();
  const sortedCoaches = coaches.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div>
      <div
        className="flex items-center justify-between 
          shorter:pt-4
            px-8 pt-8
            xs:px-10
            minism:px-12
            sm:px-16
            md:px-20
            lg:px-24 lg:pt-8
      "
      >
        <BallIcon />
        <a href="/">
          <HomeIcon className="text-white short:h-8 h-10" />
        </a>
      </div>
      <h3 className="text-white uppercase text-center mt-4 text-3xl">Coaching Staff</h3>
      <Link href="/about" className="flex text-xs px-4 items-center py-2 justify-center">
        <ArrowUturnLeftIcon className="text-white h-4 px-2" /> 
        <p className="text-white">Return to Previous Page</p>
      </Link>

      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pb-10">
        {sortedCoaches.map((coach) => (
          <Link
            href={`/coaches/${coach.slug}`}
            key={coach._id}
            className="flex flex-col items-center border-2 bg-gray-300 bg-opacity-40 border-gray-500 w-72 p-1 mx-auto rounded-lg mt-4 hover:scale-105 hover:border-neon transition"
          >
            <Image
              src={coach.image}
              alt={coach.name}
              width={250}
              height={150}
              className="object-cover rounded-lg border border-gray-500 drop-shadow-lg"
              priority
            />
            <div className="flex flex-col items-center">
              <h1 className="text-base font-medium">{coach.name}</h1>
              <h2 className="text-sm">{coach.title}</h2>
            </div>
          </Link>
        ))}
      L</div>
      <Footer />
    </div>
  );
}
