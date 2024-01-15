import Image from 'next/image'
import React from 'react'
import clock from "@/assets/clock.svg";

const Cards = ({scrapImage, scrapTitle, classname} : any) => {
    return (
        <>
                <div className={`w-full sm:w-full md:w-1/2 lg:w-${classname} px-1 mb-4`}>
                    <div className="bg-white p-2 rounded-3xl shadow-md flex flex-col items-center cursor-pointer transition-transform duration-300 hover:shadow-gray-600">
                        <Image className="w-full object-cover mb-4 rounded-3xl " src={scrapImage} alt="Card Image" />
                        <div className='w-full grid grid-cols-2 px-4'>
                            <div className="text-stone-900 text-lg font-extrabold">{scrapTitle}</div>
                            <div className="text-black text-lg font-extrabold flex justify-end">Rayal: 5,000</div>
                        </div>
                        
                        <div className='w-full grid grid-cols-2 px-4 mt-5'>
                            <div className="text-black text-base font-normal font-Poppins leading-normal flex ">
                                <Image className="w-[20px]  " src={clock} alt="Card Image" />
                                <div className='text-[#128c37] ml-1 flex items-center'>04h 27m 40s</div>
                            </div>
                            <div className='px-0.5 items-center gap-2.5  flex justify-end'>
                                <button className=" text-black text-xl font-extrabold w-[86px] py-1  rounded-[5px] bg-yellow-400">Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Cards
