"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import profile from "@/assets/profile.svg";

export default function Navbar2() {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <nav className="bg-primary">
        <div className="mx-auto max-w-7xl ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center xmd:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-yellow-300  focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setShowMenu(!showMenu);
                  console.log(showMenu);
                }}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/*
        Icon when menu is closed.
  
        Menu open: "hidden", Menu closed: "block"
      */}
                {!showMenu && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {/*
        Icon when menu is open.
  
        Menu open: "block", Menu closed: "hidden"
      */}
                {showMenu && (
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center xmd:items-stretch xmd:justify-start  ">
              <div className="xmd:flex flex-shrink-0 items-center hidden ">
                <a
                  href="http://localhost:3000/"
                  className="flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <Image src={logo} className="h-8" alt="Flowbite Logo"></Image>
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
                    Scrapyard
                  </span>
                </a>
              </div>
              <div className="hidden  xmd:block  mx-auto">
                <div className="flex space-x-4 text-base font-normal">
                  <a
                    href="#"
                    className=" text-black text-base  leading-snug hover:bg-yellow-300 rounded-md px-3 py-2  "
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-yellow-300 leading-snug rounded-md px-3 py-2 "
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-yellow-300 leading-snug rounded-md px-3 py-2  "
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-black hover:bg-yellow-300 leading-snug  rounded-md px-3 py-2  "
                  >
                    Calendar
                  </a>
                </div>
              </div>
              <div className="">
                <button className="bg-gray-900 text-primary hidden xmd:flex  w-[118px]  border border-black   py-2 text-base rounded-[10px] font-medium">
                  <span className="mx-auto ">Sell</span>
                </button>
                <div className="xmd:hidden flex-shrink-0 items-center  ">
                  <a
                    href="http://localhost:3000/"
                    className="flex items-center space-x-2 px-3 py-2 rtl:space-x-reverse"
                  >
                    <Image
                      src={logo}
                      className="h-8 "
                      alt="Flowbite Logo"
                    ></Image>
                    <span className="self-center text-xl hidden sm:flex font-semibold whitespace-nowrap text-black dark:text-white">
                      Scrapyard
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Profile dropdown and notification menu */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-5 sm:pr-0 min-w-[118px]">
              {isLogin ? (
                <>
                  <button
                    type="button"
                    className="relative rounded-full p-1 ml-6 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={() => {
                          setShowProfileMenu(!showProfileMenu);
                        }}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={profile}
                          alt=""
                        />
                      </button>
                    </div>

                    {showProfileMenu && (
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-black"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-black"
                        >
                          Settings
                        </a>
                        <button
                          onClick={() => {
                            setIsLogin(false);
                          }}
                          className="block px-4 py-2 text-sm text-black"
                        >
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="text-black hover:bg-yellow-300 leading-snug w-[118px] border border-black rounded-md  py-2 text-base font-medium"
                    onClick={() => {
                      setIsLogin(true);
                    }}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {showMenu && (
          <div className="xmd:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-black hover:bg-gray-700 hover:text-white" */}
              {/* <div className="xmd:flex flex-shrink-0 items-center  ">
                <a
                  href="http://localhost:3000/"
                  className="flex items-center space-x-2 px-3 py-2 rtl:space-x-reverse"
                >
                  <Image src={logo} className="h-8" alt="Flowbite Logo"></Image>
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
                    Scrapyard
                  </span>
                </a>
              </div> */}
              <a
                href="#"
                className="hover:bg-yellow-300  block rounded-md  px-3 py-2 text-base max-[60px]:text-xs font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className=" hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className=" hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className=" hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
