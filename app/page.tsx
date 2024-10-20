import LeftColumn from "@/components/LeftColumn";
import ProductGrid from "@/components/ProductGrid";
import RightColumn from "@/components/RightColumn";

//products
const products = [
  { id: 1, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 2, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 3, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 4, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 5, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 6, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 7, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 8, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 9, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 10, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 11, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
  { id: 12, name: "PRODUCT NAME", price: 444.54, imageUrl: "/placeholder.svg" },
];

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <aside className="lg:w-1/6">
          <LeftColumn />
        </aside>
        <div className="lg:w-2/3">
          <ProductGrid products={products} />
        </div>
        <aside className="lg:w-1/6">
          <RightColumn />
        </aside>
      </div>
    </main>
  );
}
