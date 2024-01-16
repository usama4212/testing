import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow.svg";
import cardPic from "@/assets/laptop.jpeg";


import Card from "./UI/Card";

const CardsCollection = ({ title }: any) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto my-">
          <div className="flex relative">
            <div className="text-black text-lg sm:text-[22px] font-extrabold ml-1 mt-12">
              {title}
            </div>
            <div className="text-black text-lg sm:text-2xl font-extrabold flex justify-center mb-8 mt-12 float-right absolute right-0 cursor-pointer">
              <div className="text-black flex items-center text-lg">View More</div>
              <Image
                className="w-[18px] sm:w-[24px] ml-1 mr-2"
                src={arrow}
                alt="Card Image"
              />
            </div>
          </div>
          <div className=" flex flex-wrap  ">
            <>

              <Card cardImage={cardPic}
                scrapTitle={"IPhone 15 Pro Max 256GB"} />
              <Card cardImage={cardPic}
                scrapTitle={"Dell Latitude 5480 Dual Core"} />
              <Card cardImage={cardPic}
                scrapTitle={"Toyota Hilux 2018"} />
              <Card cardImage={cardPic}
                scrapTitle={"Samsun Galaxy S22 Ultra"} />

            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCollection;
