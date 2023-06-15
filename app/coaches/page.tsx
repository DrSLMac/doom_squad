"use client";
import React from "react";
import { getCoaches } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import BallIcon from "../components/BallIcon";
import { HomeIcon } from "@heroicons/react/24/solid";

export default async function Coaches() {
  const coaches = await getCoaches();
  const sortedCoaches = coaches.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div>
      <div
        className="text-white flex items-center justify-between 
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
          <HomeIcon className="text-white short:h-8 h-10" />
        </a>
      </div>
      <h3 className="uppercase text-center mt-4 text-3xl">Coaching Staff</h3>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {sortedCoaches.map((coach) => (
          <Link
            href={`/coaches/${coach.slug}`}
            key={coach._id}
            className="flex flex-col items-center border-2 border-gray-500 w-96 p-1 mx-auto rounded-lg mt-4 hover:scale-105 hover:border-neon transition"
          >
            <Image
              src={coach.image}
              alt={coach.name}
              width={150}
              height={150}
              className="object-cover rounded-lg border border-gray-500"
              priority
            />
            <h1>{coach.name}</h1>
            <h2>{coach.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

// import React from 'react'
// import UnderConstruction from '../components/UnderConstruction'

// const Coaches = () => {
//   return (
//     <div className='p-12'>
//         <h1 className='text-white'>This is the Coaches Page</h1>
//         <UnderConstruction />
//     </div>
//   )
// }

// export default Coaches
