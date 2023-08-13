import FeaturedProduct from '@/views/FeaturedProduct'
import Hero from '@/views/Hero'
import Newsletter from '@/views/Newsletter'
import ProductsSlider from '@/views/ProductsSlider'
import Promotion from '@/views/Promotions'

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotion />
      <ProductsSlider />
      <FeaturedProduct />
      <Newsletter />
    </main>
  )
}
