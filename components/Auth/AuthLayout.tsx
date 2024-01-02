import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import bg from "/assets/bg2.svg";

const AuthLayout = ({
  title,
  subtitle,
  picture,
  children,
  submitHandler,
  buttonText,
}: AuthLayoutProps) => {
  return (
    <div className=" min-h-screen   w-full flex ">
      <div className="md:w-[50%] bg-primary min-h-screen flex items-center justify-center backdrop-blur-xl">
        <div className=" justify-center">
          <div className="flex justify-center">
            <Image alt="sign in " src={picture} className="" />
          </div>
          <div className="text-center">
            <span className="text-black text-3xl font-semibold  leading-[60px]">
              {title} <br />
            </span>
            <span className="text-black text-sm font-normal  leading-7">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`md:w-[50%]  min-h-screen  flex items-center justify-center  bg-no-repeat bg-cover   `}
        style={{ backgroundImage: `url(${bg.src}) `}}
      >
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
          }}
          className="md: w-1/2"
        >
          {children}
          <input
            className="bg-primary p-4 w-full flex justify-center rounded-lg font-semibold text-base cursor-pointer hover:shadow-md"
            type="submit"
            value={buttonText}
          />
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
