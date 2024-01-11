"use client"
import AuctionEnd from '@/components/AuctionEnd'
import CardsCollection from '@/components/CardsCollection'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import ScrapApp from '@/components/ScrapApp'
import ScrapSell from '@/components/ScrapSell'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#e9e9e9]'>
      <ImageSlider />
      <Categories />
      <CardsCollection title = {"Featured Auctions"} />
      <AuctionEnd />
      <CardsCollection title = {"Electronics Auction"} />
      <CardsCollection title = {"Baby Products Auction"} />
      <CardsCollection title = {"Clothes Auction"} />
      <ScrapSell/>
      <ScrapApp/>
      <Footer/>
    </div>
  )
}

export default page
