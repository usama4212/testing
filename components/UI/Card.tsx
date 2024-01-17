import Image from "next/image";
import React from "react";
import clock from "@/assets/clock.svg";
import Link from "next/link";
import CountdownTimer from "../Auction/CountdownTimer";

export default function Card({ cardImage, scrapTitle, classname, days, hours, minutes, seconds }: any) {
  return (
    <div className="relative  mx-auto my-2 lg: flex w-full max-w-[300px] flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-md">
      <Link className="relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl" href="#"      >
        <Image className="object-cover w-full" src={cardImage} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-md bg-purple-600 px-2 text-center text-sm font-medium text-white">
          Verified
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href="#" className="">
          <h5 className="text-xl tracking-tight text-slate-900 pt-4">
            {scrapTitle.substring(0, 22)} . . .
          </h5>
        </Link>
        <div className="mt-3 mb-5 flex items-center justify-between">
          <p>
            <span className="text-lg font-bold text-slate-900">5000</span>
            <span className="text-sm text-slate-900 ps-1">SAR</span>
          </p>
          {/* <span className=" m-2 rounded-md bg-purple-600 px-2 text-center text-base font-medium text-white">
            Verified
          </span> */}
          <div className=" flex items-center bg-primary py-1 px-2 rounded-md w-[160px]">
            <Image className="w-[17px]  " src={clock} alt="Card Image" />
            <div className=" ml-1 text-[17px] flex items-center">
              {/* {hours}h {minutes}m {seconds}s */}
              <CountdownTimer initialTime={286400} />
            </div>
          </div>
        </div>
        <Link
          href={`/products/${scrapTitle}`}
          className="flex items-center w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-lg tracking-wider font-semibold text-white hover:bg-gray-800 focus:outline-none"
        >
          Bid
        </Link>
      </div>
    </div>
  );
}
