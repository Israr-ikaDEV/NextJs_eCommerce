"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation";


const Filter = () => {
    const searchParams = useSearchParams();
const pathname= usePathname();
const router = useRouter();
const handleFilter =(value:string)=>{
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
}

  return (
    <div className=" flex justify-end items-center gap-2 text-sm text-gray-500 mb-8 p-4   bg-white  ring-0  rounded ">
      <span>Sort by : </span>
      <select className="outline-none  ring-gray-200 ring shadow-md p-1 rounded-sm border-gray-200" onChange={(e) => handleFilter(e.target.value)}>
        <option   value="newest">Newest</option>
        <option  value="price:high to low">Price: High to Low</option>
        <option  value="oldest">Oldest</option>
        <option  value="price:low to high">Price: Low to High</option>
        </select>
    </div>
      
  );
};

export default Filter;