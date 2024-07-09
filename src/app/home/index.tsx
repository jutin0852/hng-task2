"use client";
import React from "react";
import ProductCard from "./molecules/productCard";
import products from "@/data/products";
import Image from "next/image";
import banner from "@/assets/images/homebanner.png";
import Cart from "./molecules/cart";
import { useState } from "react";


export default function HomePage() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <Image src={banner} alt="banner" className=" md:w-full " />
      <div className=" flex gap-8 flex-wrap justify-center m-10 sm:mx-28 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.productName} setActive={setActive} />
        ))}
      </div>
      <Cart active={active} setActive={setActive} />
     
    </div>
  );
}
