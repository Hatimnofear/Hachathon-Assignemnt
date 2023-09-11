"use client";
import Logo from "public/Logo.webp"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {BiSearch} from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Header = () => {
    const cartValue = useSelector((state:RootState) => state.cartSlice.totalQuantity);


    return (
        <div className="flex justify-between items-center py-6 px-6 ">
                <Link href={"/"}><Image src={Logo} alt="logo" className="w-30" /></Link>
                <ul className="flex gap-x-10 " >
                { /*  <li className="text-lg" ><Link href={"/"}><Image src={Logo} alt="logo" className="w-30" /></Link></li>             */ }
                <li className="text-lg" ><Link href={"/category/female"}>Female</Link></li>         
                <li className="text-lg" ><Link href={"/category/male"}>Male</Link></li>         
                <li className="text-lg"><Link href={"/category/kids"}>Kids</Link></li>         
                <li className="text-lg"><Link href={"/products"}>All Products</Link></li>          
            </ul>
            <div className=" flex gap-1 border border-black rounded-lg px-2 "> 
            <BiSearch size={20} />
            <input type ="text" placeholder = "What are you looking for?"/>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative hover:scale-150 duration-1">
            <Link href="/cart">
                <span className="absolute right-2 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">{cartValue}</span>
            <FaShoppingCart size ={20}/>
            </Link>
          { /*    <span className = "w-4 h-4 text-xs flex justify-center items-center rounded-full bg-red-500 text-white  absolute bottom-6 left-5" >
               0 </span>       */}
            </div >
        </div>
    )
}
export default Header