"use client";
import React, { useRef, useState } from "react";
import singleImage from "@/assets/singleImage.svg";
import Image from "next/image";
import profile from "@/assets/profile.svg";
import next from "@/assets/nextArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingStars from "../UI/Rating";
import Slider from "react-slick";
import "./CustomSlider.css";
import Modal from "../UI/Modal";

export default function Single() {
  const slider1 = useRef<Slider>(null!);
  const slider2 = useRef<Slider>(null!);
  const [showModal, setShowModal] = useState(false);
  const singleProduct = {
    title: "Apple iPhone 14 Pro - 128GB - Gold (Unlocked)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lore Ipsum has been the industry's standard dummy text ever since the 1500s, More info",
    condition: "used",
    expAt: "12/07/2024",
    basePrice: "1200",
    sellerName: "John Doe",
    rating: 3.5,
    reveiws: 39,
    productImages: [
      profile,
      singleImage,
      singleImage,
      singleImage,
      singleImage,
    ],
  };

  var settings = {
    dots: false,

    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
  };

  const handleNext = () => {
    slider1.current.slickNext();
    slider2.current.slickNext();
  };
  const handlePrev = () => {
    slider1.current.slickPrev();
    slider2.current.slickPrev();
  };

  return (
    <>
      {" "}
      <div className="min-h-[540px] max-w-7xl grid grid-cols-3 mx-auto">
        {" "}
        <div className=" grid grid-cols-12 col-span-2 min-h-[540px]  ">
          <div className="w-full my-auto  h-  col-span-2 justify-center  items-center">
            <Slider
              {...settings}
              arrows={false}
              slidesToShow={4.9}
              vertical
              ref={slider2}
              focusOnSelect={true}
              centerMode={true}
              centerPadding="80px"
              className="px-5 "
              beforeChange={(index, nextIndex) => {
                slider2.current.slickGoTo(nextIndex);
                slider1.current.slickGoTo(nextIndex);
              }}
            >
              {singleProduct.productImages.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    alt="image"
                    className="h-[92px] px-2 "
                  />
                );
              })}
            </Slider>
          </div>
          <div className=" bg-[#dddddd] col-span-10 min-h-[540px] flex justify-center  items-center ">
            <div className="w-[60%]  py-5">
              <Slider
                {...settings}
                ref={slider1}
                focusOnSelect={true}
                beforeChange={(index, nextIndex) => {
                  slider1.current.slickGoTo(nextIndex);
                  slider2.current.slickGoTo(nextIndex);
                }}
                fade={true}
                nextArrow={
                  <>
                    <button
                      className=" my-auto absolute  top-1/2 -right-28 transform -translate-y-1/2"
                      onClick={handleNext}
                    >
                      <Image src={next} alt="next" />
                    </button>
                  </>
                }
                prevArrow={
                  <>
                    <button
                      className=" my-auto absolute top-[45%] -left-[120px]  transform -translate-y-1/2"
                      onClick={handlePrev}
                    >
                      <Image src={next} alt="next" className="rotate-180" />
                    </button>
                  </>
                }
              >
                {singleProduct.productImages.map((image, index) => {
                  return (
                    <Image key={index} src={image} alt="image" className="" />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        {/* Product details section */}
        <div className="grid col-span-1 min-h-[540px]  md:ps-5 py-1 space-y-[15px]">
          <div className="text-zinc-900 text-[21.83px] font-semibold">
            {singleProduct.title}
          </div>
          <div>{singleProduct.description}</div>
          <div>
            Condition :{" "}
            <span className="font-semibold">{singleProduct.condition}</span>
          </div>
          <div className="flex max-h-[68px] justify-center  rounded-[10px]">
            <div className="w-[47%]  bg-white   py-[10px]  rounded-s-[10px] ">
              <div className="flex items-center justify-center  text-neutral-600">
                Auction Ending in
              </div>
              <div className="flex items-center justify-center space-x-1 ">
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="clock">
                    <path
                      id="Vector"
                      d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M9 5V9.5L12 11"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span className="font-semibold ">04h 25m 10s </span>
              </div>
              <div></div>
            </div>
            <div className="w-[53%]  bg-primary py-[10px] rounded-e-[10px]">
              {" "}
              <div className="flex items-center justify-center text-[16px] font-semibold">
                Riyal : {singleProduct.basePrice}
              </div>
              <div className="flex items-center justify-center  text-[14px] font-">
                Starting Price
              </div>
            </div>
          </div>
          <div className="rounded-[10px] border border-neutral-500 justify-start items-center inline-flex py-4 ">
            <div className="mx-3 flex items-center space-x-2 ">
              <Image className="h-12 w-12 rounded-full" src={profile} alt="" />
              <div className="">
                <span className="font-semibold pr-1">
                  {singleProduct.sellerName}
                </span>
                <span className="text-gray-500 text-sm">
                  ({singleProduct.reveiws})
                </span>

                <RatingStars rating={3.4} />
              </div>
            </div>
          </div>
          <div className="rounded-[10px] border border-neutral-500 justify-center bg-white items-center inline-flex py-4">
            <input
              type="text"
              placeholder="0000"
              className="  text-center focus:outline-none "
            />
          </div>
          <div className=" justify-start  inline-flex">
            <button className="bg-primary rounded-[10px]  w-full py-4 text-base leading-tight " onClick={()=>{setShowModal(true)}}>
              Bid
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}
