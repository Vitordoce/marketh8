import categories from "@/data/categories.json";

// ... outros imports e código

<select name="category" value={formData.category} onChange={handleInputChange}>
  <option value="">Selecione uma categoria</option>
  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>;
