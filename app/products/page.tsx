"use client"
import Breadcrumb from '@/components/Breadcrumb';
import React from 'react'

const page = () => {

    const routes = [
        { name: 'Home', path: '/' },
        { name: 'Category', path: '/category' },
        { name: 'Product', path: '/category/product' },
    ];
    return (
        <div className='bg-[#e9e9e9]'>
            <div>
                <Breadcrumb routes={routes} />
                {/* Your page content goes here */}
            </div>

        </div>
    )
}

export default page
