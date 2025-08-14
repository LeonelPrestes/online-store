export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

// Função para buscar os produtos
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  // Garante que está no formato correto da interface Product
  const products: Product[] = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    category: item.category,
    image: item.image,
    rating: {
      rate: item.rating.rate,
      count: item.rating.count
    }
  }));

  return products;
}
