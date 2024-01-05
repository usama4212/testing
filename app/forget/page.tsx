"use client";
import Otp from "@/components/Auth/Forgetpassword/Otp";
import ForgetPassword from "@/components/Auth/Forgetpassword/ForgetPassword";
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
    } else if (page == "email") {
      setPage("reset");
    }
  };
  return (
    <>
      {page == "forget" && <ForgetPassword setPage={setPage} />}
      {page == "number" && <Otp page={page} submitHandler={submitHandler} />}
      {page == "email" && <Otp page={page} submitHandler={submitHandler} />}
      {page == "reset" && <ResetPassword />}
    </>
  );
};

export default Forget;
