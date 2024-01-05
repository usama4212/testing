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

const LoginPage = () => {
  const [loginOption, setLoginOption] = useState("phone");
  const [inputs, setInputs] = useState<inputsState>({
    email: "",
    password: "",
  });
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const setValue = (e: any) => {
    const { value, name } = e.target;
    if (name === "phone") {
      console.log(phone);
      const phoneNumberRegex = /^[+0-9][0-9]*$/;
      if (!phoneNumberRegex.test(value) && value.length > 0) {
        setPhoneError("Invalid Phone Number");
      } else {
        setPhoneError("");
      }
      setPhone(value);
    } else {
      console.log(inputs);
      setPasswordError("")
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
      const saudiPhoneNumberRegex = /^(?:\+?966|00966|0)?\s?5[0-9]{8}$/;
      if (!saudiPhoneNumberRegex.test(phone)) {
        setPhoneError("Please enter a valid phone number.");
        return;
      }
    } else if (loginOption == "email") {
      if (inputs.email && inputs.password) {
        alert("email and password");
      } else {
        setPasswordError("Please fill all details");
        return;
      }
    }
    alert("form submitted");
  };

  return (
    <>
      <AuthLayout
        title="Welcome"
        subtitle="You can connect with thousands of Buyers and Sellers"
        picture={loginOption == "phone" ? signImage : loginImage}
        submitHandler={submitHandler}
        buttonText="Sign in"
      >
        <div className="w-full max-h-[574px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="text-black text-4xl font-semibold  leading-[48px]">
            Sign In{" "}
          </div>
          <div className="px-px pb-[15px] space-y- w-full mb-3">
            {loginOption == "phone" && (
              <div>
                <div className="text-base w-[174.26px] leading-normal font-normal">
                  With Phone Number
                </div>

                <PhoneInput
                  DefaultImage={phoneImage}
                  activeImage={activePhone}
                  type="text"
                  name="phone"
                  placeholder="+9661233453"
                  onChange={setValue}
                />

                <span className="text-red-500 text-sm px-4  ">
                  {phoneError}
                </span>
              </div>
            )}
            {loginOption == "email" && (
              <div className="space-y-3">
                <Input
                  DefaultImage={emailIcon2}
                  activeImage={activeEmail}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={setValue}
                />
                <Input
                  DefaultImage={passwordIcon}
                  activeImage={activePassword}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={setValue}
                  icon={showPassword ? eye : eyeOff}
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
                <div className="">
                  <span className="text-red-500 text-sm px-4 float-left  ">
                    {passwordError}
                  </span>
                  <Link
                    href="/forget"
                    className="text-slate-950 text-xs font-medium leading-tight float-right hover:text-primary"
                  >
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
            <div className="space-y-3">
              <Button
                buttonText="Continue with Gmail"
                icon={gmailIcon}
                clickHandler={(e) => {
                  e.preventDefault();
                  loginWithGoogle();
                }}
                style={{}}
              />
              {/* Continue with Apple */}
              <Button
                buttonText="Continue with Apple"
                icon={appleIcon}
                clickHandler={(e) => {
                  e.preventDefault();
                }}
                style={{}}
              />
              {/* Continue with Email or Phone */}
              {loginOption == "phone" ? (
                <Button
                  buttonText="Sign in with Email"
                  icon={emailIcon}
                  clickHandler={(e) => {
                    e.preventDefault();
                    setLoginOption("email");
                  }}
                  style={{}}
                />
              ) : (
                <Button
                  buttonText="Sign in with Phone"
                  icon={phoneImage}
                  clickHandler={(e) => {
                    e.preventDefault();
                    setLoginOption("phone");
                  }}
                  style={{}}
                />
              )}
            </div>
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