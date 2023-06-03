import React from "react";
import doomLogo from "../../public/doom-logo.png";
import Image from "next/image";
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <section>
      <motion.div 
        initial={{
          x:0,
          opacity: 0,
          scale: 0.2
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1.1
        }}
        transition={{
          type:"spring",
          stiffness: 200,
          duration: 1.5
        }}
        className="flex justify-center mt-20
      ">
        <Image 
          src={doomLogo} 
          alt="Doom Squad Team Logo" 
          className="h-48 w-auto"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HomePage;
