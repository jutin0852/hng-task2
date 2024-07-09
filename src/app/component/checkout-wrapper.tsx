"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function CheckOutWapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div className=" sm:m-20">
      <div className="hidden sm:flex justify-center gap-4 font-bold text-lg my-10">
        <Link href={"/cart"}>
          <div className="flex">
            <div
              className={
                pathName === "/cart"
                  ? "bg-[#A22D2A] flex justify-center items-center mr-1 text-white  rounded-full  s w-10 h-10"
                  : "flex justify-center items-center mr-1 text-white  rounded-full bg-black bg-opacity-50 w-10 h-10"
              }
            >
              1
            </div>
            <span
              className={
                pathName === "/cart"
                  ? "text-[#A22D2A] self-center hover:text-[#A22D2A]"
                  : "self-center hover:text-[#A22D2A] text-black text-opacity-50"
              }
            >
              Shopping cart
            </span>
          </div>
        </Link>
        <Link href={"/checkout"}>
          <div className="flex">
            <span
              className={
                pathName === "/checkout"
                  ? "bg-[#A22D2A] flex justify-center items-center mr-1 text-white  rounded-full  s w-10 h-10"
                  : "flex justify-center items-center mr-1 text-white  rounded-full bg-black bg-opacity-50 w-10 h-10"
              }
            >
              2
            </span>
            <span
              className={
                pathName === "/checkout"
                  ? "text-[#A22D2A] self-center hover:text-[#A22D2A]"
                  : "self-center hover:text-[#A22D2A] text-black text-opacity-50"
              }
            >
              Checkout details
            </span>
          </div>
        </Link>
        <Link href={"/complete-order"}>
          <div className="flex">
            <span
              className={
                pathName === "/complete-order"
                  ? "bg-[#A22D2A] flex justify-center items-center mr-1 text-white  rounded-full  s w-10 h-10"
                  : "flex justify-center items-center mr-1 text-white  rounded-full bg-black bg-opacity-50 w-10 h-10"
              }
            >
              3
            </span>
            <span
              className={
                pathName === "/complete-order"
                  ? "text-[#A22D2A] self-center hover:text-[#A22D2A]"
                  : "self-center hover:text-[#A22D2A] text-black text-opacity-50"
              }
            >
              Order Complete
            </span>
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
}
