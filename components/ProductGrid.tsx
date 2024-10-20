import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

export default function ProductGrid({
  products = [],
}: {
  products?: Product[];
}) {
  if (!products || products.length === 0) {
    return (
      <div className="p-4 text-center bg-[#f5e6cb]">
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-[#f5e6cb]">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} passHref>
          <div className="bg-[#e5a17d] rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-sm md:text-base mb-1">
              {product.name}
            </h3>
            <div className="w-full aspect-square bg-white rounded-lg mb-2 overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-lg font-semibold">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
