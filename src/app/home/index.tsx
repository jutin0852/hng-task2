"use client";
import React from "react";
import ProductCard from "./molecules/productCard";
import products from "@/data/products";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import Image from "next/image";
import account from "@/assets/icons/account.png";
import help from "@/assets/icons/help.png";
import cart from "@/assets/icons/cart.png";
import banner from "@/assets/images/homebanner.png";
import Cart from "./molecules/cart";
import { useState } from "react";
import Link from "next/link";


export default function HomePage() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <Image src={banner} alt="banner" className=" md:w-full " />
      <div className=" flex gap-8 flex-wrap justify-center m-10 mx-20">
        {products.map((product) => (
          <ProductCard key={product.productName} setActive={setActive} />
        ))}
      </div>
      <Cart active={active} setActive={setActive} />
     
    </div>
  );
}
