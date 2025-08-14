import { Search } from "lucide-react";

 
 const Searchbar = () => {
  return (
    <div className="hidden  sm:flex items-centre rounded-md ring-1 gap-2 ring-gray-200 py-1 px-2 shadow-md  ">
        <Search  className="w-4 h-4 text-grey-500"/>
        <input id="search" placeholder="search.." className="text-sm outline-none"/>
    </div>
  );
};

export default Searchbar;