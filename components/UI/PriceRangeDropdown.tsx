import React, { useState } from "react";
import { onlyNumberRegex } from "../Constants";

export default function PriceRangeDropdown({ showPriceDropdown, setShowPriceDropdown, setShowCategoryDropdown, selectedOption, setSelecetedOption }: any) {
  const [selectedRange, setSelecetedRange] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const prices = [
    {
      priceRange: "0 to 500",
    },
    {
      priceRange: "500 to 1000",
    },
    {
      priceRange: "1000 to 1500",
    },
    {
      priceRange: "1500 to 2000",
    },
    {
      priceRange: "2000 to 2500",
    },
    {
      priceRange: "2500 to 3000",
    },
    {
      priceRange: "3000 to 3500",
    },
    {
      priceRange: "3500 to 4000",
    },
    {
      priceRange: "4000 to 5000",
    },
  ];
  return (
    <>
      <div className="dropdown inline-block relative ">
        <button
          type="button" className="w-[200px]  border-l-2 py-1 relative"
          onClick={() => {
            if (!showPriceDropdown) {
              setShowCategoryDropdown(false)
            }
            setShowPriceDropdown(!showPriceDropdown);
          }}
        >
          {selectedOption}
          <svg className={`mx-1 w-4 h-4 inline ${showPriceDropdown ? "" : "rotate-180"} transition duration-500 absolute right-2 top-1/2 transform -translate-y-1/2`}
            viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M15 13L10 8L5 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {showPriceDropdown && (
          <ul className="dropdown-content absolute bg-white text-gray-900 border pt-1 w-52">
            <li className="px-4 py-2 flex space-x-2">
              <input type="text" placeholder="Min" className="  px-2 w-16 border" value={min}
                onChange={(e) => {
                  const { value } = e.target;
                  if (onlyNumberRegex.test(value) && value.length > 0) {
                    setMin(value);
                    setSelecetedOption(`${value} to ${max ? max : "Max"}`);
                    return;
                  } else if (value.length == 0) {
                    setMin(value);
                    setSelecetedOption(`Min to ${max ? max : "Max"}`);
                  }
                }}
              />
              <span>to</span>
              <input
                type="text"
                placeholder="Max"
                className="   px-2 w-16 border"
                value={max}
                onChange={(e) => {
                  const { value } = e.target;
                  if (onlyNumberRegex.test(value) && value.length > 0) {
                    setMax(value);
                    setSelecetedOption(`${min ? min : "Min"} to ${value}`);
                    return;
                  } else if (value.length == 0) {
                    setMax(value);
                    setSelecetedOption(`${min ? min : "Min"} to Max`);
                  }
                }}
              />
            </li>
            {prices.map((value, index) => {
              return (
                <li key={index} className="dropdown"
                  onMouseEnter={() => {
                    setSelecetedRange(value.priceRange);
                  }}
                  onMouseLeave={() => {
                    setSelecetedRange("");
                  }}
                >
                  <span className=" hover:bg-gray-200  cursor-pointer py-2 px-4 block whitespace-no-wrap"
                    onClick={() => {
                      setSelecetedOption(value.priceRange);
                      setShowPriceDropdown(!showPriceDropdown);
                    }}
                  >
                    {value.priceRange}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
