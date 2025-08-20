"use client"


import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShopingCartIcon = () => {
  const  {cart}= useCartStore();

  return (

    <Link  href="/cart" className="relative">
        <ShoppingCart className="w-4 h-4  text-gray-600"  />
        <span className="absolute -top-3 -right-3 text-xs bg-amber-500 text-gray-600 rounded-full px-1">{cart.length}</span>
        </Link>
  );
};

export default ShopingCartIcon;