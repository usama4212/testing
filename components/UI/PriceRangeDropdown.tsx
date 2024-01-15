import React, { useState } from "react";
import { onlyNumberRegex } from "../Constants";

export default function PriceRangeDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRange, setSelecetedRange] = useState("");
  const [slectedOption, setSelecetedOption] = useState("Price Range");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [rotate, setRotate] = useState(false);
  const prices = [
    {
      name: "0 to 500",
      subcategory: [],
    },
    {
      name: "500 to 1000",
      subcategory: [],
    },
    {
      name: "1000 to 1500",
      subcategory: [],
    },
    {
      name: "1500 to 2000",
      subcategory: [],
    },
    {
      name: "2000 to 2500",
      subcategory: [],
    },
    {
      name: "2500 to 3000",
      subcategory: [],
    },
    {
      name: "3000 to 3500",
      subcategory: [],
    },
    {
      name: "3500 to 4000",
      subcategory: [],
    },
    {
      name: "4000 to 5000",
      subcategory: [],
    },
  ];
  return (
    <>
      <div className="dropdown inline-block relative ">
        <button
          type="button"
          onClick={() => {
            setShowDropdown(!showDropdown);
            setRotate(!rotate);
          }}
          className="w-[200px]  border-l-2 py-1 relative"
        >
          {slectedOption}
          <svg
            className={`mx-1 w-4 h-4 inline ${
              rotate ? "" : "rotate-180"
            } transition duration-500 absolute right-2 top-1/2 transform -translate-y-1/2`}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 13L10 8L5 13"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {showDropdown && (
          <ul className="dropdown-content absolute bg-white text-gray-900 border pt-1 w-52">
            <li className="px-4 py-2 flex space-x-2">
              <input
                type="text"
                placeholder="Min"
                className="  px-2 w-16 border"
                value={min}
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

            {prices.map((category, index) => {
              return (
                <li
                  key={index}
                  className="dropdown"
                  onMouseEnter={() => {
                    setSelecetedRange(category.name);
                  }}
                  onMouseLeave={() => {
                    setSelecetedRange("");
                  }}
                >
                  <span
                    className=" hover:bg-gray-200  cursor-pointer py-2 px-4 block whitespace-no-wrap"
                    onClick={() => {
                      setSelecetedOption(category.name);
                      setShowDropdown(!showDropdown);
                      setRotate(!rotate);
                    }}
                  >
                    {category.name}
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
