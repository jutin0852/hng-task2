import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      {/* table 1 */}
      <div className="mx-6 my-4 w-full sm:max-w-[672px]">
        <div className="flex justify-between pb-4 border-b  border-black">
          <p>PRODUCT</p>
          <div className="flex gap-2">
            <p className="hidden sm:block">PRICE</p>
            <p>QUANTITY</p>
            <p className="hidden sm:block">SUBTOTAL</p>
          </div>
        </div>

        <div className="flex justify-between pb-4  mt-4">
          <div className="flex">
            <Image
              src="/images/watch1.png"
              className=" w-28 sm:w-40"
              width={200}
              alt="watch1"
            />
            <p className=" w-40 hidden sm:block">
              Wrist Gent men limited time piece for classy men x223
            </p>
            <div className=" w-40 font-bold sm:hidden block">
              <p>Wrist Gent </p>
              <p>
                1 x <span className="text-[#E51611]">$23,700</span>
              </p>
            </div>
          </div>

          <div className="flex gap-8 ">
            <span className="hidden sm:block">$23,700</span>
            <div className="flex gap-1">
              <div className="border border-black  self-start ">-</div>
              <div>1</div>
              <div className="border border-black  self-start ">+</div>
            </div>
            <span className="hidden sm:block">$23,700</span>
          </div>
        </div>

        <Link href={"/"}>
          <button className="p-3 w-full border border-[#A22D2A] text-[#A22D2A]">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>

      {/* table 2 */}
      <div className="flex flex-col basis-[531px] gap-2 border-black  sm:border-l sm:pl-10 text-sm mx-4 mb-10">
        <div className="flex justify-between pb-4 border-b border-black">
          <p>CART TOTAL</p>
        </div>
        <div className="flex justify-between ">
          <p>Subtotal</p>
          <p>$23,700</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>1, ajax street belton tx po, box 10</p>
        </div>
        <div className="flex justify-between border-b pb-4 border-black">
          <p>Total</p>
          <p>$23,700</p>
        </div>
        <Link href={"/checkout"}>
          <button className="p-3 mt-4 w-full border border-[#A22D2A] text-white bg-[#A22D2A]">
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}
