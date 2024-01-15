import Breadcrumb from "@/components/Breadcrumb";
import CardsCollection from "@/components/CardsCollection";
import Single from "@/components/Product/Single";
import ScrapApp from "@/components/ScrapApp";
import ScrapSell from "@/components/ScrapSell";
import React from "react";

export default function SingleProduct() {
  return (
    <>
      {" "}
      <div className="max-w-7xl mx-auto">
        <Breadcrumb name="products" />
        <Single />
        <CardsCollection title={"Similar Auctions"} />
        <ScrapSell />
        <CardsCollection title={"Recently viewed Auctions"} />

      </div>
      <ScrapApp />
      
    </>
  );
}
