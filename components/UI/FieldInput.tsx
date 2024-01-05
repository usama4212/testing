import React, { useState } from 'react'
import Image from "next/image";

const Input = ({ DefaultImage, activeImage, type, placeholder, name, onChange, onClick, icon, formData,  }: any) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true)

    const handleBlur = () => setIsFocused(false)


    return (
        <div className="px-px w-full">
            <div className="relative">
                <div
                    className="absolute inset-y-0 start-0 pl-3 flex items-center ps-3 pointer-events-none">
                    <Image src={isFocused ? activeImage : DefaultImage} alt="Image"></Image>
                </div>
                <input
                    type={type}
                    name={name}
                    className=" focus:border-gray-400 focus:border focus:outline-none  p-4 ps-10 w-full  bg-white  rounded-[10px] border-[0.2px] "
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete="off"
                />
                {(name == "password" && formData.password !== '') && <span className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={onClick} ><Image src={icon} alt='image'/></span>}
                {(name == "confirmPassword" && formData.confirmPassword !== '') && <span className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={onClick} ><Image src={icon} alt='image' /></span>}
            </div>
        </div>
    )
}

export default Input