import React, { FC } from "react";
import Image, { StaticImageData } from "next/image"; 
import AddToCart from "./AddToCart";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const ProductCard = ( props : { 
//    key : number;
    id: number;
    title: string;
    price: number;
    img: StaticImageData;
    category: string; 
    } ) =>  {
{ /*    console.log(props) */ }   
{ /*    console.log(props.title)  */ }   
 return (
    <>
    
    <div>
      <Card className="w-[395px] h-[100%] my-0 mx-auto border-0">
        <CardContent className="p-5">
          <div className="w-[350px] h-[100%]">
          <Link href={`/products/${props.id}`}>
            <Image
              src={props.img}
              width={650}
              height={500}
              alt=""
              className="mx-auto my-0"
            /></Link>
          </div>
          <h2 className="mt-2 text-lg font-bold">{props.title}</h2>
          <span>{`$${props.price}`}</span>
          <p className="text-base font-semibold capitalize text-[#888888]">{`${props.category}`}</p>
          <AddToCart />
          </CardContent>
        </Card>
        
        </div>
        
        
            </>
           )
}
export default ProductCard