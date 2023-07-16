"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

type Props = {
  facebook: string,
  twitter: string,
  instagram: string,
  icon: string
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
        <FacebookIcon sx={{ stroke: 'white', strokeWidth: 1 ,  color: "transparent", fontSize: 36 }} />
      </IconButton>

      {/* <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> */}

      {/* <FontAwesomeIcon  icon={icon({name: 'facebook', style: 'brands'})}/> */}

      <IconButton href={facebook}>
        <InstagramIcon sx={{ color: "white", fontSize: 36 }} />
      </IconButton>
      
      {/* <SocialIcon
        url={instagram}
        fgColor="white"
        bgColor="transparent"
      /> */}
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