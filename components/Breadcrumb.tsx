"use client"
import { useRouter } from "next/navigation";
import React from 'react'
import iconArrow from "@/assets/icon-arrow.svg";
import Image from "next/image";

const Breadcrumb = ({name} : any) => {
  const navigate = useRouter()
  return (
    <div className='mx-4 md:mx-8 lg:mx-16'>
      <div className="container mx-auto">
        <nav className="flex py-3 text-gray-700 border border-gray-200 rounded-lg dark:border-black" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <div onClick={() => navigate.push("/")} className="cursor-pointer inline-flex items-center text-lg font-medium text-black hover:text-black dark:text-black dark:hover:text-white">
                Home
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Image className=" object-cover" src={iconArrow} alt="Card Image" />
                <div className="cursor-pointer ms-1 text-lg font-medium text-black hover:text-black md:ms-2 dark:text-black dark:hover:text-white">{name}</div>
              </div>
            </li>
            {/* <li>
              <div className="flex items-center">
                <Image className=" object-cover" src={iconArrow} alt="Card Image" />
                <span className="ms-1 text-lg font-medium text-black md:ms-2 dark:text-gray-400">Mobile Phones & Accesories</span>
              </div>
            </li> */}
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb
