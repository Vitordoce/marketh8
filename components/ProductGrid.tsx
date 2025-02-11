"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoryTags from "@/components/CategoryTags";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  condition: string;
  created_at: string;
  user_id: number;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const sortOptions = [
    { label: "Mais recente", value: "newest" },
    { label: "Mais antigo", value: "oldest" },
    { label: "Menor preço", value: "price_asc" },
    { label: "Maior preço", value: "price_desc" },
    { label: "Nome (A-Z)", value: "name_asc" },
    { label: "Nome (Z-A)", value: "name_desc" },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (category === "" || product.category === category)
      )
      .sort((a, b) => {
        switch (sort) {
          case "newest":
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          case "oldest":
            return (
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
            );
          case "price_asc":
            return a.price - b.price;
          case "price_desc":
            return b.price - a.price;
          case "name_asc":
            return a.name.localeCompare(b.name);
          case "name_desc":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [products, searchTerm, sort, category]);

  return (
    <div className="bg-background p-4 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative grow">
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border-border focus:ring-2 focus:ring-ring focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>
        <Select onValueChange={setSort} value={sort}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="max-h-24 overflow-y-auto">
        <CategoryTags setCategory={setCategory} selectedCategory={category} />
      </div>
      {filteredAndSortedProducts.length === 0 ? (
        <div className="bg-background flex justify-center p-10">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Nenhum produto encontrado
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAndSortedProducts.map((product) => (
            <Link key={product.id} href={`/produto/${product.id}`} passHref>
              <div className="bg-card text-card-foreground rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="w-full aspect-square bg-background rounded-lg mb-2 overflow-hidden">
                  <Image
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </p>
                <p className="text-sm text-muted-foreground">{product.condition}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
