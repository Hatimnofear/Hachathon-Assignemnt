import logo from "/public/Logo.webp"
import Image from "next/image"

const FooterBar = () => {
  return (
<section>
<hr className=" bg-black divide-x-0"/>
<div className="flex justify-between md:items-center text-[#666] md:px-20 items-left gap-y-2 mt-2 md:pt-5 flex-col md:flex-row " >
  <p className="text-lg md:w-[170px]">Copyright © 2023  Dine Market</p>
  <p className="text-lg">Design by. <span className="font-bold text-[#212121]">NextJs with Tailwind</span></p>
  <p className="text-lg">Code by. <span className="font-bold text-[#212121]">PIAIC171375</span></p>
  </div>
</section>
  )
}
export default FooterBar