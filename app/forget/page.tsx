"use client";
import EmailOtp from "@/components/Auth/Forgetpassword/EmailOtp";
import ForgetPassword from "@/components/Auth/Forgetpassword/ForgetPassword";
import NumberOtp from "@/components/Auth/Forgetpassword/NumberOtp";
import ResetPassword from "@/components/Auth/Forgetpassword/ResetPassword";
import React, { useState } from "react";

const Forget = () => {
    const [page, setPage] = useState("forget");
    const submitHandler = () => {
        alert("Forget Password");
        if (page == "forget") {
            setPage("number");
        } else if (page == "number") {
            setPage("email");
        }
        else if (page == "email") {
            setPage("reset");
        }
    };
    return (
        <>
            {page == "forget" && <ForgetPassword setPage = {setPage}/>}
            {page == "number" && <NumberOtp submitHandler={submitHandler} />}
            {page == "email" && <EmailOtp submitHandler={submitHandler} />}
            {page == "reset" && <ResetPassword />}
        </>
    );
};

export default Forget;