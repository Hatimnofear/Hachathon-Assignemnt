import VinDes from '@/views/VinDes'
import Hero from '@/views/Hero'
import Newsletter from '@/views/Newsletter'
import ProductsSlider from '@/views/ProductsSlider'
import Promotions from '@/views/Promotions'

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <ProductsSlider />
      <VinDes />
      <Newsletter />
    </main>
  )
}
