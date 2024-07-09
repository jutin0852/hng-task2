import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" sm:m-20">
      <div className="hidden sm:flex justify-center gap-4 font-bold text-lg my-10">
        <Link href={"/cart"}>
          <div className="flex">
            <div className="flex justify-center items-center mr-1 text-white  rounded-full  bg-[#A22D2A] w-10 h-10">
              1
            </div>
            <span className="self-center hover:text-[#A22D2A]">
              Shopping cart
            </span>
          </div>
        </Link>
        <Link href={"/checkout"}>
          <div className="flex">
            <span className="flex justify-center items-center mr-1 text-white  rounded-full  bg-[#A22D2A] w-10 h-10">
              2
            </span>
            <span className="self-center  hover:text-[#A22D2A]">
              Checkout details
            </span>
          </div>
        </Link>
        <Link href={"/complete-order"}>
          <div className="flex">
            <span className="flex justify-center items-center mr-1 text-white  rounded-full  bg-[#A22D2A] w-10 h-10">
              3
            </span>
            <span className="self-center  hover:text-[#A22D2A]">
              Order Complete
            </span>
          </div>
        </Link>
      </div>
      {children}
    </div>
  );
}
