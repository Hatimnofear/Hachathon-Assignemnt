import ProductCard from "@/components/Productcard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
  return Products.filter((product)=> product.category === category);
};
const page = ({ params } : { params: { slug: string } }) => {
  const result = getProductsByCategory(params.slug);
  return (
    <div className="flex flex-wrap justify-evenly mt-[32px]">
      {result.length <= 0 ? (
        <div>There is no product of {params.slug} added yet.</div>
      ) : (
        result.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.image as StaticImageData}
              title={product.name}
              price={product.price}
              category={product.category}
            />
          );
        })
      )}
    </div>
  );
};

export default page;

/*
  console.log(result)
*/
  