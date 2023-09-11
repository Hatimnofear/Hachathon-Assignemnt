import React from "react";
import ProductCard from "@/components/Productcard";
import { Products } from "@/utils/mock";
import { title } from "process";
import { StaticImageData } from "next/image";
import AddToCart from "@/components/AddToCart";

const ProductList = () => {
    const productChecks = Products.slice(0 , 3);
    {/* console.log(productChecks)  */}
    return (
        <section className="pt-12">
            <div className="flex flex-col gap-2 mb-[32px] "> 
                <h3 className="uppercase text-center font-bold text-blue-700">Products</h3>
                <h2 className="capitalize text-center font-bold text-3xl">Checkout what we have </h2>
            </div>
            <div className="flex justify-evenly mt-10">
            { 
                productChecks.map ( ( product ) => (   
                <ProductCard
                    id = {product.id } 
                    title = {product.name} 
                    price = {product.price} 
                    img = {product.image as StaticImageData}
                    category = {product.category}              
                />
                    ))    
            }
            
            </div>
    { /* div className="flex justify-evenly mt-16 "  */ }
    {  /*   ProductCard title="Flex Sweatshirt" price={175} img={P1} / */        }
    { /*  ProductCard title="Flex Sweatpants" price={175} img={pic2} /  */        }
    { /*  ProductCard title="Pink Fleece Sweatpants" price={195}  img={pic3} /   */  }
    
    </section> 
           )
}
export default ProductList