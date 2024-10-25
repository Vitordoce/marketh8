import { Dispatch, SetStateAction } from "react";
import categories from "@/data/categories.json";

interface CategoryTagsProps {
  setCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
}

export default function CategoryTags({
  setCategory,
  selectedCategory,
}: CategoryTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => setCategory("")}
        className={`px-3 py-1 rounded-full text-sm ${
          selectedCategory === ""
            ? "bg-[#b85c38] text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={`px-3 py-1 rounded-full text-sm ${
            category === selectedCategory
              ? "bg-[#b85c38] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
