import Image from 'next/image'
import React from 'react'
import clock from "@/assets/clock-white.svg";
import blackClock from "@/assets/black-clock.svg";

const AuctionEndCard = ({ image, scrapImage, text }: any) => {
    return (
        <div className="mx-5 sm:mx-0 flex-1 bg-cover relative h-[150px] rounded-3xl bg-white" style={{ backgroundImage: `url(${image.src})`, borderRadius: "24px" }}>
            <div className="bg-opacity-75 rounded-md overflow-hidden">
                <div className="flex">
                    <div className="p-4 flex-1 space-y-0 sm:space-y-10 mt-0 sm:mt-3">
                        <div className={`text-xl font-semibold mb-2 ${text !== "Tech Gadgets" ? 'text-black' : 'text-white'}`}>{text}</div>
                        <div className={` w-[150px]  text-base font-normal font-Poppins leading-normal flex rounded-md ${text !== "Tech Gadgets" ? 'bg-black' : 'bg-white'} p-2`}>
                            <Image className="w-[20px]" src={text !== "Tech Gadgets" ? clock : blackClock} alt="Card Image" />
                            <div className={`${text !== "Tech Gadgets" ? 'text-white' : 'text-black'} ml-1`}>04h 27m 40s</div>
                        </div>
                    </div>
                    <div>
                        <Image alt="sign in " src={scrapImage} className="object-cover w-[245px] pr-2 mt-3 sm:mt-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctionEndCard
