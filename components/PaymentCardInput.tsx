import React from 'react'

const PaymentCardInput = ({ text, type, name, placeholder, onChange, onKeyDown, value }: any) => {
    return (
        <div className='mt-8'>
            <div className='mb-1'>{text}</div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                // onKeyDown = {text == "Expiry Date" ? onKeyDown : {}}
                autoComplete="off"
                className="focus:border focus:border-gray-800 focus:outline-none p-4 ps-2 w-full bg-white rounded-[10px] border-[1px] border-gray-400"
            />
        </div>
    )
}

export default PaymentCardInput