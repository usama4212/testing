import Image from "next/image";
import React, { useState } from "react";
import cardImage from "@/assets/cardModal.svg";
export default function Modal({ setShowModal }: any) {
  return (
    <>
      <>
        <div
          className={`bg-black bg-opacity-40 overflow-y-auto overflow-x-hidden fixed top-96 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative p-4 w-full max-w-xl max-h-full  ">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-4">
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
              {/* Modal body */}
              <div className="flex justify-center h-40 mb-8">
                <Image src={cardImage} alt="card" />
              </div>
              <div className="flex justify-center">
                <span className="font-semibold text-lg">
                  Payment Method not Added
                </span>{" "}
              </div>
              <div className="flex justify-center mb-4">
                <span className="">First Add Payment method for</span>{" "}
              </div>
              {/* Modal footer */}
              <div className="flex items-center justify-center p-4 md:p-5  rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className=" bg-primary hover:bg-yellow-400  focus:outline-none  font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
