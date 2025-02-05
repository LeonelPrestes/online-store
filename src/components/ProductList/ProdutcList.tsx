import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../data/produtcts";
import * as S from "./stylesProductList";



export const ProductList: React.FC = () => {
  return (
    <S.Container>
        { products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </S.Container>
  );
};
