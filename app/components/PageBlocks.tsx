import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import divas from '../public/pic1.jpeg'
// import breakAway from '../public/pic23.jpeg'
// import bball from '../public/bball.png'
// import doomSquad from '../public/doomsquad.jpeg'

const PageBlocks = () => {
  return (
    <div className='h-screen grid md:grid-cols-2 grid-rows-3'>
        <div className='hidden md:block relative border border-gray-900'>
            {/* <Image 
                src={doomSquad}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 object-cover shadow-2xl'
            /> */}
        </div>

        <div className='flex flex-col overflow-y-scroll border bg-gray-100 border-gray-900 justify-evenly
        p-4 xs:p-6      
        '>
            <div className='text-center text-lg font-bold
                xs:text-xl
                md:mt-4
            '>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
            </div>
            <div className='mx-4 text-sm line-clamp-4 leading-4
                xxs:leading-5
                xs:leading-6 xs:line-clamp-6
                sm:mx-5 sm:text-md 
                lg:line-clamp-none
            '>
                <p className='indent-6'>Based out of Allen, TX, Divas Basketball is dedicated to the growth and development of the overall athlete. Divas Basketball is here to promote women&apos;s basketball from kindergarten all the way to adulthood. </p>
                <p className='sm:block indent-6 sm:space-y-2'>We offer skill sessions to match every level out of Allen, Texas, so whether your child wants to learn basic skills, or wants to compete for college scholarships, we will provide an excellent learning environment, clean gym space, and plenty of great coaching to achieve those goals.</p>

            </div>
            <div className='flex w-[100%] justify-around items-center
            '>
                <button
                    id="basic-button"
                    className='pageButtons
                    h-[2rem] px-6 text-sm
                    '>
                    <Link href='/about'>
                        Find Out More
                    </Link>
                </button>
                <div>
                    {/* <Image 
                        src={bball}
                        alt='Basketball'
                        className='rounded-md w-auto h-12 hover:animate-bounce'
                    /> */}
                </div>
            </div>
        </div>
        
        
        <div className='flex flex-col overflow-y-scroll border bg-gray-100 border-gray-900 justify-evenly
        p-4 xs:p-6
        '>
            <div className='text-center text-lg font-bold
                xs:text-xl
            '>
                <h1>
                    Build the Athlete
                </h1>
                <h1>Build the Person</h1>
            </div>
            <div className='mx-4 text-sm line-clamp-4 leading-4
                xxs:leading-5
                xs:leading-6 xs:line-clamp-6
                sm:mx-5 sm:text-md 
                lg:line-clamp-none
            '>
                <p className='indent-6'>The benefits of girls participating in team sports have been well documented. Girls build confidence as they build leadership. They learn to challenge themselves to grow in adversity and learn the power of effective teams.</p>
                <p className='sm:block indent-6 sm:space-y-2'>As girls build their basketball skills, they are helping to level the playing field at all levels of life to help them reach their full potential. Find out more about the Divas basketball teams...</p>

            </div>
            <div className='flex w-[100%] justify-around items-center
            '>
                <button
                    id="basic-button"
                    className='pageButtons
                    h-[2rem] px-6 text-sm
                    '>
                    <Link href='/about'>
                        Find Out More
                    </Link>
                </button>
                <div>
                    {/* <Image 
                        src={bball}
                        alt='Basketball'
                        className='rounded-md w-auto h-12 hover:animate-bounce'
                    /> */}
                </div>
            </div>
        </div>
        
        <div className='hidden md:block relative bg-navy-blue bg-opacity-60 border border-navy-blue'>
            {/* <Image 
                src={divas}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 object-cover'
            /> */}
        </div>
        
        <div className='hidden md:block relative bg-deep-red bg-opacity-60 border border-navy-blue'>
            {/* <Image 
                src={breakAway}
                alt='Girls team photo op'
                fill
                sizes='100vh'
                className='p-4 object-cover'
            /> */}
        </div>
        
        <div className='flex flex-col overflow-y-scroll border bg-gray-100 border-gray-900 justify-evenly
        p-4 xs:p-6     
        '>
            <div className='text-center text-lg font-bold
                xs:text-xl
            '>
                <h1>
                    Basketball Skills Prepare
                </h1>
                <h1>Athletes for Life</h1>
            </div>
            <div className='mx-4 text-sm line-clamp-4 leading-4
                xxs:leading-5
                xs:leading-6 xs:line-clamp-6
                sm:mx-5 sm:text-md 
                lg:line-clamp-none
            '>
                <p className='indent-6'>Based out of Allen, TX, Divas Basketball is dedicated to the growth and development of the overall athlete. Divas Basketball is here to promote women&apos;s basketball from kindergarten all the way to adulthood. </p>
                <p className='sm:block indent-6 sm:space-y-2'>We offer skill sessions to match every level out of Allen, Texas, so whether your child wants to learn basic skills, or wants to compete for college scholarships, we will provide an excellent learning environment, clean gym space, and plenty of great coaching to achieve those goals.</p>

            </div>
            <div className='flex w-[100%] justify-around items-center
            '>
                <button
                    id="basic-button"
                    className='pageButtons
                    h-[2rem] px-6 text-sm
                    '>
                    <Link href='/about'>
                        Find Out More
                    </Link>
                </button>
                <div>
                    {/* <Image 
                        src={bball}
                        alt='Basketball'
                        className='rounded-md w-auto h-12 hover:animate-bounce'
                    /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageBlocks