"use client"
import React from 'react'
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetails from '@/components/ProductDetails';


const page = ({ params }: { params: { category: string } }) => {

    const decodedName = params.category ? decodeURIComponent(params.category) : null;


    return (
        <div className='bg-[#e9e9e9]'>
            <Breadcrumb name = {decodedName}/>
            <ProductDetails name = {decodedName}/>
        </div>
    )
}

export default page