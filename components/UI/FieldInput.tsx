import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Input = ({
  DefaultImage,
  activeImage,
  type,
  placeholder,
  name,
  onChange,
  onClick,
  icon,
  formData,
  value,
  fieldData,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <div className="px-px w-full">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 pl-3 flex items-center ps-3 pointer-events-none">
          <Image
            src={isFocused ? activeImage : DefaultImage}
            alt="Image"
          ></Image>
        </div>
        <input
          type={type}
          name={name}
          className={`focus:border ${
            fieldData ? "focus:border-red-500" : "focus:border-gray-400"
          }  focus:outline-none  p-4 ps-10 w-full bg-white rounded-[10px] border-[1px] ${
            fieldData ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {name == "password" && formData?.password !== "" && (
          <span
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
          >
            {icon && <Image src={icon} alt="image" />}
          </span>
        )}
        {name == "confirmPassword" && formData?.confirmPassword !== "" && (
          <span
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
          >
            {icon && <Image src={icon} alt="image" />}
          </span>
        )}
      </div>
    </div>
  );
};
interface InputProps {
  DefaultImage: StaticImageData;
  activeImage: StaticImageData;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: any) => void;
  onClick?: () => void;
  icon?: StaticImageData;
  formData?: formData;
  value?: string;
  fieldData?: any;
}
interface formData {
  userName?: string;
  email?: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}
export default Input;
