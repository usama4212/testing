"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import AuthLayout from "@/components/Auth/AuthLayout";
import envelope from "@/assets/envelope.svg";
import moment from "moment";

const EmailOtp = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const [counter, setCounter] = useState<any>(120);
    const inputRefs = useRef<any>([]);

    const submitHandler = () => { };


    const handleChange = (index: any, value: any) => {
        const newCode = [...code];
        const digit = value.replace(/[^0-9]/g, '');

        newCode[index] = digit;
        setCode(newCode);

        if (digit !== '' && digit.length === 1) {
            if (index < 3) {
                inputRefs.current[index + 1].focus();
            }
        } else if (digit === '' || digit.length > 1) {
            inputRefs.current[index].value = '';
        }
    };

    const handleInputRef = (ref: any, index: any) => {
        inputRefs.current[index] = ref;
    };

    const handlePaste = (e: any) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text/plain');
        const digits = pasteData.replace(/[^0-9]/g, '').split('').slice(0, 4);

        const newCode = [...code];
        digits.forEach((digit: any, index: any) => {
            newCode[index] = digit;
        });

        setCode(newCode);
    };

    const handleKeyDown = (index: any, e: any) => {
        if (e.key === 'Backspace' && code[index] === '') {
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
    const formattedTime = moment.utc(counter * 1000).format('mm:ss');

    



    return (
        <>
            <AuthLayout
                title="Email OTP"
                subtitle="Please check your email for OTP"
                picture={envelope}
                submitHandler={submitHandler}
                buttonText="Continue"
            >
                <div className="w-full max-h-[574px] flex-col sm:items-center md:items-center lg:items-start justify-start inline-flex">
                    <div className="text-black text-5xl font-semibold leading-[48px]">
                        Check Your Email{" "}
                    </div>
                    <div className="font-sans text-base sm:text-lg lg:text-lg leading-5 mt-3">
                        We just sent an OTP to your registered email address
                    </div>
                    <div className="mx-auto flex flex-wrap justify-center">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                className="bg-transparent appearance-none focus:outline-none text-center h-16 lg:h-20 w-16 lg:w-14 m-2 lg:m-4 border-b-2 border-gray-700 text-3xl lg:text-4xl"
                                type="text"
                                value={digit}
                                ref={(ref) => handleInputRef(ref, index)}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                            />
                        ))}
                    </div>
                    <div className="mx-auto flex flex-wrap justify-center text-gray-500 mt-14">
                        {formattedTime}
                    </div>
                    <div className="mx-auto flex flex-wrap justify-center mt-2 mb-14">
                        Didnt get a code? <span className="font-bold px-1 cursor-pointer">Resend</span>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default EmailOtp;
