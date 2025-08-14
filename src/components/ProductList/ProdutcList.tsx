import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { fetchProducts, Product } from "../../data/produtcts";
import * as S from "./stylesProductList";

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};