"use client"
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "@/assets/slider1.svg";
import slider2 from "@/assets/slider2.svg";
import Image from 'next/image';

const ImageSlider = () => {

    // const [isPaused, setIsPaused] = useState(false);
    // const sliderRef = useRef<any>();
    // const images = [slider1, slider2, slider1, slider2, slider1]

    // useEffect(() => {
    //     const slider = sliderRef.current;

    //     const handleMouseEnter = () => {
    //         setIsPaused(true);
    //         slider.slickPause();
    //     };

    //     const handleMouseLeave = () => {
    //         setIsPaused(false);
    //         slider.slickPlay();
    //     };

    //     slider.innerSlider.list.addEventListener('mouseenter', handleMouseEnter);
    //     slider.innerSlider.list.addEventListener('mouseleave', handleMouseLeave);

    //     return () => {
    //         slider.innerSlider.list.removeEventListener('mouseenter', handleMouseEnter);
    //         slider.innerSlider.list.removeEventListener('mouseleave', handleMouseLeave);
    //     };
    // }, []);


    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 4000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: !isPaused,
    //     autoplaySpeed: 3000,
    //     arrows: false,


    // };

    return (
        // <div className='w-full'>
        //     <Slider ref={sliderRef} {...settings}>
        //         {images.map((imageUrl, index) => (
        //             <div key={index}>
        //                 <Image className='mx-auto' src={slider1} alt={`Slide ${index + 1}`} />
        //             </div>
        //         ))}
        //     </Slider>
        // </div>
        <div className='flex items-center max-w-7xl mx-auto justify-center'>
        <Image src={slider2} alt='image' className='w-[1505px]' />
      </div>
    )
}

export default ImageSlider
