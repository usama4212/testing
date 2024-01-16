import React, { useState } from "react";
import Image from "next/image";
import login from "@/assets/login.svg";
import scrap1 from "@/assets/scrap1.svg";
import creditCard from "@/assets/credit-card.svg";
import apple from "@/assets/apple.svg";
import google from "@/assets/google.svg";
import CardsCollection from "./CardsCollection";

const Payment = ({ setIsPaymentCard }: any) => {
  const paymentCardChange = () => {
    setIsPaymentCard(true);
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-16 ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 bg-white flex flex-col lg:flex-row justify-center items-center lg:items-stretch">
            <div className="w-full lg:w-3/4 text-center lg:text-left px-10 lg:px-0">
              <div className="text-3xl font-bold my-10 text-center">
                Payment Method
              </div>
              <div
                onClick={paymentCardChange}
                className="rounded-lg border border-gray-400 hover:border-[#E9E9E9] flex  py-4 cursor-pointer mb-6 hover:bg-[#E9E9E9] transition-all duration-700"
              >
                <Image src={creditCard} alt="apple" className="mx-5" />
                <div className=" font-medium mt-1 text-gray-500">
                  New Payment Card
                </div>
              </div>
              <div className="border-b-2 border-gray-300 w-full my-6"></div>
              <div className="rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-6 hover:bg-[#fcc700] transition-all duration-700">
                <div>
                  <Image src={apple} alt="apple" />
                </div>
                <div className="ml-2 font-bold">Apple Pay</div>
              </div>
              <div className="rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-6 hover:bg-[#fcc700] transition-all duration-700">
                <div>
                  <Image src={google} alt="apple" />
                </div>
                <div className="ml-2 font-bold">Google Pay</div>
              </div>
              <div className="rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-6 hover:bg-[#fcc700] transition-all duration-700">
                <div>
                  <Image src={google} alt="apple" />
                </div>
                <div className="ml-2 font-bold">Tebby Pay</div>
              </div>
              <div className="rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-20 hover:bg-[#fcc700] transition-all duration-700">
                <div>
                  <Image src={google} alt="apple" />
                </div>
                <div className="ml-2 font-bold">Tamara Pay</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:w-2/5 bg-[#FFC700] lg:flex justify-center items-center">
            <Image src={login} alt="Top Image" />
          </div>
        </div>
        {/* <div className="text-black text-lg sm:text-lg mt-14 font-bold">
          Similar Auctions
        </div>
        <div className="border-b border-black w-full mb-5"></div> */}
        {/* <div className="flex flex-wrap">
          <Cards
            scrapImage={scrap1}
            scrapTitle={"Electric Scrap"}
            classname={"1/4"}
          />
          <Cards
            scrapImage={scrap1}
            scrapTitle={"Electric Scrap"}
            classname={"1/4"}
          />
          <Cards
            scrapImage={scrap1}
            scrapTitle={"Electric Scrap"}
            classname={"1/4"}
          />
          <Cards
            scrapImage={scrap1}
            scrapTitle={"Electric Scrap"}
            classname={"1/4"}
          />
        </div> */}
        <CardsCollection title="Similar Auctions" />
      </div>
    </div>
  );
};

export default Payment;
