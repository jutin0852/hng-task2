import React from "react";

export default function page() {
  return (
    <div>
      <p className="sm:hidden font-semibold text-center text-[#A22D2A] mt-4">ORDER COMPLETE</p>

      <div className="flex flex-wrap gap-8 justify-between mb-10 px-8 py-4 ">
        <div className=" flex flex-col gap-3 ">
          <p className="font-bold ">Our bank details</p>
          <p>WRISTS LTD . Bank FCMB</p>
          <p>Account number; 200233485</p>
          <p>WRISTS LTD . Bank FCMB</p>
          <p>Account number; 110334568</p>
        </div>

        <div className="bg-[#EBEBEB] p-3">
          <p className="text-[#008000]">
            Thank you. Your order has been received
          </p>
          <ul>
            <li>Order numbe:; 6250</li>
            <li>Date june 7, 2024</li>
            <li>
              Total: <span className="text-[#E51611]">23,723</span>
            </li>
            <li>Payment method; Direct bank trasnfer</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-[#D9D9D9] sm:bg-white max-w-[787px] sm:mb-10 px-8 py-4">
        <p className="font-bold">Order details</p>
        <div className="flex justify-between pb-3 border-b border-black">
          <p>product</p>
          <p>TOTAL</p>
        </div>
        <div className="flex justify-between pb-3 border-b border-black">
          <p className="w-40">
            Wrist Gent, men limited time piece for classy men x223
          </p>
          <p className="text-[#E51611]">$23,700</p>
        </div>
        <div className="flex justify-between pb-3 border-b border-black">
          <p>Subtotal</p>
          <p className="text-[#E51611]">$23,700</p>
        </div>
        <div className="flex justify-between pb-3 border-b border-black">
          <p>Shipping</p>
          <p>1, ajax street belton tx po, box 10</p>
        </div>
        <div className="flex justify-between pb-3 border-b border-black">
          <p>Payment method</p>
          <p>Direct bank trasnfer</p>
        </div>
        <div className="flex justify-between pb-3 border-b border-black">
          <p>Toatl</p>
          <p className="text-[#E51611]">$23,700</p>
        </div>
        <div className="flex justify-between pb-3 ">
          <p>Note</p>
          <p>None</p>
        </div>
      </div>

      <div className=" max-w-[787px] justify-between p-4 flex-wrap gap-3 hidden sm:flex">
        <div className="flex flex-col gap-2">
          <p>Lanre lanz</p>
          <p>1, ajax street belton tx po, box 10</p>
          <p>1, ajax street belton tx po, box 10</p>
          <p>USA</p>
          <p>+9132009554</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Lanre lanz</p>
          <p>1, ajax street belton tx po, box 10</p>
          <p>1, ajax street belton tx po, box 10</p>
          <p>USA</p>
          <p>+9132009554</p>
        </div>
      </div>
    </div>
  );
}
