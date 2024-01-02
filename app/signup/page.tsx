"use client"
import React from "react";
import AuthLayout from "@/components/Auth/AuthLayout";
import signImage from "@/assets/envelope.svg";


const signupPage = () => {
    const submitHandler = () =>{

    }
  return (
    <>
      <AuthLayout title="Welcome" subtitle="Create an Account" picture={signImage} submitHandler={submitHandler} buttonText="hello" ><div>hello form</div></AuthLayout>
    </>
  );
};

export default signupPage;
