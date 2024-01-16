"use client";
import CardsCollection from "@/components/CardsCollection";
import Single from "@/components/Product/Single";
import ScrapApp from "@/components/ScrapApp";
import ScrapSell from "@/components/ScrapSell";
import Breadcrumb2 from "@/components/UI/Breadcrumb";
import Modal from "@/components/UI/Modal";
import React from "react";

export default function SingleProduct({ params }: any) {
  const product = decodeURIComponent(params.product);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product },
  ];
  return (
    <>
      {" "}
      <div className="max-w-7xl mx-auto">
        <Breadcrumb2 items={breadcrumbItems} />
        <Single />

        <CardsCollection title={"Similar Auctions"} />
        <ScrapSell />
        <CardsCollection title={"Recently viewed Auctions"} />
      </div>
      <ScrapApp />
    </>
  );
}
