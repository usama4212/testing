"use client"
import Otp from "@/components/Auth/Forgetpassword/Otp";
import React from "react";

 const VerifyOtp  = () => {
    const submitHandler = ()=>{
        
    }
  return (
    <>
      <Otp submitHandler={submitHandler} page="number" />
    </>
  );
};
export default VerifyOtp;
