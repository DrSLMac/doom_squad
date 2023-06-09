import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inspiration } from "next/font/google";
import BallIcon from "./BallIcon";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const inspiration = Inspiration({
  subsets: ["latin"],
  weight: ["400"],
});

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState } = useForm<Inputs>();
  const { errors } = formState

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:support@txdoomsquad.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log(formData);
    reset()
  };

  return (
    <div className="h-screen flex flex-col justify-between text-center">
      <div className="text-white flex items-center justify-between px-6 pt-6
            xxs:px-8
            xs:px-10
            minism:px-12
            sm:px-16
            md:px-20
            lg:px-24 lg:pt-8
            ">
        <BallIcon />
        {/* <SocialIcons /> */}
        <a href="/">
          <HomeIcon className="text-white h-10"/>
        </a>
      </div>
      {/* space-y-10 py-6
                xs:space-y-6
                sm:space-y-10 sm:py-8
                md:py-10
                lg:space-y-12 */}
      <div className="flex flex-col items-center space-y-4 -mt-20">
        <h4 className="contactText">
          Want to know more? 
        <br></br>
          Looking for ways to get involved? 
        </h4>
        <div className={inspiration.className}>
          <span className="text-6xl lg:text-7xl">Get in touch!</span>
        </div>

        <div
          className="-z-10
                    text-base space-y-1
                    sm:space-y-2 sm:text-lg
                    md:space-y-4 md:text-xg
                    lg:text-2xl
                "
        >
          <div className="relative z-0 flex items-center space-x-2 md:space-x-5  justify-center">
            <PhoneIcon className="text-navy-blue h-5 md:h-7 md:w-7 animate-pulse" />
            <p>+1 (817) 896-2073</p>
          </div>

          <div
            className="flex items-center justify-center
                        space-x-1
                        md:space-x-5
                    "
          >
            <EnvelopeIcon className="text-navy-blue h-5 md:h-7 md:w-7 animate-pulse" />
            <p>support@txdoomsquad.com</p>
          </div>

          <div className="flex items-center md:space-x-5 space-x-1 justify-center">
            <MapPinIcon className="text-navy-blue h-7 w-7 animate-pulse" />
            <p>Fort Worth, TX</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col
                        text-sm space-y-2 w-[300px] shadow-xl
                        sm:w-[375px]
                        md:w-[450px]
                        lg:w-[600px] lg:text-base
                "
        >
          <div
            className="flex justify-evenly
                        flex-col space-y-2
                        lg:flex-row lg:space-y-0 lg:justify-between
                    "
          >
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput lg:w-[298px]"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput lg:w-[298px]"
              type="email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
          </div>
          <button
            // onClick={() => reset()}
            className="pageButtons justify-center bg-gray-900 text-neon
              font-bold uppercase
              text-lg tracking-[4px] py-3 px-4
              lg:text-2xl lg:tracking-[10px] lg:py-5"
          >
            Submit
          </button>
        </form>
      </div>
      <div className='flex justify-center'>
        <footer className='relative bottom-0'>
          <SocialIcons />
        </footer>
      </div>
    </div>
  );
};

export default Contact;
