import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import bg from "/assets/bg2.svg";
import Link from "next/link";

const AuthLayout = ({
  title,
  subtitle,
  picture,
  children,
  submitHandler,
  buttonText,
}: AuthLayoutProps) => {
  return (
    <div className=" min-h-screen w-full sm:flex">
      <div className=" md:w-[50%] bg-primary md:min-h-screen flex items-center justify-center backdrop-blur-xl">
        <div className=" justify-center px-5 md:px-0 lg:w-[85%] xl:w- space-y-5">
          <div className="flex justify-center">
            <Image alt="sign in " src={picture} className="" />
          </div>
          <div className="text-center">
            <span className="text-black text-2xl font-semibold   ">
              {title} <br />
            </span>
            <span className="text-center text-black text-sm font-normal max-w-[70%] block mx-auto pt-2 ">
              {subtitle}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`min-w-[50%] md:w-[50%]  min-h-screen flex items-center justify-center  bg-no-repeat bg-cover  `}
        style={{ backgroundImage: `url(${bg.src}) ` }}
      >
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            submitHandler();
          }}
          className="lg:max-w-[60%] xl:max-w-[55%] md:w-3/4 w-full  mx-auto py-4 px-4 md:px-0"
        >
          {children}
          <input
            className="bg-primary p-4 w-full flex justify-center rounded-lg font-semibold text-base cursor-pointer hover:shadow-md"
            type="submit"
            value={buttonText}
          />

          {buttonText == "Create Account" && (
            <div className="mt-5 flex justify-center text-[15px] font-medium">
              Already Have An Account?
              <span className="text-primary ml-2 cursor-pointer">
                <Link href="/login">Sign In</Link>
              </span>
            </div>
          )}
          {buttonText == "Sign in" && (
            <div className="mt-5 flex justify-center text-[15px] font-medium">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't Have An Account?.
              <span className="text-primary ml-2 cursor-pointer">
                <Link href="/signup">Sign Up</Link>
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  picture: StaticImageData;
  children: ReactNode;
  submitHandler: () => void;
  buttonText: string;
}

export default AuthLayout;
