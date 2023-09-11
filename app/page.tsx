import React from 'react'
import Image from 'next/image'
import Hero from '../src/views/Hero'
import ProductList from '@/views/ProductList'
import VinDes from '@/views/VinDes'
import Promotions from '@/views/Promotions'


export default function Home() {
  return (
    <div>
      <Hero />
    {/* Promotions*/ }
      <Promotions />
    {/*  <ProductList />  */ }
      <ProductList />
          {/* List and Details*/ }
      <VinDes />
      </div>
      
  )
}
