import ProductCard from "@/components/Productcard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"


const AllProducts = () => {
    return (
             <div className="flex justify-evenly mt-16 py-10 flex-wrap">
                { Products.map ( ( product ) => (   
                    <ProductCard
                    key = {product.id } 
                    id = {product.id } 
                    img={product.image as StaticImageData}
                    title = {product.name} 
                    price = {product.price} 
                    category = {product.category} 
                 />
           ))} 
             </div>
    )
  }
export default AllProducts 