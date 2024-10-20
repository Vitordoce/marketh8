export default function LeftColumn() {
  return (
    <div className="p-4 space-y-6 text-sm">
      <div>
        <h2 className="text-[#331810] font-bold mb-2">Ordenar por</h2>
        <ul className="space-y-1">
          {[
            "Mais recente",
            "Mais antigo",
            "Menor preço",
            "Maior preço",
            "Nome (A-Z)",
            "Nome (Z-A)",
          ].map((item) => (
            <li
              key={item}
              className="text-[#984830] hover:underline cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-[#331810] font-bold mb-2">Categorias</h2>
        <ul className="space-y-1">
          {[
            "Livros",
            "Eletrônicos",
            "Roupas e Acessórios",
            "Móveis e Decoração",
            "Esporte e Lazer",
            "Outros",
          ].map((item) => (
            <li
              key={item}
              className="text-[#984830] hover:underline cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-[#331810] font-bold mb-2">Condições</h2>
        <ul className="space-y-1">
          {["Novo", "Pouco Usado", "Usado", "Debizu"].map((item) => (
            <li
              key={item}
              className="text-[#984830] hover:underline cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
