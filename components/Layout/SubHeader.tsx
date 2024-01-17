"use client";
import React, { useEffect, useState } from "react";
import CategoriesDropDown from "../UI/CategoriesDropdown";
import PriceRangeDropdown from "../UI/PriceRangeDropdown";

export default function SubHeader() {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [selectedPrice, setSelecetedPrice] = useState("Price Range");

  const searchHandler = () => {

    const searchQuery = {
      search,
      selectedCategory,
      selectedPrice
    }

  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const targetDiv = document.getElementById("dropDownDiv");
      if (targetDiv && !targetDiv.contains(event.target)) {
        setShowCategoryDropdown(false);
        setShowPriceDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/*  Search Header */}
      <div className="flex mx-auto max-w-7xl  py-3 h-[91px]  ">
        <div className="flex flex-1 items-center justify-center   ">
          {/* Form */}
          <div className="flex items-center w-full">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-[70%] md:w-[40%] lg:w-[60%]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                  <path d="M18.3333 17.9998L14.595 14.2548L18.3333 17.9998ZM16.6667 9.24984C16.6667 11.1285 15.9204 12.9301 14.592 14.2585C13.2636 15.5869 11.462 16.3332 9.58333 16.3332C7.70472 16.3332 5.90304 15.5869 4.57466 14.2585C3.24628 12.9301 2.5 11.1285 2.5 9.24984C2.5 7.37122 3.24628 5.56955 4.57466 4.24116C5.90304 2.91278 7.70472 2.1665 9.58333 2.1665C11.462 2.1665 13.2636 2.91278 14.592 4.24116C15.9204 5.56955 16.6667 7.37122 16.6667 9.24984V9.24984Z"
                    stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <input
                type="text" id="simple-search" className="  text-gray-900 text-sm  border-b   block w-[100%]  ps-10 py-2.5  bg-white outline-none focus:outline-none "
                placeholder="Search for auctions..." required
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
            </div>
            <div className="hidden md:flex" id="dropDownDiv">
              <CategoriesDropDown
                showCategoryDropdown={showCategoryDropdown}
                setShowCategoryDropdown={setShowCategoryDropdown}
                setShowPriceDropdown={setShowPriceDropdown}
                selectedOption={selectedCategory}
                setSelecetedOption={setSelectedCategory}
              />
              <PriceRangeDropdown
                showPriceDropdown={showPriceDropdown}
                setShowPriceDropdown={setShowPriceDropdown}
                setShowCategoryDropdown={setShowCategoryDropdown}
                selectedOption={selectedPrice}
                setSelecetedOption={setSelecetedPrice}
              />
            </div>
            {/* Search Button */}
            <button type="submit" className=" ml-4  text-black hover:bg-yellow-300 leading-snug w-[118px] border border-black rounded-md py-2 text-base font-medium"
              onClick={searchHandler}
            >
              <span className="">Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
