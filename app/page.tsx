'use client'
import { useEffect, useState } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { CarouselPics } from "@/types/CarouselPics"
import { getCarouselPics } from "@/sanity/sanity-utils"
import PageBlocks from "./components/PageBlocks"
import Contact from "./components/Contact"
import Head from "next/head"


export default function Home() {
  const [carouselPicArr, setCarouselPics] = useState<CarouselPics[]>();

  useEffect(() => {
    getCarouselPics().then(pics => {
      setCarouselPics(pics)
    })
  }, [])

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">

      <Head>
        <title>Doom Squad Basketball</title>
        <meta name="description" content="Doom Squad Basketball" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id='/' className='snap-start'>
        <Header />
      </header>

      <section>
        <HomePage carouselPics={carouselPicArr}/>
      </section>

      <section id='about' className='snap-center'>
        <PageBlocks />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>  
  )
}
