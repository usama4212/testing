"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ProductDetails from "@/components/ProductDetails";

const page = ({ params }: { params: { category: string } }) => {
  return (
    <div className="bg-[#e9e9e9]">
      <Breadcrumb name={params.category} />
      <ProductDetails name={params.category} />
    </div>
  );
};

export default page;
