import Image from "next/image";
import React from "react";
import arrow from "@/assets/arrow.svg";
import Cards from "./Cards";
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
      <div className="">
        <div className="container mx-auto my-8">
          <div className="flex relative">
            <div className="text-black text-lg sm:text-2xl font-extrabold mb-8 mt-12">
              {title}
            </div>
            <div className="text-black text-lg sm:text-2xl font-extrabold flex justify-center mb-8 mt-12 float-right absolute right-0 cursor-pointer">
              <div className="text-black flex items-center">View More</div>
              <Image
                className="w-[24px] sm:w-[30px] ml-2"
                src={arrow}
                alt="Card Image"
              />
            </div>
          </div>
          <div className="flex flex-wrap">
           
              <>
                <Cards
                  scrapImage={scrap1}
                  scrapTitle={"Electric Scrap"}
                  classname={"1/4"}
                />
                <Cards
                  scrapImage={scrap2}
                  scrapTitle={"Motor Scrap"}
                  classname={"1/4"}
                />
                <Cards
                  scrapImage={scrap3}
                  scrapTitle={"Nuts Scrap"}
                  classname={"1/4"}
                />
                <Cards
                  scrapImage={scrap4}
                  scrapTitle={"Paper scrap"}
                  classname={"1/4"}
                />
              </>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCollection;
