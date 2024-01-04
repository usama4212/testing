"use client"
import React, { useState } from "react";
import AuthLayout from "@/components/Auth/AuthLayout";
import signImage from "@/assets/envelope.svg";
import DefaultName from "@/assets/DefaultName.svg";
import activeName from "@/assets/activeName.svg";
import defaultEmail from "@/assets/defaultEmail.svg";
import activeEmail from "@/assets/activeEmail.svg";
import defaultPhone from "@/assets/defaultPhone.svg";
import activePhone from "@/assets/activePhone.svg";
import defaultPassword from "@/assets/defaultPassword.svg";
import activePassword from "@/assets/activePassword.svg";
import FieldInput from "../../components/UI/FieldInput";
import eye from "@/assets/eye.svg";
import eyeSlash from "@/assets/eye-slash.svg";
import { emailRegex, numberRegex, passwordRegexer, regexError, specialCharacterRegex, upperCaseRegex, withoutNumberRegex, withoutSpecialRegex, withoutUppercaseRegex } from "@/components/Constants";


const signupPage = () => {

  const [formData, setFormData] = useState({ userName: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [formDataError, setFormDataError] = useState<any>({})
  const [passwordRegex, setPasswordRegex] = useState("");
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(pre => ({ ...pre, [name]: value }));
    setFormDataError((pre: any) => ({ ...pre, [name]: "" }));

    if (name == "email") {
      if (!emailRegex.test(value) && value.length !== 0) {
        setFormDataError((pre: any) => ({ ...pre, regex: regexError }));
      }
      else setFormDataError((pre: any) => ({ ...pre, regex: "" }));
    }

    if (name === "password" || name === "confirmPassword") {

      let status = "";

      if (upperCaseRegex.test(value)) status = "Uppercase"

      if (specialCharacterRegex.test(value)) status = "Special character"

      if (numberRegex.test(value)) status = "Number"

      if (withoutNumberRegex.test(value)) status = "Without Number"

      if (withoutSpecialRegex.test(value)) status = "Without Specail"

      if (withoutUppercaseRegex.test(value)) status = "Without Uppercase"

      if (passwordRegexer.test(value)) status = "All satisfied"

      setPasswordRegex(status)
    }

  };


  const formDataValidations = () => {
    formDatavalidateCredentials(formData?.userName, formData?.email, formData?.phone, formData?.password, formData?.confirmPassword, setFormDataError);
  };

  const formDatavalidateCredentials = (userName: any, email: any, phone: any, password: any, confirmPassword: any, setErrors: any) => {
    const fields = ["userName", "email", "phone", "password", "confirmPassword"].map((name) => ({ name, value: eval(name), label: name.charAt(0).toUpperCase() + name.slice(1) }));
    const errors: any = {};
    fields.forEach((field) => {
      if (field.value === "") errors[field.name] = `${field.label} is required`;
    });
    setErrors(errors);
  };


  const submitHandler = () => {
    const formValues = Object.values(formData);
    if (formValues.includes("") || formDataError?.regex !== "" || passwordRegex !== "All satisfied" || formData.password !== formData.confirmPassword) {
      formDataValidations();
      return;
    }
  }

  const PasswordCheck = ({ condition, text } : any) => (
    <div className="flex">
      <div className={`mt-1 w-3 h-3 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 rounded-full ${(condition) ? "bg-green-900 border border-green-900" : "bg-white border border-black"}`}></div>
      <div className={`ml-5 text-xs sm:text-sm md:text-md lg:text-sm xl:text-sm ${(condition) ? "text-green-900" : ""}`}>{text}</div>
    </div>
  );


  return (
    <>
      <AuthLayout title="Welcome" subtitle="Create an Account" picture={signImage} submitHandler={submitHandler} buttonText="Create Account" >
        <div className="w-full max-h-[574px] flex-col justify-start items-start inline-flex">
          <div className="text-black text-5xl font-semibold  leading-[48px] mb-5">
            Create Account{" "}
          </div>
          <FieldInput DefaultImage={DefaultName} activeImage={activeName} type="text" placeholder="Name" name="userName" onChange={handleChange} formDataError={formDataError} />
          <div className="text-red-500 text-sm h-[30px]">{formDataError?.userName}</div>

          <FieldInput DefaultImage={defaultEmail} activeImage={activeEmail} type="text" placeholder="Email" name="email" onChange={handleChange} />
          <div className="text-red-500 text-sm h-[30px]">{formDataError?.email}{formDataError?.regex}</div>

          <FieldInput DefaultImage={defaultPhone} activeImage={activePhone} type="text" placeholder="Phone" name="phone" onChange={handleChange} />
          <div className="text-red-500 text-sm h-[30px]">{formDataError?.phone}</div>

          <FieldInput DefaultImage={defaultPassword} activeImage={activePassword} type={showPassword1 ? "text" : "password"} placeholder="Password" name="password" formData={formData} onChange={handleChange}  onClick={()=>setShowPassword1(!showPassword1)} icon={showPassword1 ? eye : eyeSlash} />
          <div className="text-red-500 text-sm h-[30px]">{formDataError?.password}</div>

          <FieldInput DefaultImage={defaultPassword} activeImage={activePassword} type={showPassword2 ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" formData={formData} onChange={handleChange} onClick={()=>setShowPassword2(!showPassword2)} icon={showPassword2 ? eye : eyeSlash} />
          <div className="text-red-500 text-sm h-[30px]">{formDataError?.confirmPassword}</div>

        </div>

        <div className="mb-16 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-16 2xl:mb-16 mt-5">
          <PasswordCheck condition={passwordRegex === "Uppercase" || passwordRegex === "All satisfied" || passwordRegex === "Without Number" || passwordRegex === "Without Specail"} text="Contains at least one uppercase letter" />
          <PasswordCheck condition={passwordRegex === "Special character" || passwordRegex === "All satisfied" || passwordRegex === "Without Number" || passwordRegex === "Without Uppercase"} text="Contains at least one special character" />
          <PasswordCheck condition={passwordRegex === "Number" || passwordRegex === "All satisfied" || passwordRegex === "Without Specail" || passwordRegex === "Without Uppercase"} text="Contains at least one number" />
          <PasswordCheck condition={(formData.password === formData.confirmPassword) && formData.password !== "" && formData.confirmPassword !== ""} text="Passwords are matching" />
        </div>
      </AuthLayout>
    </>
  );
};

export default signupPage;
