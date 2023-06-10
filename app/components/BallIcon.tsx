import React from 'react'
import Image from "next/image";
import ballOnFire from "../../public/ball-on-fire.png";
import { motion } from "framer-motion";

const BallIcon = () => {
  return (
    <motion.div
    initial={{
      x: 800,
      opacity: 0,
      scale: 0.2,
    }}
    animate={{ x: 0, opacity: 1, scale: 1.1 }}
    transition={{ 
      type: 'spring',
      stiffness: 50,
      duration: 1.8
    }}
    className="relative -z-10 drop-shadow-3xl"
  >
    <Image
      src={ballOnFire}
      alt="graphic of basketball with flames"
      className="short:h-12 h-16 w-auto md:h-20 lg:h-24"
      priority
    />
  </motion.div>
  )
}

export default BallIcon