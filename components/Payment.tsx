import React from 'react'
import Image from 'next/image'
import creditCard from "@/assets/credit-card.svg";
import apple from "@/assets/apple.svg";
import google from "@/assets/google.svg";
import Visa from "@/assets/Visa.svg";

import credit2 from "@/assets/credit2.svg";
import CardEdit from './CardEdit';

const Payment = ({ setIsPaymentCard, isCreditCardShow, setIsCreditCardShow }: any) => {

    const paymentCardChange = () => {
        setIsPaymentCard(true)
        setIsCreditCardShow(false)
    }

    return (
        <div className='mx-4 md:mx-8 lg:mx-16 '>
            <div className="container mx-auto pb-28 ">

                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="lg:w-3/5 bg-white flex flex-col lg:flex-row justify-center items-center lg:items-stretch  rounded-xl">
                        <div className="w-full lg:w-3/4 text-center lg:text-left px-10 lg:px-0">
                            <div className="text-3xl font-bold my-10 text-center mt-16">Payment Method</div>
                            {
                            isCreditCardShow && <>
                                <CardEdit image={Visa} expiry={"04/24"} name={"John"} cardNumber={"4855 **** **** ****"} paymentCardChange ={paymentCardChange}/>
                                <CardEdit image={credit2} expiry={"12/25"} name={"Doe"} cardNumber={"5795 **** **** ****"} paymentCardChange ={paymentCardChange}/>
                            </>
                            }
                            <div onClick={paymentCardChange} className='rounded-lg border border-gray-400 hover:border-[#E9E9E9] flex  py-4 cursor-pointer mb-6 hover:bg-[#E9E9E9] transition-all duration-700'>
                                <Image src={creditCard} alt="apple" className='mx-5' />
                                <div className=' font-medium mt-1 text-gray-500'>New Payment Card</div>
                            </div>
                            <div className="border-b-2 border-gray-300 w-full my-6"></div>
                            <div className='rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-6 hover:bg-[#fcc700] transition-all duration-700'>
                                <div><Image src={apple} alt="apple" /></div>
                                <div className='ml-2 font-bold'>Apple Pay</div>
                            </div>
                            <div className='rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-6 hover:bg-[#fcc700] transition-all duration-700'>
                                <div><Image src={google} alt="apple" /></div>
                                <div className='ml-2 font-bold'>Google Pay</div>
                            </div>
                            <div className='rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-6 hover:bg-[#fcc700] transition-all duration-700'>
                                <div><Image src={google} alt="apple" /></div>
                                <div className='ml-2 font-bold'>Tebby Pay</div>
                            </div>
                            <div className='rounded-lg border border-gray-400 hover:border-[#fcc700] flex justify-center py-4 cursor-pointer mb-20 hover:bg-[#fcc700] transition-all duration-700'>
                                <div><Image src={google} alt="apple" /></div>
                                <div className='ml-2 font-bold'>Tamara Pay</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment