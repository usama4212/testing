"use client"
import React from 'react'
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetails from '@/components/ProductDetails';


const page = ({ params }: { params: { name: string } }) => {


    return (
        <div className='bg-[#e9e9e9]'>
            <Breadcrumb name = {params.name}/>
            <ProductDetails name = {params.name}/>
        </div>
    )
}

export default page
