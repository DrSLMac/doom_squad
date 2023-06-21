import Image from "next/image";
import React from "react";
import ballOnFire from "../../public/ball-on-fire.png";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";
import BallIcon from "./BallIcon";

const Header = () => {
  return (
    <div>
      <div
        className="text-white flex justify-between px-6 pt-6
            xxs:px-8
            xs:px-10
            minism:px-12
            sm:px-16
            md:px-20
            lg:px-24 lg:pt-8
            "
      >
        <BallIcon />
        <SocialIcons facebook="" twitter="" instagram=""/>
      </div>

      <MobileMenu />
      <NavBar />
      
    </div>
  );
};

export default Header;
