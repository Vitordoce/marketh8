import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products.json";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto p-4">
      <ProductGrid products={products} />
    </main>
  );
}
