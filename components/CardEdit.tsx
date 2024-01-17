import Image from 'next/image'
import React from 'react'
import edit from "@/assets/edit-2.svg";

const CardEdit = ({ image, expiry, name, cardNumber, paymentCardChange }: any) => {
    return (
        <div className='group rounded-lg border border-gray-400 hover:border-[#E9E9E9] flex py-4 mb-6 hover:bg-[#E9E9E9] transition-all duration-700'>
            <Image src={image} alt="apple" className='mx-5' />
            <div className='w-full flex mt-1'>
                <div className='w-1/2'>
                    <div className='text-[16px] text-gray-800 text-center'>{cardNumber}</div>
                </div>
                <div className='w-1/2'>
                    <div className='text-[16px] text-gray-800 text-center'>{expiry}</div>
                </div>
                <div className='w-full flex justify-between px-3'>
                    <div>{name}</div>
                    <div onClick={paymentCardChange} className='cursor-pointer opacity-0 group-hover:opacity-100'>
                        <Image src={edit} alt="apple" className='mx-5' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardEdit