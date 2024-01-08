"use client";
import AuthLayout from "@/components/Auth/AuthLayout";
import React, { useState } from "react";
import forgetIcon from "@/assets/forget.svg";
import defaultEmail from "@/assets/defaultEmail.svg";
import activeEmail from "@/assets/activeEmail.svg";
import defaultPhone from "@/assets/defaultPhone.svg";
import activePhone from "@/assets/activePhone.svg";
import Input from "@/components/UI/FieldInput";
import { emailRegex, phoneNumberRegex, saudiPhoneNumberRegex } from "@/components/Constants";

const ForgetPassword = ({ setPage }: any) => {
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        phoneError: "",
        emailError: "",
        emptyEmailError: "",
        emptyPhoneError: "",
        isPhoneShow: true,
        isEmailShow: true,
    });
    



    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((pre) => ({...pre, emailError: "", phoneError: "", emptyEmailError: "", emptyPhoneError : "", [name]: value}))

        if (name === "phone") {
            setFormData((prevUserInfo) => ({
                ...prevUserInfo,
                isEmailShow: value.length > 0 ? false : true,
                phoneError: !saudiPhoneNumberRegex.test(value) && value.length > 0 ? "Please Enter A Valid Phone Number" : "",
            }));
        }

        if (name === "email") {
            setFormData((prevUserInfo) => ({
                ...prevUserInfo,
                isPhoneShow: value.length > 0 ? false : true,
                emailError: !emailRegex.test(value) && value.length > 0 ? "Please Enter A Valid Email" : "",
            }));
        }
    };

    const submitHandler = () => {
        if (!formData.isPhoneShow) setPage("email");
        if (!formData.isEmailShow) setPage("number");

        if (formData.phone === "" || formData.email === "") {
            setFormData((prevUserInfo) => ({ ...prevUserInfo, emptyEmailError: "Please Enter Your Email", emptyPhoneError : "Please Enter Your Phone Number" }));
        } else {
            setFormData((prevUserInfo) => ({ ...prevUserInfo, emptyEmailError: "", emptyPhoneError : "" }));
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
                    <div className="px-px py-[15px] w-full">
                        {formData.isEmailShow && (
                            <div>
                                <Input
                                    DefaultImage={defaultEmail}
                                    activeImage={activeEmail}
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    onChange={handleChange}
                                    fieldData = {formData?.emptyEmailError}
                                />
                                <span className="text-red-500 text-sm px-2 ">{formData.emailError}{formData?.emptyEmailError}</span>
                            </div>
                        )}

                        {!((!formData.isPhoneShow && formData.isEmailShow) || (formData.isPhoneShow && !formData.isEmailShow)) && (
                            <div className="flex mb-6">
                                <div className="w-[45%] border my-3 mr-[11px]"></div>
                                <div className="text-stone-300">Or</div>
                                <div className="w-[45%] border my-3 ml-[11px]"></div>
                            </div>
                        )}

                        {formData.isPhoneShow && (
                            <div>
                                <Input
                                    DefaultImage={defaultPhone}
                                    activeImage={activePhone}
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    fieldData = {formData?.emptyPhoneError}
                                />
                                <span className="text-red-500 text-sm px-2 ">{formData.phoneError}{formData.emptyPhoneError}</span>
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