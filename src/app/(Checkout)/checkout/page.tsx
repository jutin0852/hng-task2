import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex justify-center gap-4 flex-wrap my-4 mb-20">
      <p className="sm:hidden font-semibold text-[#A22D2A]">CHECKOUT DETAILS</p>

      <div className="max-w-[564px] gap-4 flex flex-col my-4 p-4  sm:p-2">
        <h6 className="text-[#A22D2A] font-bold">BILLING DETAILS</h6>
        <div className=" flex-col flex gap-4">
          <input
            type="text"
            className="outline outline-1 w-full p-2 placeholder:text-sm "
            placeholder="Email Address"
          />
          <div className="flex gap-3">
            <input
              type="text"
              className="outline outline-1 w-full p-2 placeholder:text-sm "
              placeholder="First Name"
            />
            <input
              type="text"
              className="outline outline-1 w-full p-2 placeholder:text-sm "
              placeholder="Last Name"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base">Country/Region</p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input
              type="text"
              className="outline outline-1 w-full p-2 placeholder:text-sm "
              placeholder="Street address"
            />
            <input
              type="text"
              className="outline outline-1 w-full p-2 placeholder:text-sm "
              placeholder="Apartment,suit,unit etc. Optionalddress"
            />
          </div>
          <input
            type="text"
            className="outline outline-1 w-full p-2 placeholder:text-sm "
            placeholder="Town/ City"
          />
          <input
            type="text"
            className="outline outline-1 w-full p-2 placeholder:text-sm "
            placeholder="Phone"
          />
          {/* <select value="select an option" className="border-1"> */}
          {/* <option value="select an option">select an option</option> */}
          {/* </select> */}
          <textarea
            className="outline outline-1 w-full"
            placeholder="Note about your order, e.g special note for delivery, optional."
          />
        </div>
      </div>

      <div className="bg-[#D9D9D9] sm:bg-white sm:border sm:border-black px-4 py-6 sm:basis-[665px] basis-full  flex flex-col gap-3">
        <p className="font-bold">YOUR ORDER</p>
        <div className="flex justify-between">
          <p>PRODUCT</p>
          <p>SUBTOTAL</p>
        </div>
        <div className="flex justify-between">
          <p className=" w-32">
            Wrist Gent, men limited time piece for classy men x223
          </p>
          <p className="text-[#E51611]">$23,700</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="text-[#E51611]">$23,700</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>1, ajax street belton tx po, box 10</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p className="text-[#E51611]">$23,700</p>
        </div>
        <p>Direct bank transfer (Faster shipping)</p>
        <p>
          Make your payment directly into our bank account. please make use of
          your Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
        <p className="p-2 border border-black">Cash on delivery</p>
        <Link href={"/complete-order"}>
          <button className="bg-[#A22D2A] p-2 self-start text-white">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
}
