import React, { useState } from "react";

export default function CategoryDropdown({ showCategoryDropdown, setShowCategoryDropdown, setShowPriceDropdown , selectedOption , setSelecetedOption }: any) {
  const [slectedCategory, setSelecetedCategory] = useState("");
  // const [selectedOption, setSelecetedOption] = useState("Categories");
  const categories = [
    {
      name: "Electronics",
      subcategory: ["Mobile Phones & Accessories", "Computers & Tablets", "Cameras & Photography", "Televisions & Home Accessories", "Video Games & Consoles", " Wearable Technology",],
    },
    {
      name: "Fashion",
      subcategory: ["Women's Clothing", "Men's Clothing", "Children's Clothing", "Shoes", "Accessories (Bags, Belts, Hats)", "Jewelry & Watches",],
    },
    {
      name: "Home & Garden",
      subcategory: ["Furniture", "Home Decor", "Garden & Outdoor", "Kitchenware", "Home Appliances", "Tools & DIY",],
    },
    {
      name: "Automotive",
      subcategory: ["Cars & Motorcycles", "Automotive Parts & Accessories", "Commercial Vehicles", "Boats & Watercraft",],
    },
    {
      name: "Collectibles & Art",
      subcategory: ["Antiques", "Art (Paintings, Sculptures)", "Coins & Stamps", "Memorabilia (Sports, Movies, Music)", "Vintage Collectibles",],
    },
    {
      name: "Toys & Hobbies",
      subcategory: ["Toys & Games", "Dolls & Bears", "Model Trains & RC Vehicles", "Crafts", "Musical Instruments",],
    },
    {
      name: "Sports & Leisure",
      subcategory: ["Sports Equipment", "Fitness & Yoga", "Camping & Hiking Gear", "Water Sports", "Winter Sports",],
    },
    {
      name: "Books, Movies & Music",
      subcategory: ["Books", "Movies (DVDs, Blu-rays)", "Music (CDs, Vinyl Records)", "Musical Instruments & Gear",],
    },
    {
      name: "Health & Beauty",
      subcategory: ["Cosmetics & Skincare", "Health Products", "Fragrances", "Hair Care Products", "Bath & Body Products",],
    },
    {
      name: "Baby Products",
      subcategory: ["Baby Clothing", "Nursery Furniture", "Toys & Activities", "Feeding Supplies", "Strollers & Car Seats",],
    },
    {
      name: "Pet Supplies",
      subcategory: ["Pet Food & Treats", "Pet Accessories (Collars, Beds)", "Aquarium & Fish Supplies", "Bird Supplies", "Small Animal Supplies",],
    },
    {
      name: "Computers & Networking",
      subcategory: ["Laptops & Desktops", "Computer Components", "Networking Devices", "Printers & Scanners",],
    },
  ];
  return (
    <>
      <div className="dropdown inline-block relative " >
        <button
          type="button"
          onClick={() => {
            if (!showCategoryDropdown) {
              setShowPriceDropdown(false)
            }
            setShowCategoryDropdown(!showCategoryDropdown);
            setSelecetedCategory("")
          }}
          className="w-[320px]  border-l-2  py-1 relative text-left"
        >
          <span className="text-left ps-2">{selectedOption}</span>
          <svg className={`mx-1 w-4 h-4 inline ${showCategoryDropdown ? "" : "rotate-180"} transition duration-500 absolute right-2 top-1/2 transform -translate-y-1/2`} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"   >
            <path d="M15 13L10 8L5 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {showCategoryDropdown && (
          <ul className="dropdown-content absolute bg-white z-10 text-gray-900 border pt-1 w-[320px]">
            {categories.map((category, index) => {
              return (
                <li key={index} className="dropdown" onMouseEnter={() => { setSelecetedCategory(category.name); }} onMouseLeave={() => { setSelecetedCategory(""); }}     >
                  <span className={` hover:bg-gray-200 cursor-pointer py-2 px-4 block whitespace-no-wrap ${selectedOption == category.name && "bg-gray-200"}`} onClick={() => {
                    setSelecetedOption(category.name);
                    setShowCategoryDropdown(!showCategoryDropdown);
                  }}
                  >
                    {category.name}
                  </span>
                  {slectedCategory == category.name && (
                    <ul className="dropdown-content absolute bg-white text-gray-900  ml-[320px] border -mt-10">
                      {category.subcategory.map((sub, subindex) => {
                        return (
                          <li key={subindex} className="w-52" onClick={() => {
                            setSelecetedOption(sub);
                            setShowCategoryDropdown(!showCategoryDropdown);
                          }}
                          >
                            <span className={`hover:bg-gray-200  py-2 px-4 block cursor-pointer whitespace-no-wrap ${selectedOption == sub && "bg-gray-200"}`}>
                              {sub}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
