import React from 'react'
import bgYellow from "@/assets/BGYELLOW.png";
import auctionCard1 from "@/assets/auction-end-card-1.svg";
import auctionCard2 from "@/assets/auction-end-card-2.svg";
import auctionElectronics from "@/assets/auction-electronics.png";
import auctionGadgets from "@/assets/auction-gadgets.png";
import auctionMobile from "@/assets/auction-mobile.png";
import AuctionEndCard from './AuctionEndCard';

const AuctionEnd = () => {

    return (
        <div className=' mt-10 relative'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgYellow.src})` }}></div>
            <div className="container mx-auto my-8 py-24 relative z-10">
                <div className="text-stone-900 text-4xl font-extrabold leading-normal text-center">Auctions Ending Soon</div>

                <div className="flex flex-col lg:flex-row mt-8 space-y-4 lg:space-y-0 lg:space-x-4 mx-auto">
                    <AuctionEndCard image={auctionCard1} scrapImage = {auctionElectronics} text = {"Electronics"}/>
                    <AuctionEndCard image={auctionCard2} scrapImage = {auctionGadgets} text = {"Tech Gadgets"}/>
                    <AuctionEndCard image={auctionCard1} scrapImage = {auctionMobile} text = {"iPhone Auction"}/>
                </div>

            </div>
        </div>


    )
}

export default AuctionEnd;
