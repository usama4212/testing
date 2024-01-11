import React from "react";
import Navbar from "@/components/Layout/Navbar";
import SubHeader from "@/components/Layout/SubHeader";

export default function MainHeader() {
  return (
    <>
      <div className="bg-white ">
        <Navbar />
        <SubHeader />
      </div>{" "}
    </>
  );
}
