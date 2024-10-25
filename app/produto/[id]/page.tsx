"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import products from "@/data/products.json";
import users from "@/data/users.json";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  condition: string;
  created_at: string;
  user_id: number;
}

interface User {
  id: number;
  name: string;
  address: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [seller, setSeller] = useState<User | null>(null);
  const [mainImage, setMainImage] = useState<string>("/data/imagem.jpg");

  useEffect(() => {
    const fetchProductAndSeller = () => {
      const fetchedProduct = products.find((p) => p.id === parseInt(params.id));
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setMainImage("/data/imagem.jpg"); // Use a static path for testing

        const fetchedSeller = users.find(
          (u) => u.id === fetchedProduct.user_id
        );
        setSeller(fetchedSeller || null);
      }
    };

    fetchProductAndSeller();
  }, [params.id]);

  if (!product || !seller) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f5e6cb]">
      <main className="max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-lg mb-4">
              <Image
                src={mainImage}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-1 rounded-lg cursor-pointer"
                    onClick={() => setMainImage("/data/imagem.jpg")}
                  >
                    <Image
                      src="/data/imagem.jpg"
                      alt={`${product.name} - Image ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-[#b85c38] mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <h2 className="text-xl font-semibold mb-2">Descrição</h2>
            <p className="mb-4">{product.description}</p>
            <p className="mb-4">{product.condition}</p>
            <p className="text-3xl font-bold mb-6">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">{seller.name}</p>
                <p className="text-sm text-gray-600">{seller.address}</p>
              </div>
            </div>
            <Button className="w-100 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-lg flex items-center justify-center">
              <Phone className="mr-2" />
              ENTRAR EM CONTATO
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
