"use client";
import AuthLayout from "@/components/Auth/AuthLayout";
import React, { useState } from "react";
import forgetIcon from "@/assets/forget.svg";
import defaultEmail from "@/assets/defaultEmail.svg";
import activeEmail from "@/assets/activeEmail.svg";
import defaultPhone from "@/assets/defaultPhone.svg";
import activePhone from "@/assets/activePhone.svg";
import Input from "@/components/UI/FieldInput";
import { emailRegex } from "@/components/Constants";

const ForgetPassword = ({ setPage }: any) => {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [emailError, setEmailError] = useState("")
    const [emailOrPhoneError, setEmailOrPhoneError] = useState("")
    const [isPhoneShow, setIsPhoneShow] = useState(true)
    const [isEmailShow, setIsEmailShow] = useState(true)

    const submitHandler = () => {

        if (!isPhoneShow) setPage("email")

        if (!isEmailShow) setPage("number")

        if (phone == "" || email == "") setEmailOrPhoneError("Please Enter Phone Or Email")
        else setEmailOrPhoneError("")

    }
    const handlePhoneChange = (e: any) => {
        const { name, value } = e.target;
        setEmailOrPhoneError("")
        if (value.length > 0) {
            setIsEmailShow(false)
        }
        else {
            setIsEmailShow(true)
        }

        if (name === "phone") {
            const phoneNumberRegex = /^[+0-9][0-9]*$/;
            if (!phoneNumberRegex.test(value) && value.length > 0) {
                setErrorMessage("Invalid Phone Number");
            } else {
                setErrorMessage("");
            }
            setPhone(value);
        }
    };

    const handleEmailChange = (e: any) => {
        setEmailOrPhoneError("")
        const { name, value } = e.target;

        if (value.length > 0) setIsPhoneShow(false)
        else setIsPhoneShow(true)

        if (name === "email") {

            if (!emailRegex.test(value) && value.length > 0) setEmailError("Please Enter A Valid Email")
            else setEmailError("")

            setEmail(value);
        }
    };



    return (
        <>
            <AuthLayout
                title="Forget Password?"
                subtitle="You can connect with thousands of Buyers and Sellers"
                picture={forgetIcon}
                submitHandler={submitHandler}
                buttonText="Continue"
            >
                <div className="w-full max-h-[574px] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="text-black text-4xl font-semibold  leading-[48px]">
                        Forget Password{" "}
                    </div>
                    <div>Choose how you want to reset password</div>
                    <div className="px-px py-[15px] w-full mb-3">
                        {isEmailShow &&
                            <div>
                                <Input DefaultImage={defaultEmail} activeImage={activeEmail} type="email" name="email" placeholder="Email address" onChange={handleEmailChange} />
                                <span className="text-red-500 text-sm px-4 ">{emailError}</span>
                            </div>
                        }



                        {!((!isPhoneShow && isEmailShow) || (isPhoneShow && !isEmailShow)) &&
                            <div className="flex mb-6">
                                <div className="w-[45%] border my-3 mr-[11px]"></div>
                                <div className="text-stone-300">Or</div>
                                <div className="w-[45%] border my-3 ml-[11px]"></div>
                            </div>
                        }

                        {isPhoneShow &&
                            <div>
                                <Input DefaultImage={defaultPhone} activeImage={activePhone} type="text" name="phone" placeholder="Phone Number" onChange={handlePhoneChange} />
                                <span className="text-red-500 text-sm px-4 ">{errorMessage}{emailOrPhoneError}</span>
                            </div>
                        }


                        <br />
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default ForgetPassword;