import React from 'react'
import Link from 'next/link'
import { HomeIcon } from "@heroicons/react/24/solid"

const ReturnHomeButton = () => {
  return (
    <div className='py-8 lg:py-4'>
        <button
            id="basic-button"
            className='pageButtons 
            h-[4rem] px-7 text-lg
            '>
            <Link href='/'>
            <div className='flex items-center'>
                <HomeIcon className="text-white pr-3 w-8"/>
                Return to Home
            </div>
            </Link>
        </button>
    </div>
  )
}

export default ReturnHomeButton