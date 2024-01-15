import React from 'react'
import Cards from './Cards'
import Image from 'next/image'
import scrap1 from "@/assets/scrap1.svg";
import cardImage from "@/assets/card-image.svg";

const PaymentCard = () => {

  return (
    <div className='mx-4 md:mx-8 lg:mx-16 '>
      <div className="container mx-auto ">

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 bg-white flex flex-col lg:flex-row justify-center items-center lg:items-stretch">
            <div className="w-full lg:w-3/4 text-left px-10 lg:px-0">
              <div className="text-3xl font-bold my-10 text-center">Add Payment Card</div>
              <div className='mb-8'>
                <div className='mb-1'>Card Holder Name</div>
                <input
                  type="text"
                  name="payment"
                  placeholder="New Payment Cards"
                  // onChange={paymentMethadChange}
                  // value={PaymentMethad}
                  autoComplete="off"
                  className="focus:border focus:border-gray-800 focus:outline-none p-4 ps-2 w-full bg-white rounded-[10px] border-[1px] border-gray-800"
                />
              </div>
              <div className='mb-8'>
                <div className='mb-1'>Card Number</div>
                <input
                  type="text"
                  name="payment"
                  placeholder="345686989654535"
                  // onChange={paymentMethadChange}
                  // value={PaymentMethad}
                  autoComplete="off"
                  className="focus:border focus:border-gray-800 focus:outline-none p-4 ps-2 w-full bg-white rounded-[10px] border-[1px] border-gray-800"
                />
              </div>
              <div className='w-full sm:flex justify-between'>
                <div className='w-full sm:w-[45%] mb-8'>
                  <div className='mb-1'>Expiry Date</div>
                  <input
                    type="text"
                    name="payment"
                    placeholder="MM / YY"
                    // onChange={paymentMethadChange}
                    // value={PaymentMethad}
                    autoComplete="off"
                    className="focus:border focus:border-gray-800 focus:outline-none p-4 ps-2 w-full bg-white rounded-[10px] border-[1px] border-gray-800"
                  />
                </div>
                <div className='w-full sm:w-[45%] mb-8'>
                  <div className='mb-1'>CVC</div>
                  <input
                    type="text"
                    name="payment"
                    placeholder="Security Code"
                    // onChange={paymentMethadChange}
                    // value={PaymentMethad}
                    autoComplete="off"
                    className="focus:border focus:border-gray-800 focus:outline-none p-4 ps-2 w-full bg-white rounded-[10px] border-[1px] border-gray-800"
                  />
                </div>
              </div>
              <div className='w-full my-8'>
                <div className='rounded-lg border bg-[#FFC700] py-4 cursor-pointer mb-6 '>
                  <div className='text-center font-lg text-Black font-bold '>Done</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-16">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-pink-300 md:w-6 md:h-6 md:accent-[#FFC700]"
                />
                <label htmlFor="exampleCheckbox" className="text-black flex items-center mt-1">Save Card</label>
              </div>
            </div>
            
          </div>
          <div className="hidden lg:w-2/5 bg-[#FFC700] lg:flex justify-center items-center">
            <Image src={cardImage} alt="Top Image" />
          </div>
        </div>
        <div className='text-black text-lg sm:text-lg mt-14 font-bold'>Similar Auctions</div>
        <div className="border-b border-black w-full mb-5"></div>
        <div className="flex flex-wrap">
          <Cards scrapImage={scrap1} scrapTitle={"Electric Scrap"} classname={"1/4"} />
          <Cards scrapImage={scrap1} scrapTitle={"Electric Scrap"} classname={"1/4"} />
          <Cards scrapImage={scrap1} scrapTitle={"Electric Scrap"} classname={"1/4"} />
          <Cards scrapImage={scrap1} scrapTitle={"Electric Scrap"} classname={"1/4"} />
        </div>
      </div>
    </div>
  )
}

export default PaymentCard
