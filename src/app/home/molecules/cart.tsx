"use client";
import Image from "next/image";
import React, { useState } from "react";
import cancel from "@/assets/icons/cancel.png";
import deleteIcon from "@/assets/icons/delete.png";
import Link from "next/link";

export default function Cart({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {active && (
        <div className="fixed top-0 flex justify-center items-center bg-black bg-opacity-35  h-screen w-screen z-1 ">
          <div className="  bg-[#D9D9D9] max-w-[653px] mx-4">
            <div className=" justify-between border-b-2 border-[#A22D2A] flex bg-white px-1 py-4">
              <p className="text-lg font-bold">Cart</p>
              <Image
                src={cancel}
                alt="cancel"
                onClick={() => {
                  setActive(false);
                }}
                className="w-6 mr-2 sm:w-10 cursor-pointer"
              />
            </div>
            <div className=" border-b border-black rounded flex p-2">
              <Image
                src="/images/watch1.png"
                className="w-40 sm:w-64"
                width={250}
                alt="wristGent"
              />
              <div>
                <p>Wrist Gent men limited time piece for classy men x223</p>
                <p>1X $23,700</p>
              </div>
              <Image src={deleteIcon} alt="delete" className=" self-start" />
            </div>
            <div className=" text-center">
              <p className="my-2">Subtotal; $23,700</p>
              <Link href="cart">
                <button className="w-full bg-black text-white p-1 mb-1">
                  VIEW CART
                </button>
              </Link>
              <Link href="checkout">
                <button className="w-full bg-black text-white p-1 mb-1">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
