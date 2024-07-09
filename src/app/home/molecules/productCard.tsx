import Image from "next/image";
import React from "react";
import { Product } from "@/data/products";

export default function ProductCard({
  setActive,
  product
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  product :Product
}) {
  return (
    <div className="border border-[#A02724] w-80% sm:max-w-[250px] p-4 ">
      <Image src={product.image} alt="product" width={200} height={200} />
      <div className="text-center text-[#A02724] font-semibold">
        <p>{product.productName}</p>
        <p>{product.price}</p>
        <button
          className="bg-[#A02724] text-white p-2 rounded"
          onClick={() => {
            setActive(true);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
