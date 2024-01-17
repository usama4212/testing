import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

const Button = ({ icon, clickHandler, buttonText , style}: ButtonProps) => {
  return (
    <>
      <div className="relative flex  justify-center  ">
        <button
        type="button"
          onClick={clickHandler}
          className=" focus:border-gray-400 focus:border  focus:outline-none  py-4  w-full    rounded-[10px] border-[0.2px] text-sm font-medium"
       style={style}
       >
          <Image src={icon} alt="icon" className="inline mr-2"></Image>
          {buttonText}
        </button>
      </div>
    </>
  );
};

interface ButtonProps {
  icon: StaticImageData;
  style?:object;
  clickHandler: (e:any) => void;
  buttonText: string;
}
export default Button;
