"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import AuthLayout from "@/components/Auth/AuthLayout";
import envelope from "@/assets/envelope.svg";
import phone from "@/assets/phone.svg";
import moment from "moment";

const Otp = ({ page, pageName }: OtpProps) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [counter, setCounter] = useState<any>(120);
  const [isComplete, setIsComplete] = useState(false);
  const [emptyCodeError, setEmptyCodeError] = useState("")
  const inputRefs = useRef<any>([]);
  const formattedTime = moment.utc(counter * 1000).format("mm:ss");

  const submitHandler = () => {
    if (isComplete) {
      pageName("reset")
    }
    else {
      setEmptyCodeError("Please Fill The Code")
    }

  };


  useEffect(() => {
    const allFilled = code.every(digit => digit !== '');
    setIsComplete(allFilled);
  }, [code]);


  const handleChange = (index: any, value: any) => {
    const newCode = [...code];
    const digit = value.replace(/[^0-9]/g, "");
    setEmptyCodeError("")

    newCode[index] = digit;
    setCode(newCode);

    if (digit !== "" && digit.length === 1) {
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    } else if (digit === "" || digit.length > 1) {
      inputRefs.current[index].value = "";
    }
  };

  const handleInputRef = (ref: any, index: any) => {
    inputRefs.current[index] = ref;
  };

  const handlePaste = (e: any) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain");
    const digits = pasteData
      .replace(/[^0-9]/g, "")
      .split("")
      .slice(0, 4);

    const newCode = [...code];
    digits.forEach((digit: any, index: any) => {
      newCode[index] = digit;
    });

    setCode(newCode);
  };

  const handleKeyDown = (index: any, e: any) => {
    if (e.key === "Backspace" && code[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    if (counter !== null && counter > 0) {
      const timer = setTimeout(() => {
        setCounter((prevCounter: any) => prevCounter - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);


  return (
    <>
      <AuthLayout
        title={page == "email" ? "Email OTP" : "Number OTP"}
        subtitle={`Please check your ${page == "email" ? "email" : "SMS"} for OTP`}
        picture={page == "email" ? envelope : phone}
        submitHandler={submitHandler}
        buttonText="Continue"
      >
        <div className="w-full max-h-[574px] flex-col sm:items-center md:items-center justify-center inline-flex">
          <div className="text-black text-4xl font-semibold leading-[48px] flex text-center">
            Check Your {page == "email" ? "Email" : "Mobile"}{" "}
          </div>
          <div className="font-sans text-base sm:text-lg lg:text-lg leading-5 mt-3">
            We just sent an OTP to your registered{" "}
            {page == "email" ? "email address" : "Mobile Number"}
          </div>
          <div className="  mx-auto flex flex-wrap justify-center">
            {code.map((digit, index) => (
              <input
                key={index}
                className="bg-transparent appearance-none focus:outline-none text-center h-10 lg:h-14 w-12 lg:w-12 mx-2 mt-5 lg:mx-2 border-b-2 border-gray-700 text-3xl lg:text-4xl"
                type="text"
                value={digit}
                ref={(ref) => handleInputRef(ref, index)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
              />
            ))}
          </div>
          {emptyCodeError && <div className="mx-auto flex flex-wrap justify-center text-red-600 text-[14px] mt-3">
            {emptyCodeError}
          </div>
          }
          <div className="mx-auto flex flex-wrap justify-center text-gray-500 mt-14">
            {formattedTime}
          </div>
          <div className="mx-auto flex flex-wrap justify-center mt-2 mb-14">
            Didn't get a code?{" "}
            <span onClick={()=>setCounter(120)} className="font-bold px-1 cursor-pointer">Resend</span>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};
interface OtpProps {
  // submitHandler: () => void;
  page: string;
  pageName: any;
}
export default Otp;