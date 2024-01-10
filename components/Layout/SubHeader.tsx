"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Search from "../UI/Search";
import AllCategories from "../UI/AllCategories";

export default function SubHeader() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex mx-auto max-w-7xl px-2 xmd:px-6 lg:px-8 py-3 h-[91px] ">
        <div className="flex flex-1 items-center justify-center xmd:items-stretch xmd:justify-start  ">
          <Search />
        </div>
        <button
          className=" w-[140px]"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          All Categories{" "}
          <svg
            className={`w-4 h-4 inline ${showMenu ? "" : "rotate-180"} transition duration-500`}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 13L10 8L5 13"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {showMenu && <AllCategories />}
    </>
  );
}
