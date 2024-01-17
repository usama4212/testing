"use client"
import React, { useEffect, useState } from 'react'
import newbg from "@/assets/new-BG.svg";
import Payment from '@/components/Payment';
import PaymentCard from '@/components/PaymentCard';

const PaymentMethad = () => {
    const [isPaymentCard, setIsPaymentCard] = useState(false)
    const [isCreditCardShow, setIsCreditCardShow] = useState(false)

    return (
        <>
            <div className='bg-cover' style={{ backgroundImage: `url(${newbg.src})` }}>
                {(isPaymentCard && !isCreditCardShow) ?
                    <PaymentCard setIsCreditCardShow={setIsCreditCardShow} />
                    :
                    <Payment setIsPaymentCard={setIsPaymentCard} isCreditCardShow={isCreditCardShow} setIsCreditCardShow={setIsCreditCardShow} />}
            </div>
        </>
    );
};

export default PaymentMethad;