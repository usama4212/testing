"use client";
import React from "react";
import ProductDetails from "@/components/ProductDetails";
import Breadcrumb2 from "@/components/UI/Breadcrumb";

const page = ({ params }: { params: { category: string } }) => {
    const decodedName = params.category
        ? decodeURIComponent(params.category)
        : null;
    const name = decodedName?.replace(/\b\w/g, (char) => char.toUpperCase());
    const breadCrumbItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Categories",
            href: "/categories",
        },
        {
            label: name ? name : "",
        },
    ];

    return (
        <div className="bg-[#e9e9e9]  mx-auto">
            <Breadcrumb2 items={breadCrumbItems} />
            <ProductDetails name={name} />
        </div>
    );
};

export default page;
