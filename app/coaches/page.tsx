"use client";
import React from "react";
import { getCoaches } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
// import BallIcon from "../components/BallIcon";
// import { HomeIcon } from "@heroicons/react/24/solid";
// import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

export default async function Coaches() {
  const coaches = await getCoaches();
  const sortedCoaches = coaches.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div className="h-full">
      <PageHeader pageTitle="Coaching Staff" returnPage="/about" />

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
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
}
