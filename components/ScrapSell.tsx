import React from 'react';
import Image from 'next/image';
import sellNow from "@/assets/sell-now.png";

const ScrapSell = () => {
    return (
        <div className='mx-4 md:mx-8 lg:mx-16 mt-24 min-h-[185px]'>
            <div className="container mx-auto my-8 relative">
                <div className='flex'>
                    <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0  sm:left-[50px]  md:left-[100px] lg:left-[130px] top-0 sm:top-1/2 transform sm:-translate-y-1/2 text-white text-left">
                        <div className="text-2xl md:text-4xl lg:text-6xl text-black font-bold mb-4">Sell Your Scrap!</div>
                    </div>

                    <div className="absolute right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-[50px] md:right-[100px] lg:right-[144px] bottom-1   sm:bottom-1/2 transform sm:translate-y-1/2 text-white text-right">
                        <button className="bg-black text-white px-6 py-4 text-2xl rounded-xl">Sell Now</button>
                    </div>
                </div>
                <Image src={sellNow} alt="Left Image" className="w-full object-cover object-top ml-2 sm:ml-0  " />

            </div>
        </div>
    );
};

export default ScrapSell;
