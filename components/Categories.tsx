import Image from 'next/image'
import React from 'react'
import electronics from "@/assets/electronics-image.svg";
import fashion from "@/assets/fashion-image.svg";
import homeGarden from "@/assets/home-garden-image.svg";
import automotive from "@/assets/automotive-image.svg";
import collectionArt from "@/assets/collection-art-image.svg";
import toysHobies from "@/assets/toys-hobbies-image.svg";
import sportsLeisure from "@/assets/sports-leisure-image.svg";
import moviesMusic from "@/assets/movies-music-image.svg";
import healthBeauty from "@/assets/health-beauty-image.svg";
import babyProduct from "@/assets/baby-product-image.svg";
import petSupplies from "@/assets/pet-supplies-image.svg";
import others from "@/assets/others-image.svg";
import { useRouter } from "next/navigation";

const Categories = () => {

    const navigate = useRouter()

    const categoryImage = [electronics, fashion, homeGarden, automotive, collectionArt, toysHobies, sportsLeisure, moviesMusic, healthBeauty, babyProduct, petSupplies, others]
    const categoryName = ["Electronics", "Fashion", "Home & Garden", "Automotive", "Collectibles & Art", "Toys & Hobbies", "Sports & Leisure", "Movies & Music", "Health & Beauty", "Baby Products", "Pet Supplies", "Others"]

    const categories = categoryImage.map((val, i) => ({ id: i + 1, image: val, title: categoryName[i] }));
    

    return (
        <div>
            <div className='mx-4 md:mx-8 lg:mx-16 mt-10'>
                <div className="container mx-auto">
                    <div className='text-black text-lg sm:text-2xl font-extrabold mb-8 mt-12 ml-2'>
                        All Categories
                    </div>
                    <div className="flex flex-wrap">
                        {categories.map((val: any) => {
                            return (
                                <div key={val.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
                                    <div onClick={()=>navigate.push(`/products/${val.title}`)} className={`${val.title === "Others" ? 'bg-[#ffc700]' : 'bg-white'} p-6 rounded-2xl shadow-md flex flex-col items-center cursor-pointer transition-transform duration-300 hover:shadow-gray-600`}>
                                        <Image className="w-[62px] h-[62px] object-cover mb-4 rounded-md" src={val.image} alt="Card Image" />
                                        <div className="text-black text-base font-normal font-Poppins leading-normal">{val.title}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
