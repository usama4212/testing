import Image from 'next/image'
import React from 'react'
import arrow from "@/assets/arrow.svg";
import Cards from './Cards';
import scrap1 from "@/assets/scrap1.svg";
import scrap2 from "@/assets/scrap2.png";
import scrap3 from "@/assets/scrap3.png";
import scrap4 from "@/assets/scrap4.png";
import scrap5 from "@/assets/scrap5.png";
import scrap6 from "@/assets/scrap6.png";
import scrap7 from "@/assets/scrap7.png";
import scrap8 from "@/assets/scrap8.png";
import scrap9 from "@/assets/scrap9.png";
import scrap10 from "@/assets/scrap10.png";
import scrap11 from "@/assets/scrap11.png";
import scrap12 from "@/assets/scrap12.png";
import scrap13 from "@/assets/scrap13.png";
import scrap14 from "@/assets/scrap14.png";
import scrap15 from "@/assets/scrap15.png";
import scrap16 from "@/assets/scrap16.png";


const CardsCollection = ({ title }: any) => {

    return (
        <div>
            <div className='mx-4 md:mx-8 lg:mx-16 mt-10'>
                <div className="container mx-auto my-8">
                    <div className='flex relative'>
                        <div className='text-black text-lg sm:text-2xl font-extrabold mb-8 mt-12'>
                            {title}
                        </div>
                        <div className="text-black text-lg sm:text-2xl font-extrabold flex justify-center mb-8 mt-12 float-right absolute right-0 cursor-pointer">
                            <div className='text-black flex items-center'>View More</div>
                            <Image className="w-[24px] sm:w-[30px] ml-2" src={arrow} alt="Card Image" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        {title == "Featured Auctions" &&
                            <>
                                <Cards scrapImage={scrap1} scrapTitle={"Electric Scrap"} />
                                <Cards scrapImage={scrap2} scrapTitle={"Motor Scrap"} />
                                <Cards scrapImage={scrap3} scrapTitle={"Nuts Scrap"} />
                                <Cards scrapImage={scrap4} scrapTitle={"Paper scrap"} />
                            </>
                        }
                        {title == "Electronics Auction" &&
                            <>
                                <Cards scrapImage={scrap5} scrapTitle={"Owen Scrap"} />
                                <Cards scrapImage={scrap6} scrapTitle={"Geezer Scrap"} />
                                <Cards scrapImage={scrap7} scrapTitle={"Machine Scrap"} />
                                <Cards scrapImage={scrap8} scrapTitle={"Iron scrap"} />
                            </>
                        }
                        {title == "Baby Products Auction" &&
                            <>
                                <Cards scrapImage={scrap9} scrapTitle={"Feeder Scrap"} />
                                <Cards scrapImage={scrap10} scrapTitle={"Toys Scrap"} />
                                <Cards scrapImage={scrap11} scrapTitle={"Blocks Scrap"} />
                                <Cards scrapImage={scrap12} scrapTitle={"Cars scrap"} />
                            </>
                        }
                        {title == "Clothes Auction" &&
                            <>
                                <Cards scrapImage={scrap13} scrapTitle={"Shirt Scrap"} />
                                <Cards scrapImage={scrap14} scrapTitle={"Pents Scrap"} />
                                <Cards scrapImage={scrap15} scrapTitle={"Two Piece Scrap"} />
                                <Cards scrapImage={scrap16} scrapTitle={"Watch scrap"} />
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsCollection;
