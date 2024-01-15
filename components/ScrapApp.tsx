/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import mobileApp from "@/assets/app.webp";
import gradient from "@/assets/scrap-gradient.png";
import downloadButton from "@/assets/download-button.svg";
import appleIcon from "@/assets/apple-icon.svg";
import playstoreIcon from "@/assets/playstore-icon.svg";
import flower from "@/assets/flower.svg";

const ScrapApp = () => {
  return (
    <div>
      <div
        className="text-white bg-no-repeat bg-cover pb-8 mt-36"
        style={{ backgroundImage: `url(${gradient.src})` }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="relative z-10 lg:w-1/2">
            <Image
              src={mobileApp}
              alt="Left Image"
              className="w-full object-cover object-top ml-2 sm:ml-0 -mt-12 lg:-mt-24 "
            />
          </div>

          <div className="lg:ml-8 mt-8 lg:mt-0 text-center lg:text-left">
            <div className="text-[32px] lg:text-[52px] font-extrabold leading-[36.58px] lg:leading-[57.87px] text-black">
              Saudi's No. 1
            </div>
            <div className="text-[32px] lg:text-[52px] font-bold  text-black">
              Scrap selling App
            </div>
            <p className="text-lg text-black mt-3">
              Providing door-to-door free pickup service of your Scrap
            </p>

            <div className="w-2/3 lg:w-2/3 flex justify-center mx-auto lg:mx-0 space-x-4 lg:justify-between mt-5">
              <div className="mb-4 lg:mb-0 lg:mr-4 lg:w-[160.73px] h-[39.69px] pl-[14.64px] pr-[46.06px] pt-[11.27px] pb-[11.20px] rounded-[6.89px] border border-black justify-start items-start gap-[19.81px] inline-flex cursor-pointer">
                <Image
                  src={downloadButton}
                  alt="Left Image"
                  className="object-cover object-top -mt-[2px]"
                />
                <div className="text-center text-black text-sm font-normal font-['Segoe UI'] leading-[15.16px]">
                  Download{" "}
                </div>
              </div>
              <div className="border-l-2 lg:border-l-2 border-black mb-4 lg:mb-0"></div>
              <div className="cursor-pointer">
                <Image
                  src={playstoreIcon}
                  alt="Left Image"
                  className="object-cover mt-1 lg:mt-1 lg:ml-4"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src={appleIcon}
                  alt="Left Image"
                  className="object-cover mt-1 lg:mt-1 lg:ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapApp;
