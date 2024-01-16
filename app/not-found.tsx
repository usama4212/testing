"use client";
import React from "react";
import image404 from "@/assets/404-image.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import laptop from "@/assets/laptop.jpeg";
import ScrapSell from "@/components/ScrapSell";
import ScrapApp from "@/components/ScrapApp";
import Footer from "@/components/Footer";
import Card from "@/components/UI/Card";

const Notfound = () => {
  const navigate = useRouter();

  return (
    <>
      <div className="bg-[#e9e9e9]">
        <div className="mx-4 md:mx-8 lg:mx-16 ">
          <div className="container mx-auto ">
            <div className=" pt-10">
              <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className="lg:hidden text-center mb-8">
                  <Image src={image404} alt="Top Image" />
                </div>
                <div className="lg:ml-8 mt-8 lg:mt-8 text-center lg:text-left lg:w-1/2">
                  <div className="text-3xl lg:text-4xl font-extrabold leading-[36.58px] lg:leading-[57.87px] text-black">
                    Oops! page not found
                  </div>
                  <div className="w-full lg:w-2/3 text-lg text-black mt-3">
                    Something went wrong. It looks like your request could not
                    be found. It seems like the link is broken or the page is
                    removed.
                  </div>
                  <div className="w-full my-5">
                    <button
                      onClick={() => navigate.push("/")}
                      className="text-[#fcc700] text-md font-light py-2 px-3 border border-black rounded-[5px] bg-black"
                    >
                      {" "}
                      Go Back{" "}
                    </button>
                  </div>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:w-full lg:flex lg:items-center">
                  {" "}
                  <Image src={image404} alt="Left Image" />
                </div>
              </div>
            </div>
            <div className="text-black text-lg sm:text-lg mt-3">
              Similar Auctions
            </div>
            <div className="border-b border-black w-full mb-5"></div>
            <div className="flex flex-wrap">
              <Card
                cardImage={laptop}
                scrapTitle={"Electric "}
                classname={"1/4"}
              />
              <Card
                cardImage={laptop}
                scrapTitle={"Electric "}
                classname={"1/4"}
              />
              <Card
                cardImage={laptop}
                scrapTitle={"Electric "}
                classname={"1/4"}
              />
              <Card
                cardImage={laptop}
                scrapTitle={"Electric "}
                classname={"1/4"}
              />
            </div>
          </div>
        </div>
        <ScrapSell />
        <ScrapApp />
        <Footer />
      </div>
    </>
  );
};

export default Notfound;
