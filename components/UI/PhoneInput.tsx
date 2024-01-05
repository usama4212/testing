import Image from 'next/image'
import React, { useState } from 'react'


const PhoneInput = ({
    DefaultImage,
    activeImage,
    type,
    placeholder,
    name,
    onChange,
    
  }: any) => {
  const [isFocused, setIsFocused] = useState(false);

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
        className=" focus:border-gray-400 focus:border focus:outline-none  p-4 ps-10 w-full  bg-white  rounded-[10px] border-[0.2px] "
        placeholder={placeholder}
        onChange={onChange}
        // pattern='/^(?:\+?966|00966|0)?\s?5[0-9]{8}$/'
        onFocus={()=>{setIsFocused(true)}}
        onBlur={()=>{setIsFocused(false)}}
      />
      
    </div>
  </div>
  )
}

export default PhoneInput