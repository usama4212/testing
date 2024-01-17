"use client";
import React, { useEffect, useState } from "react";
import AuthLayout from "@/components/Auth/AuthLayout";
import phoneImage from "@/assets/defaultPhone.svg";
import activePhone from "@/assets/activePhone.svg";
import signImage from "@/assets/signin.svg";
import loginImage from "@/assets/login.svg";
import gmailIcon from "@/assets/gmail.svg";
import appleIcon from "@/assets/apple.svg";
import emailIcon from "@/assets/email.svg";
import activeEmail from "@/assets/activeEmail.svg";
import activePassword from "@/assets/activePassword.svg";
import emailIcon2 from "@/assets/defaultEmail.svg";
import passwordIcon from "@/assets/defaultPassword.svg";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/FieldInput";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import eye from "@/assets/eye.svg";
import eyeOff from "@/assets/eye-slash.svg";
import PhoneInput from "@/components/UI/PhoneInput";
import { useRouter } from "next/navigation";

import { emailRegex, phoneNumberRegex, saudiPhoneNumberRegex, } from "@/components/Constants";

const LoginPage = () => {
  const [loginOption, setLoginOption] = useState("phone");
  const [inputs, setInputs] = useState<inputsState>({
    email: "",
    password: "",
  });
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [inputsError, setInputsError] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const setValue = (e: any) => {
    const { value, name } = e.target;
    if (name === "phone") {
      console.log(phone);
      if (!phoneNumberRegex.test(value) && value.length > 0) {
        setPhoneError("Invalid Phone Number");
      } else {
        setPhoneError("");
      }
      setPhone(value);
    } else {
      console.log(inputs);
      setInputsError((prev) => ({ ...prev, [name]: "" }));
      setInputs((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const submitHandler = () => {
    if (loginOption == "phone") {

      if (!saudiPhoneNumberRegex.test(phone)) {
        setPhoneError("Please enter a valid phone number.");
        return;
      } else {
        router.push("/login/verify");
        return;
      }
    } else if (loginOption == "email") {
      if (inputs.email && inputs.password) {
        if (!emailRegex.test(inputs.email)) {
          setInputsError((prev) => ({
            ...prev,
            email: "Please write a correct email",
          }));
          return;
        }
        alert("email and password");
      } else if (inputs.email) {
        if (!emailRegex.test(inputs.email)) {
          setInputsError((prev) => ({
            ...prev,
            email: "Please write a correct email",
          }));
          return;
        }
        setInputsError((prev) => ({
          ...prev,
          password: "Please fill password field",
        }));
        return;
      } else if (inputs.password) {
        setInputsError((prev) => ({
          ...prev,
          email: "Please fill email field",
        }));
        return;
      } else {
        setInputsError((prev) => ({
          email: "Please fill email field",
          password: "Please fill password field",
        }));
        return;
      }
    }
    alert("form submitted");
  };

  return (
    <>
      <AuthLayout
        title="Welcome Back to Scrapyard!"
        subtitle="Log in to your account to continue buying, selling scrap, and auctioning products."
        picture={loginOption == "phone" ? signImage : loginImage}
        submitHandler={submitHandler}
        buttonText="Sign in"
      >
        <div className="w-full max-h-[574px] flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-black text-4xl font-semibold  leading-[48px]">
            Sign In{" "}
          </div>
          <div className="px-px pb-[15px] space-y- w-full mb-3">
            {loginOption == "phone" && (
              <div>
                <div className="text-base w-[174.26px] leading-normal font-normal">
                  With Phone Number
                </div>
                <PhoneInput DefaultImage={phoneImage} activeImage={activePhone} type="text" value={phone} name="phone" placeholder="+9661233453" onChange={setValue} error={phoneError} />
                <span className="text-red-500 text-xs px-2  ">
                  {phoneError}
                </span>
              </div>
            )}
            {loginOption == "email" && (
              <div className="space-y-3">
                <div className="pb-2">
                  <Input DefaultImage={emailIcon2} activeImage={activeEmail} type="text" name="email" value={inputs.email} placeholder="Email address" onChange={setValue} fieldData={inputsError.email} />
                  <span className="text-red-500 text-xs px-2  float-left  ">
                    {inputsError.email}
                  </span>
                </div>
                <div className="">
                  <Input
                    DefaultImage={passwordIcon} activeImage={activePassword} type={showPassword ? "text" : "password"}
                    name="password" value={inputs.password} placeholder="Password" onChange={setValue} icon={showPassword ? eye : eyeOff}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    fieldData={inputsError.password}
                  />
                  <span className="text-red-500 text-xs px-2  float-left  ">
                    {inputsError.password}
                  </span>
                </div>
                <div className="">
                  <Link href="/forget" className="text-slate-950 text-xs font-medium leading-tight float-right hover:text-primary" >
                    Forget Password?
                  </Link>
                  <br />
                </div>
              </div>
            )}

            <div className="flex mb-[18px]">
              <div className="w-[45%] border   my-3 mr-[11px]"></div>
              <div className="text-stone-300">Or</div>
              <div className="w-[45%] border my-3 ml-[11px]"></div>
            </div>
            {/* Continue with gmail button */}

            {loginOption == "phone" && (
              <div className="space-y-3">
                <Button buttonText="Continue with Gmail" icon={gmailIcon} clickHandler={(e) => {
                  e.preventDefault();
                  loginWithGoogle();
                }}
                />
                {/* Continue with Apple */}
                <Button buttonText="Continue with Apple" icon={appleIcon} clickHandler={(e) => {
                  e.preventDefault();
                }}
                />
                {/* Continue with Email or Phone */}

                <Button buttonText="Sign in with Email" icon={emailIcon} clickHandler={(e) => {
                  e.preventDefault();
                  setLoginOption("email");
                }}
                />
              </div>
            )}
            {loginOption == "email" && (
              <Button buttonText="Sign in with Phone" icon={phoneImage} clickHandler={(e) => {
                e.preventDefault();
                setLoginOption("phone");
              }}
              />
            )}
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
interface inputsState {
  email: string;
  password: string;
}
