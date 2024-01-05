"use client";
import AuthLayout from "@/components/Auth/AuthLayout";
import React, { useState } from "react";
import forgetIcon from "@/assets/forget.svg";
import defaultEmail from "@/assets/defaultEmail.svg";
import activeEmail from "@/assets/activeEmail.svg";
import defaultPhone from "@/assets/defaultPhone.svg";
import activePhone from "@/assets/activePhone.svg";
import Input from "@/components/UI/FieldInput";
import { emailRegex, phoneNumberRegex } from "@/components/Constants";

const ForgetPassword = ({ setPage }: any) => {
    const [userInfo, setUserInfo] = useState({
        phone: "",
        email: "",
        errorMessage: "",
        emailError: "",
        emailOrPhoneError: "",
        isPhoneShow: true,
        isEmailShow: true,
    });
    



    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setUserInfo((pre) => ({...pre, emailError: "", errorMessage: "", emailOrPhoneError: "", [name]: value}))

        if (name === "phone") {
            setUserInfo((prevUserInfo) => ({
                ...prevUserInfo,
                isEmailShow: value.length > 0 ? false : true,
                errorMessage: !phoneNumberRegex.test(value) && value.length > 0 ? "Invalid Phone Number" : "",
            }));
        }

        if (name === "email") {
            setUserInfo((prevUserInfo) => ({
                ...prevUserInfo,
                isPhoneShow: value.length > 0 ? false : true,
                emailError: !emailRegex.test(value) && value.length > 0 ? "Please Enter A Valid Email" : "",
            }));
        }
    };

    const submitHandler = () => {
        if (!userInfo.isPhoneShow) setPage("email");
        if (!userInfo.isEmailShow) setPage("number");

        if (userInfo.phone === "" || userInfo.email === "") {
            setUserInfo((prevUserInfo) => ({ ...prevUserInfo, emailOrPhoneError: "Please Enter Phone Or Email" }));
        } else {
            setUserInfo((prevUserInfo) => ({ ...prevUserInfo, emailOrPhoneError: "" }));
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
                    <div className="text-black text-4xl font-semibold leading-[48px]">Forget Password </div>
                    <div>Choose how you want to reset password</div>
                    <div className="px-px py-[15px] w-full mb-3">
                        {userInfo.isEmailShow && (
                            <div>
                                <Input
                                    DefaultImage={defaultEmail}
                                    activeImage={activeEmail}
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    onChange={handleChange}
                                />
                                <span className="text-red-500 text-sm px-4 ">{userInfo.emailError}</span>
                            </div>
                        )}

                        {!((!userInfo.isPhoneShow && userInfo.isEmailShow) || (userInfo.isPhoneShow && !userInfo.isEmailShow)) && (
                            <div className="flex mb-6">
                                <div className="w-[45%] border my-3 mr-[11px]"></div>
                                <div className="text-stone-300">Or</div>
                                <div className="w-[45%] border my-3 ml-[11px]"></div>
                            </div>
                        )}

                        {userInfo.isPhoneShow && (
                            <div>
                                <Input
                                    DefaultImage={defaultPhone}
                                    activeImage={activePhone}
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />
                                <span className="text-red-500 text-sm px-4 ">{userInfo.errorMessage}{userInfo.emailOrPhoneError}</span>
                            </div>
                        )}
                        <br />
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default ForgetPassword;