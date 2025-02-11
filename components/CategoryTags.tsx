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
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          selectedCategory === ""
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            category === selectedCategory
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
