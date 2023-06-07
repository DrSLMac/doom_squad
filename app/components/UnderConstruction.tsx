import React from 'react'
import Image from 'next/image'
import construction from '../../public/under_construction.png'
import ReturnHomeButton from './ReturnHomeButton'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col items-center pt-32 text-center
        text-lg xs:text-xl sm:text-3xl midmd:text-4xl xl:text-5xl
    '>
      <div className='pb-4'>
        <h1>Please Be Patient</h1>
        <h2>This is a work in progress 🔨</h2>
      </div>
        <Image 
          src={construction}
          alt='under construction'
          className='max-h-[55vh] w-auto drop-shadow-2xl'
          priority
        />
        <ReturnHomeButton/>
    </div>
  )
}

export default UnderConstruction