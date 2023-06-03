import Image from 'next/image'
import React from 'react'
import ballOnFire from '../../public/ball-on-fire.png'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  return (
    <div className='text-white flex justify-between px-6 py-6
        xxs:px-8
        xs:px-10
        minism:px-12
        sm:px-16
        md:px-20
        lg:px-24 lg:py-8
        '>
        <motion.div
            initial={{
                x: 1000,
                opacity: 0,
                scale: 0.2,
            }}
            animate={{ x: 0, opacity: 1, scale: 1.1 }}
            transition={{ duration: 1.5 }}
        >
            <Image 
                src={ballOnFire} 
                alt='graphic of basketball with flames'
                className='h-16 w-auto md:h-20 lg:h-24'
                priority
            />
        </motion.div>
        <motion.div
             initial={{
                x: 500,
                opacity: 0,
                scale: 0.2,
            }}
            animate={{ x: 0, opacity: 1, scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className='flex items-start'
        >
            <SocialIcon 
                url="https://www.facebook.com/texasdivasbasketball" 
                fgColor="white"
                bgColor="transparent"
            />
            <SocialIcon 
                url='https://www.instagram.com/divasbasketball/?fbclid=IwAR0Yq9rhf63FQOW9AxEwOpqaCT1xJAvjAs-5lUKox_r8WjTCQNqnyDkL2OU'
                fgColor="white"
                bgColor="transparent"
            />
            <SocialIcon 
                url='https://twitter.com/LSUwbkb'
                fgColor="white"
                bgColor="transparent"
            />
            <SocialIcon 
                network="email"
                fgColor="white"
                bgColor="transparent"
                url="/contact"
                
            />
        </motion.div>
    </div>
  )
}

export default Header