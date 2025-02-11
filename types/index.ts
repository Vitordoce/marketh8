// Definição do tipo para timestamp ISO
type ISODateString = string;

// Interface para Usuário com produtos
export interface User {
  id: number;
  name: string;
  turma: string;
  contact: string;
  address: string;
  email: string;
  password: string;
  photo: string;
  phone: string;
  created_at: ISODateString;
  updated_at: ISODateString;
}

// Interface para Usuário com produtos carregados
export interface UserWithProducts extends User {
  products: Product[];  // Aqui é obrigatório, não opcional
}

// Interface para Produto
export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  condition: 'Novo' | 'Semi-Novo' | 'Usado' | 'Muito Usado';
  category: Category;
  user_id: number;
  created_at: ISODateString;
  updated_at: ISODateString;
  debizu: boolean;
}

// Type para Categorias
export type Category = 
  | 'Eletrônicos'
  | 'Livros'
  | 'Móveis'
  | 'Roupas'
  | 'Acessórios'
  | 'Esportes'
  | 'Eletrodomésticos'
  | 'Casa e Decoração'
  | 'Transporte'
  | 'Outros'; 