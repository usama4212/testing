import Image from "next/image";
import React, { Children, useState } from "react";
import bgimage from "@/assets/modalbg.webp"
export default function Modal({ setShowModal, children }: any) {
  return (
    <>
      <>
        <div
          className={`bg-black bg-opacity-40 overflow-y-auto overflow-x-hidden fixed top-96 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative p-4 w-full max-w-xl max-h-full  ">

            <div className="relative  rounded-lg shadow dark:bg-gray-700 py-4 w-[540px] bg-cover" style={{ backgroundImage: `url("${bgimage.src}")` }}>
              {/* Modal header */}
              <div className="flex items-center justify-between  pr-5  rounded-t ">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
