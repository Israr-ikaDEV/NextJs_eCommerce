import ProductList from "@/components/ProductList"
import Image from "next/image"
import { ToastContainer } from "react-toastify";

const Homepage =  async({searchParams}:{searchParams: Promise<{category?: string}>}) => {
const category = (await searchParams).category;

  return (
    <div className="">
<div className="relative aspect-[3/1] mb-12">
  <Image src="/featured.png" alt="Featured products" fill/>
</div>
<ProductList category={category ?? ""} params="homepage"/>
<ToastContainer />
    </div>
  )
}

export default Homepage