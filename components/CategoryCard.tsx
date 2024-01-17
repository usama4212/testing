import React from 'react'
import Image from 'next/image';
import categoryCard1 from "@/assets/category-card-1.png";
import clock from "@/assets/clock.svg";
import CountdownTimer from './Auction/CountdownTimer';

const CategoryCard = ({ view, index, description , expTime }: any) => {
    return (
        <div key={index} className={`bg-white rounded-[20px] flex ${view === 'list' ? 'flex-row' : 'flex-col'} w-full border border-gray-400 mb-3`}>
            <div className={`${view === 'list' ? '' : 'w-full'} `}>
                <div className=''><Image
                    className="object-cover w-full rounded-t-[20px]"
                    src={categoryCard1}
                    alt="Card Image"
                />
                </div>
            </div>
            <div className={`${view === 'list' ? 'w-full mt-2' : 'w-full p-4'} `}>
                <div className='flex justify-center mb-2 mx-3'>
                    <div className="w-full text-lg font-extrabold">Tablets</div>
                    <div className="w-full text-md font-bold flex justify-end">Rayal: 5,000</div>
                </div>
                <div className="text-gray-600 mb-1 mx-3">{description}</div>
                <div className='flex items-center justify-between mb-2 mx-3 mt-2'>
                    <div className="flex w-3/4">
                        <Image className="w-[20px]" src={clock} alt="Card Image" />
                        <div className='text-[#128c37] ml-2 flex items-center'><CountdownTimer initialTime={expTime}/></div>
                    </div>
                    <div className='w-1/4 text-md font-bold flex justify-end'>
                        <button className="text-black text-lg font-extrabold w-[86px] py-1 rounded-[5px] bg-yellow-400">Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
