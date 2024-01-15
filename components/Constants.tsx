export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const regexError = "Please Enter valid Email Address";
export const upperCaseRegex = /[A-Z]/;
export const specialCharacterRegex = /[!@#$%^&*]/;
export const numberRegex = /[0-9]/;
export const onlyNumberRegex = /^[0-9]*$/;
export const withoutNumberRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/;
export const withoutSpecialRegex = /^(?=.*[A-Z])(?=.*[0-9]).*$/;
export const withoutUppercaseRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
export const passwordRegexer = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;

export const phoneNumberRegex = /^[+0-9][0-9]*$/;
export const saudiPhoneNumberRegex = /^(?:\+?966|00966|0)?\s?5[0-9]{8}$/;
export const phoneRegexError = "Please enter A Valid phone number";

export const categories = [
    {
      name: "Electronics",
      subcategory: [
        "Mobile Phones & Accessories",
        "Computers & Tablets",
        "Cameras & Photography Equipment",
        "Televisions & Home Audio Systems",
        "Video Games & Consoles",
        " Wearable Technology",
      ],
    },
    {
      name: "Fashion",
      subcategory: [
        "Women's Clothing",
        "Men's Clothing",
        "Children's Clothing",
        "Shoes",
        "Accessories (Bags, Belts, Hats)",
        "Jewelry & Watches",
      ],
    },
    {
      name: "Home & Garden",
      subcategory: [
        "Furniture",
        "Home Decor",
        "Garden & Outdoor",
        "Kitchenware",
        "Home Appliances",
        "Tools & DIY",
      ],
    },
    {
      name: "Automotive",
      subcategory: [
        "Cars & Motorcycles",
        "Automotive Parts & Accessories",
        "Commercial Vehicles",
        "Boats & Watercraft",
      ],
    },
    {
      name: "Collectibles & Art",
      subcategory: [
        "Antiques",
        "Art (Paintings, Sculptures)",
        "Coins & Stamps",
        "Memorabilia (Sports, Movies, Music)",
        "Vintage Collectibles",
      ],
    },
    {
      name: "Toys & Hobbies",
      subcategory: [
        "Toys & Games",
        "Dolls & Bears",
        "Model Trains & RC Vehicles",
        "Crafts",
        "Musical Instruments",
      ],
    },
    {
      name: "Sports & Leisure",
      subcategory: [
        "Sports Equipment",
        "Fitness & Yoga",
        "Camping & Hiking Gear",
        "Water Sports",
        "Winter Sports",
      ],
    },
    {
      name: "Movies & Music",
      subcategory: [
        "Books",
        "Movies (DVDs, Blu-rays)",
        "Music (CDs, Vinyl Records)",
        "Musical Instruments & Gear",
      ],
    },
    {
      name: "Health & Beauty",
      subcategory: [
        "Cosmetics & Skincare",
        "Health Products",
        "Fragrances",
        "Hair Care Products",
        "Bath & Body Products",
      ],
    },
    {
      name: "Baby Products",
      subcategory: [
        "Baby Clothing",
        "Nursery Furniture",
        "Toys & Activities",
        "Feeding Supplies",
        "Strollers & Car Seats",
      ],
    },
    {
      name: "Pet Supplies",
      subcategory: [
        "Pet Food & Treats",
        "Pet Accessories (Collars, Beds)",
        "Aquarium & Fish Supplies",
        "Bird Supplies",
        "Small Animal Supplies",
      ],
    },
    {
      name: "Computers & Networking",
      subcategory: [
        "Laptops & Desktops",
        "Computer Components",
        "Networking Devices",
        "Printers & Scanners",
      ],
    },
  ];






