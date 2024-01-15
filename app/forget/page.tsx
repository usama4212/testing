"use client";
import Otp from "@/components/Auth/Forgetpassword/Otp";
import ForgetPassword from "@/components/Auth/Forgetpassword/ForgetPassword";
import ResetPassword from "@/components/Auth/Forgetpassword/ResetPassword";
import React, { useState } from "react";

const Forget = () => {
  const [page, setPage] = useState("forget")
  
  return (
    <>
      {page == "forget" && <ForgetPassword setPage={setPage} pageName = {setPage}/>}
      {page == "number" && <Otp page={page}  pageName = {setPage}/>}
      {page == "email" && <Otp page={page} pageName = {setPage}/>}
      {page == "reset" && <ResetPassword />}
    </>
  );
};

export default Forget;