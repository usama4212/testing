import React from 'react'
import Navbar from "@/components/Layout/Navbar";
import SubHeader from "@/components/Layout/SubHeader";
import AllCategories from '../UI/AllCategories';

export default function MainHeader() {
  return (
    <>
    <div className="bg-white ">
        <Navbar />
        <SubHeader />
        {/* <AllCategories/> */}
      </div>{" "}</>
  )
}
