import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-wrap gap-8 justify-between py-4 px-10 sm:py-8 md:px-20 bg-[#D9D9D9]  border-t-2 border-[#F44336]">
      <div className=" text-sm md:text-base">
        <h6 className="font-bold">About us</h6>
        <p className=" max-w-60">
          Wrist is a one stop online watch store for genuine affordable luxury
          wrist watches launched by Lanz in 2024 we are committed to bring you
          the best.
        </p>
      </div>

      <div className=" text-sm md:text-base">
        <h6 className="font-bold">Contact Us</h6>
        <p>Main office, Belton tx</p>
        <p>Anthony way, sax</p>
        <p>+913 25678900</p>
      </div>
      <div className=" text-sm md:text-base">
        <h6 className="font-bold">Policies</h6>
        <h6 className="font-bold">Terms And Conditions</h6>
        <h6 className="font-bold">Return and Refund Polcies</h6>
      </div>
    </div>
  );
}
