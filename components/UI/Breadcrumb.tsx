
import React from "react";
import iconArrow from "@/assets/icon-arrow.svg";
import Image from "next/image";
import Link from "next/link";

const Breadcrumb2 = ({ items }: BreadcrumbProps) => {
  return (
    <div className="">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex py-3 text-gray-700 border border-gray-200 rounded-lg dark:border-black"  >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {items.map((item: any, index: number) => (
              <li key={index} className="flex items-center">
                {item.href ? (
                  <Link href={item.href}>
                    <span className=" text-black">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span className="text-gray-700">{item.label.replace(/\b\w/g, (char: string) => char.toUpperCase())}</span>
                )}
                {index < items.length - 1 && (
                  <Image className=" object-cover" src={iconArrow} alt="Card Image" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb2;
interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}