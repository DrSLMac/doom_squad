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
      setCarouselPics(pics)
    })
  }, [])
  return (
      <Fragment>
        <section className="'snap-start">
          <Header />
          <HomePage carouselPics={carouselPicArr}/>
        </section>
        {/* block page */}

        {/* contact page */}
      </Fragment>
    )
}
