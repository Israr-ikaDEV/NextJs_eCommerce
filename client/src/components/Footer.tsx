import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-gray-800 gap-8 md:gap-0  p-8 rounded-lg mt-10 flex flex-col items-center md:justify-between md:flex-row md:items-start ">
      <div className="flex flex-col gap-4 items-center md:items-start">
        {" "}
        <Link href="/" className="flex item-center">
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="tracking-medium font-medium text-md  text-white hidden md:block ">
            TRENDLAMA
          </p>
        </Link>
        <p className="text-sm  text-gray-400">2025 TrendLama.</p>
        <p className="text-sm  text-gray-400">All rights reserved</p>
      </div>
      <div className="flex flex-col gap-4 items-center text-gray-400 text-sm md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="">HomePage</Link> <Link href="">Contact</Link>
        <Link href="">Terms of services</Link>
        <Link href="">Privacy policy</Link>
      </div>
      <div className="flex flex-col gap-4 items-center text-gray-400 text-sm md:items-start">
       
        <p className="text-sm text-amber-50">Products</p>
        <Link href="">All products</Link> <Link href="">New arrivals</Link>
        <Link href="">Best Sellers</Link> <Link href="">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 items-center text-gray-400 text-sm md:items-start">
       
        <p className="text-sm text-amber-50">Company</p>
        <Link href="">About</Link> <Link href="">Contact</Link>
        <Link href="">Blog</Link> <Link href="">Affiliate program</Link>
      </div>
    </div>
  );
};

export default Footer;
