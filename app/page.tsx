'use client'
import { Fragment, useEffect, useState } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { CarouselPics } from "@/types/CarouselPics"
import { getCarouselPics } from "@/sanity/sanity-utils"


export default function Home() {
  const [carouselPicArr, setCarouselPics] = useState<CarouselPics[]>();

  useEffect(() => {
    getCarouselPics().then(pics => {
      // console.log("pics: ", pics)
      setCarouselPics(pics)
    })
  }, [])
// console.log("carouselPicArr: ", carouselPicArr)
  return (
      <Fragment>
        <Header />
        <HomePage carouselPics={carouselPicArr}/>
        {/* block page */}

        {/* contact page */}
      </Fragment>
    )
}
