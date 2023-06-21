'use client'
import React from 'react'
import { getCoach } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import PageHeader from '@/app/components/PageHeader';
import SocialIcons from '@/app/components/SocialIcons';

type Props = {
  params: { 
    coach: string,
    returnPage: string
  };
}

export default async function Coach({ params }: Props) {

  const slug = params.coach;
  const coach = await getCoach(slug);
  
  return (
    <div className='h-screen'>
      <PageHeader pageTitle="Meet the Coach" returnPage='/coaches' />

      <div className='flex flex-col items-center py-4'>
        <Image 
          src={coach.image}
          alt={coach.name}
          width={250}
          height={100}
          className="object-cover rounded-lg border border-gray-500"
          priority
        />
        <div className='py-4 text-center'>
          <h1 className='font-bold text-xl'>{coach.name}</h1>
          <h2 className='font-semibold text-lg'>{coach.title}</h2>
        </div>

        <div className='space-y-2 px-8 pb-4
          bg-gradient-to-b from-black from-40% via-neon via-60% to-white bg-clip-text text-transparent
        '>
          <PortableText value={coach.content}/>
        </div>
      </div>
      
      <div className='flex place-content-center'>
      <footer className='bottom-5'>
            <SocialIcons 
              facebook={coach.facebook}
              twitter={coach.twitter}
              instagram={coach.instagram}
            />
        </footer>
      </div>
    </div>
  )
}







// import UnderConstruction from '@/app/components/UnderConstruction'
// import React from 'react'

// const Coach = () => {
//   return (
//     <div>
//       There is a page for each Coach
//       <UnderConstruction/>
//     </div>
//   )
// }

// export default Coach
