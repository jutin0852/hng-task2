import Link from "next/link";
import React from "react";
import CheckOutWapper from "../component/checkout-wrapper";

export default function layout({ children }: { children: React.ReactNode }) {
  return <CheckOutWapper>{children}</CheckOutWapper>;
}
