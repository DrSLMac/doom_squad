import React from "react";
import doomLogo from "../../public/doom-logo.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <section>
      <div className="flex justify-center mt-20">
        <Image 
          src={doomLogo} 
          alt="Doom Squad Team Logo" 
          className="h-52 w-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HomePage;
