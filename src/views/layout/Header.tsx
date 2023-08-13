import logo from "public/Logo.webp"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {BiSearch} from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
// import { Input } from "@/components/ui/input"

const Header = () => {
    return (
        <div className="flex justify-between items-center py-6 px-6 ">
        <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-40" />
        </Link>
            <ul className="flex gap-x-10 " >
                <li className="text-lg" > 
			<Link href={"/category/female"}>Female</Link>
                </li>         
                <li className="text-lg" >
                   <Link href={"/category/male"}>Male</Link>
                </li>         
                <li className="text-lg">
                    <Link href={"/category/kids"}>Kids</Link>
                </li>         
                <li className="text-lg">
                     <Link href={"/products"}>All Products</Link> 
                </li>          
            </ul>
            <div className=" flex gap-1 border border-black rounded-lg px-2 ">
            <BiSearch size={20} />
            <input type ="text" placeholder = "What are you looking for?"/>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative hover:scale-150 duration-1">
            <FaShoppingCart size ={20}/>
             <span className = "w-4 h-4 text-xs flex justify-center items-center rounded-full bg-red-500 text-white  absolute bottom-6 left-5" >
               0 </span>       
        </div >
        </div>
    )
}
export default Header