"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { IconButton } from '@mui/material';

type Props = {
  facebook: string,
  twitter: string,
  instagram: string,
};
const SocialIcons = ({facebook, twitter, instagram}: Props) => {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
        scale: 0.1,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="relative -z-10 flex items-center"
    >
      <IconButton href={facebook}>
        <FacebookOutlinedIcon color="white"/>
      </IconButton>
      
      <SocialIcon
        url={instagram}
        fgColor="white"
        bgColor="transparent"
      />
      <SocialIcon
        url={twitter}
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
  );
};

export default SocialIcons;

// "https://www.facebook.com/texasdivasbasketball"
// "https://twitter.com/LSUwbkb"
// "https://www.instagram.com/divasbasketball/?fbclid=IwAR0Yq9rhf63FQOW9AxEwOpqaCT1xJAvjAs-5lUKox_r8WjTCQNqnyDkL2OU"