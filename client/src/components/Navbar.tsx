import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import {  Home } from "lucide-react";
import ShopingCartIcon from "./ShoppingCartIcon";
import BellIcon from "./BellIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center  pb-4 border-b border-grey-200">
      {/*left side*/}
      <Link href="/" className="flex item-centre">
        <Image
          src="/logo.png"
          alt=""
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="tracking-medium font-medium text-md hidden md:block ">
          TRENDLAMA
        </p>
      </Link>
      {/*right side*/}
      <div className="flex items-center gap-6">
        <Searchbar />

        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <BellIcon  />
        <ShopingCartIcon/>
        <Link className=" text-gray-600" href="/login">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
