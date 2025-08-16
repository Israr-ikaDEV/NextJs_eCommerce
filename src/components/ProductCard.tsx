"use client";

import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="shadow-lg bg-gray-200  shadow-md rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3] bg-gray-200">
          <Image
            src={product.images[selectedColor]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-4">

         {/* proc=duct details */}
        <h1 className=" font-medium ">{product.name}</h1>
        <p className="text-gray-600 text-sm mb-4">{product.shortDescription}</p>

        <div className="flex  items-center  text-xs gap-4">
          {" "}
          {/* Size Selector */}
          <div className=" flex flex-col  gap-1">
            <span className=" text-gray-700">Size:</span>
            <select
                id="size"
                className="border rounded px-2 py-1 text-sm bg-white text-black focus:outline-none focus:bg-gray-300  focus:ring-1 focus:ring-black"
            >
                {product.sizes.map((size) => (
                    <option
                        key={size}
                        value={size}
                        className="uppercase"
                        style={{ textTransform: "uppercase" }}
                    >
                        {size.toUpperCase()}
                    </option>
                ))}
            </select>
          </div>
          {/* Color Selector */}
          <div className="mb-2 flex  flex-col items-center gap-1">
            <span className=" text-gray-700">Color:</span>
          <div className="flex items-center gap-2">  {product.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-300"
                } focus:outline-none`}
                style={{ backgroundColor: color }}
                aria-label={color}
                type="button"
                onClick={() => setSelectedColor(color)}
              />
            ))}</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            className="bg-white text-black shadow-lg border border-gray-300 px-4 py-2 rounded hover:bg-gray-300 transition-300 hover:scale-105 duration-300"
            type="button"
            // Add onClick handler for add to cart
          >
            <div className="flex gap-2 text-sm">
              <ShoppingCart /> Add to Cart
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
