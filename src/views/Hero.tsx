import { Badge }  from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaShoppingCart } from "react-icons/fa"
import Image from "next/image"
import Pic1 from 'public/hero.webp'
import F1 from 'public/f1.webp'
import F2 from 'public/f2.webp'
import F3 from 'public/f3.webp'
import F4 from 'public/f4.webp'
import Link from "next/link"

const Hero = () => {
  return (
    <div className='flex justify-between items-center ' >
      {/*left div*/}
      <div className='  space-y-10  max-w-lg  lg:max-w-2xl '>
        <Badge className='  h-10 w-28 my-2 text-lg  font-semibold pl-4 rounded-md  bg-blue-100 text-indigo-600'>Sale 70%</Badge>
        <h1 className="  scroll-m-20 text-6xl lg:max-w-xl tracking-wide font-bold  ">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 max-w-xs  text-grey-400 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
            <Button className=' my-10 text-md h-16 lg:w-72 rounded bg-gray-900 hover:bg-slate-500 font-semibold text-[#fff]'>
            <FaShoppingCart className="mr-2 h-6  w-8" /> Start  Shopping </Button>
        <div className='flex  gap-4 '>
          <div className='w-14 md:w-28'>
            <Image src={F1} alt='bazaar' width={100} height={100}></Image> </div>
          <div className='w-14 md:w-28'>
            <Image src={F2} alt='bazaar' width={100} height={100}></Image> </div>
          <div className='w-14 md:w-28'>
            <Image src={F3} alt='bazaar' width={100} height={100}></Image> </div>
          <div className='w-14 md:w-28'>
            <Image src={F4} alt='bazaar' width={100} height={100}></Image> </div>
        </div>
      </div>
      {/*right div*/}
      <div className='hidden md:pb-20  md:flex  lg:flex ' >
        <div className=' bg-orange-50 rounded-full '>
          <div className='  '>
            <Image src={Pic1} alt='main image' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero