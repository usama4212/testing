"use client"
import React, { useEffect, useState } from 'react'
import ScrapSell from '@/components/ScrapSell';
import ScrapApp from '@/components/ScrapApp';
import Footer from '@/components/Footer';
import Payment from '@/components/Payment'; 
import PaymentCard from '@/components/PaymentCard'; 

const PaymentMethad = () => {
    const [isPaymentCard, setIsPaymentCard] = useState(false)

    useEffect(() => {
      console.log("isPaymentCard", isPaymentCard);
      
    }, [isPaymentCard])
    return (
        <>
            <div className='bg-[#e9e9e9]'>
                {isPaymentCard ? <PaymentCard /> : <Payment setIsPaymentCard={setIsPaymentCard}/>}
                <ScrapSell />
                <ScrapApp />
                <Footer />
            </div>
        </>
    );
};

export default PaymentMethad;

