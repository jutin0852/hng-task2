import Link from "next/link";
import React from "react";
import Image from "next/image";
import account from "@/assets/icons/account.png";
import help from "@/assets/icons/help.png";
import cart from "@/assets/icons/cart.png";
import search from "@/assets/icons/search.png";
import menu from "@/assets/icons/menu.png";

export default function Header() {
  return (
    <div className="flex justify-between gap-5 lg:gap-10 py-5 px-4 md:px-10 lg:px-20 bg-[#D9D9D9]  ">
      <Image src={menu} alt="menu" className="md:hidden h-7 w-7 self-center" />

      <Link href={"/"}>
        <h6 className="font-bold text-[25px] lg:text-[31px]  text-[#943510] self-center mt-2">
          WRISTS
        </h6>
      </Link>
      <div className="hidden md:flex basis-[588px] flex-grow gap-2 md:text-md">
        <div className=" border border-[#F44336] w-full py-1 px-2 ">
          <input
            className="outline-none bg-[#D9D9D9] h-10 placeholder-black text-sm lg:text-base"
            type="text"
            placeholder="Search watch categories"
          />
        </div>
        <button className="border inline  px-2 text-sm lg:text-base  h-full border-[#F44336]">
          Search
        </button>
      </div>
      <nav className="hidden md:flex gap-6 align-middle items-center justify-center">
        <div className="flex gap-2">
          <Image src={account} alt="account" />
          <p className="self-center text-sm lg:text-base">Account</p>
        </div>
        <div className="flex gap-2">
          <Image src={help} alt="help" />
          <p className="self-center text-sm lg:text-base">Help</p>
        </div>
        <div className="flex gap-2">
          <Image src={cart} alt="cart" />
          <p className="self-center text-sm lg:text-base">Cart</p>
        </div>
      </nav>
      <nav className="flex md:hidden gap-6 align-middle items-center justify-center">
        <Image src={search} alt="help" width={20} />
        <Image src={cart} alt="cart" width={24} />
      </nav>
    </div>
  );
}
