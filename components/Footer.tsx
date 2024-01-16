import React from 'react';
import twitter from "@/assets/twitter.svg";
import pineterast from "@/assets/pineterast.svg";
import facebook from "@/assets/facebook.svg";
import linkedin from "@/assets/linkedin.svg";
import emailIcon from "@/assets/email-icon.svg";
import phoneIcon from "@/assets/phone-icon.svg";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-white to-[#ededed]/90 text-black">
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center lg:py-32 py-16">
                <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                    <div className="text-2xl font-semibold mb-4 text-black">Scrapyard</div>
                    <div className="flex space-x-4 items-center mt-2">
                        <div className="rounded-full bg-yellow-400 flex items-center justify-center w-[32px] h-[32px] cursor-pointer">
                            <Image src={twitter} alt="Twitter logo" className="w-[24px] h-[24px] object-cover rounded-full" />
                        </div>
                        <div className="rounded-full bg-yellow-400 flex items-center justify-center w-[32px] h-[32px] cursor-pointer">
                            <Image src={pineterast} alt="Pinterest logo" className="w-[24px] h-[24px] object-cover rounded-full" />
                        </div>
                        <div className="rounded-full bg-yellow-400 flex items-center justify-center w-[32px] h-[32px] cursor-pointer">
                            <Image src={facebook} alt="Facebook logo" className="w-[24px] h-[24px] object-cover rounded-full" />
                        </div>
                        <div className="rounded-full bg-yellow-400 flex items-center justify-center w-[32px] h-[32px] cursor-pointer">
                            <Image src={linkedin} alt="LinkedIn logo" className="w-[24px] h-[24px] object-cover rounded-full" />
                        </div>
                    </div>
                    <div className="border-b border-black w-full lg:w-1/2 my-6 "></div>
                    <div className='lg:w-2/3 w-full text-black text-center lg:text-left'>Selling Scrap and items through Scrapyard and elevate your experience</div>
                </div>

                <div className="flex items-center">
                    <div className="mr-8 space-y-5">
                        <h3 className="text-lg font-semibold mb-2 text-black">Contact Us</h3>
                        <div className="flex items-center space-x-2">
                            <Image src={emailIcon} alt="Email icon" className='mr-1' />
                            <div className='text-black'>
                                <div>Email</div>
                                <div>Contact@Scrapyard.com</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src={phoneIcon} alt="Phone icon" className='mr-1' />
                            <div className='text-black'>
                                <div>Phone</div>
                                <div>+966 687 - 5892</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-black w-full"></div>
            <div className='text-black text-center py-4'>Copyright © Scrapyard 2023</div>
        </footer>
    );
};

export default Footer;
