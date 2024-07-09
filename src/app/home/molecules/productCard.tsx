import Image from "next/image";
import React from "react";
import watch1 from "@/assets/images/watch1.png";

export default function ProductCard({
  setActive,
}: {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="border border-[#A02724] w-80% sm:max-w-[250px] p-4 ">
      <Image src={watch1} alt="product" />
      <div className="text-center text-[#A02724] font-semibold">
        <p>Wrist Gent</p>
        <p>$23,400</p>
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
