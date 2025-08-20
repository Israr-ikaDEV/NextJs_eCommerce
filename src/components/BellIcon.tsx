
import { Bell, ShoppingCart } from "lucide-react";
import Link from "next/link";

const BellIcon = () => {
  return (
    <Link  href="/cart" className="relative">
        <Bell className="w-4 h-4  text-gray-600"  />
        <span className="absolute -top-3 -right-3 text-xs bg-red-400 text-gray-600 rounded-full px-1">0</span>
        </Link>
  );
};

export default BellIcon;