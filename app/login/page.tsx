"use client";
import React from "react";
import AuthLayout from "@/components/Auth/AuthLayout";
import signImage from "@/assets/signin.svg";

const loginPage = () => {
  const submitHandler = () => {};
  return (
    <>
      <AuthLayout
        title="Welcome"
        subtitle="You can connect with thousands of Buyers and Sellers"
        picture={signImage}
        submitHandler={submitHandler}
        buttonText="hello"
      >
        <div className="w-full max-h-[574px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-black text-5xl font-semibold  leading-[48px]">
            Sign In{" "}
          </div>
          <div className="px-px py-[15px] w-full">
            <div className="text-base w-[174.26px] leading-normal font-normal">
              With Phone Number
            </div>
            <div className="relative">
              <div
                className="absolute inset-y-0 start-0   pl-3  
              flex items-center  ps-3
              pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                className=" focus:border-grey-400 focus:border focus:outline-none  p-4 ps-10 w-full  bg-white  rounded-[10px] border-[0.2px] "
                style={{}}
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default loginPage;
