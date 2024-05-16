'use client'

import React, {useState} from 'react'
import { LuArrowLeft,LuArrowRight } from "react-icons/lu";
import { CldImage } from 'next-cloudinary';

function Hero() {

  const slides = [
    {
      id:1,
      publicid:'beach_qwvkqx'
    },
    {
      id:2,
      publicid:'https://t4.ftcdn.net/jpg/03/49/42/19/240_F_349421977_u2x10hyLEZV1o8ecCNs61JAKBOf7r2ob.jpg  '
    },
    {
      id:3,
      publicid:'https://t4.ftcdn.net/jpg/06/34/40/91/240_F_634409179_dY33pQYKGG1glMt7IOE47kzDf7nj1iCe.jpg'
    },
    {
      id:4,
      publicid:'https://t4.ftcdn.net/jpg/04/26/10/43/240_F_426104311_2Ptfv8lBJ5OmtDjoMFVUiGq1mY236q0z.jpg'
    },
    {
      id:5,
      publicid:'https://t3.ftcdn.net/jpg/05/47/69/58/240_F_547695839_IujiLmCh7AgbYd2Eyk5hgQcCYftTqQxV.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide=()=>{
    const isfirstSlide = currentIndex===0;
    const newIndex = isfirstSlide ? slides.length-1:currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide=()=>{
    const islastSlide = currentIndex === slides.length-1
    const newIndex = islastSlide? 0 :slides.length+1;
  }
  return (
    <div className='max-w-[1400px] w-full m-auto h-[450px] py-11 px-1   group '>
      
      <div  className='w-full h-full rounded-2xl bg-center bg-cover duration-500 object-contain'>
      <CldImage
                 width="100"
                 height="100"
                 src={slides[currentIndex].publicid}
                 sizes="100vw"
                 alt="Description of my image"
           />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '  
           onClick={prevSlide}><LuArrowLeft /></div>
      <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ' 
           onClick={nextSlide}><LuArrowRight /></div>

       

    </div>
  )
}
    
export default Hero