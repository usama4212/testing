"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CategoriesDropDown from "../UI/CategoriesDropdown";
import PriceRangeDropdown from "../UI/PriceRangeDropdown";

export default function SubHeader() {
  return (
    <>
      {/*  Search Header */}
      <div className="flex mx-auto max-w-7xl px-2 xmd:px-6 lg:px-8 py-3 h-[91px]  ">
        <div className="flex flex-1 items-center justify-center xmd:items-stretch xmd:justify-start  ">
          {/* Form */}
          <div className="flex items-center w-full">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-[40%]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 17.9998L14.595 14.2548L18.3333 17.9998ZM16.6667 9.24984C16.6667 11.1285 15.9204 12.9301 14.592 14.2585C13.2636 15.5869 11.462 16.3332 9.58333 16.3332C7.70472 16.3332 5.90304 15.5869 4.57466 14.2585C3.24628 12.9301 2.5 11.1285 2.5 9.24984C2.5 7.37122 3.24628 5.56955 4.57466 4.24116C5.90304 2.91278 7.70472 2.1665 9.58333 2.1665C11.462 2.1665 13.2636 2.91278 14.592 4.24116C15.9204 5.56955 16.6667 7.37122 16.6667 9.24984V9.24984Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="  text-gray-900 text-sm rounded-lg   block w-[90%] ps-10 p-2.5  bg-white outline-none focus:outline-none "
                placeholder="Search for auctions..."
                required
              />
            </div>
            <CategoriesDropDown />
            <PriceRangeDropdown />
            {/* Search Button */}

            <button
              type="submit"
              className=" ml-4  text-black hover:bg-yellow-300 leading-snug w-[118px] border border-black rounded-[10px]  py-2 text-base font-medium  "
            >
              <span className="">Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
