import React, { useEffect, useState } from "react";
import downArrow from "@/assets/down-arrow.svg";
import listView from "@/assets/list-view.svg";
import gridView from "@/assets/grid-view.svg";
import Image from "next/image";
import CategoryCard from "./CategoryCard";
import laptop from "@/assets/laptop.jpeg";
import ScrapApp from "./ScrapApp";
import Select from "react-select";
import { customStyles } from "./CustomeStyle";
import { categories } from "./Constants";
import Card from "./UI/Card";

const ProductDetails = ({ name }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [view, setView] = useState("list");
  const [sortBy, setSortBy] = useState("default");
  const [currentSubcategories, setCurrentSubcategories] = useState<string[]>(
    []
  );

  const subCategories = [
    "Mobile Phones & Accessories",
    "Computers & Tablets",
    "Cameras & Photography Equipment",
    "Televisions & Home Audio Systems",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleView = (newView: any) => {
    setView(newView);
  };

  const sortByOptions = [
    { value: "default", label: "Newly Listed" },
    { value: 'name', label: 'Newly Name' },
    { value: 'date', label: 'Newly Date' },
  ];

  const handleSortByChange = (value: any) => {
    setSortBy(value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setView("grid");
      else setView("list");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const selectedCategory = categories.find(
      (category) => category.name === name
    );
    if (selectedCategory) {
      setCurrentSubcategories(selectedCategory.subcategory);
    }
  }, [name]);

  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto flex flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-1/4 lg:w-1/4">
            <div className="text-black text-lg sm:text-4xl font-extrabold mb-5 mt-8 ml-4">
              Filters
            </div>
            <div className="border-b border-black w-full"></div>
            <div className="text-black text-lg sm:text-2xl font-extrabold mb-4 mt-5 ml-4">
              Price
            </div>
            <div className="text-black text-lg sm:text-2xl font-extrabold mb-4 mt-5 ml-4">
              Categories
            </div>
            {/* <div className='text-black text-lg sm:text-lg  mb-4 mt-3 ml-4'>All Categories</div> */}

            <div className="mb-4">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="text-black text-lg sm:text-xl font-bold ml-4">
                  {name}
                </div>
                <Image
                  className={`object-cover ml-1 ${isDropdownOpen
                    ? "rotate-180 duration-1000"
                    : "duration-1000"
                    }`}
                  src={downArrow}
                  alt="Card Image"
                />
              </div>
              {isDropdownOpen && (
                <div className="mt-2 sm:mt-0">
                  {currentSubcategories.map((val: any) => (
                    <div
                      key={val}
                      className="py-2 pl-4 hover:bg-[#d9d9d9] hover:text-black transition duration-300 ease-in-out rounded-md text-gray-700 cursor-pointer"
                    >
                      {val}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-3/4 lg:w-3/4 ml-0 md:ml-5 lg:ml-5 mt-1 sm:mt-16">
            <div className="sm:flex justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
                <div className="text-black text-center font-bold p-1 bg-[#ffc700] rounded-md">
                  1000+ Auctions
                </div>
              </div>
              <div className="w-full flex justify-center items-end sm:flex-row sm:items-center sm:justify-end">
                <div className="mb-2 sm:mb-0">
                  <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center space-x-4 py-3">
                      <div className="text-md font-bold">View</div>
                      <div>
                        <Image
                          onClick={() => toggleView("list")}
                          className={`${view === "list" && "bg-[#ffc700]"
                            } rounded-full w-8 h-8 cursor-pointer p-1`}
                          src={listView}
                          alt="List View"
                        />
                      </div>
                      <div>
                        <Image
                          onClick={() => toggleView("grid")}
                          className={`${view === "grid" && "bg-[#ffc700]"
                            } rounded-full w-8 h-8 cursor-pointer p-1`}
                          src={gridView}
                          alt="Grid View"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block border-l border-black h-[45px] ml-3 sm:mr-2"></div>

                <div className="space-x-4 py-2">
                  <div className="relative inline-block text-left">
                    <div className="flex">
                      <div className="text-black-900 font-bold mr-2 mt-2 sm:mt-2">
                        Sort by <span className='ml-3'>:</span>
                      </div>
                      <div className='w-[170px]'>
                        <Select
                          value={sortByOptions.find(
                            (option) => option.value === sortBy
                          )}
                          onChange={(selectedOption: any) =>
                            handleSortByChange(selectedOption.value)
                          }
                          options={sortByOptions}
                          className=""
                          isSearchable={false}
                          styles={customStyles}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-black w-full mb-4 mt-4"></div>
            <div
              className={`grid ${view === "list"
                ? "grid-cols-1 gap-1"
                : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
                } `}
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <CategoryCard
                  key={index}
                  view={view}
                  index={index}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                />
              ))}
            </div>

            <div className="w-full text-md font-bold flex justify-center my-5">
              <button className="text-black text-md font-bold p-2 border border-black rounded-[5px] bg-white">
                Load More
              </button>
            </div>
            <div className="text-black text-lg sm:text-lg mt-3">
              Recently Viewed
            </div>
            <div className="border-b border-black w-full mb-2"></div>
            <div className="flex">
              <Card
                cardImage={laptop}
                scrapTitle={"Electric Heater"}
                classname={"1/3"}
              />
              <Card
                cardImage={laptop}
                scrapTitle={"IPhone 14"}
                classname={"1/3"}
              />
              <Card
                cardImage={laptop}
                scrapTitle={"Air Conditionar"}
                classname={"1/3"}
              />
            </div>
          </div>
        </div>
      </div>
      <ScrapApp />

    </>
  );
};

export default ProductDetails;
