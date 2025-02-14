import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./stylesProductCard";
import { Product } from "../../data/produtcts";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const isProductOnCart =
    cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;
  const dispath = useDispatch();
  function handleAddProductToCart() {
    dispath(addProduct(product));
  }

  function handleRemoveProductToCart() {
  dispath(removeProduct(product));
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {`\u00A0${product.rating.rate}`}
        </S.Review>

        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.WrapperAddToCardButton>
        {isProductOnCart ? (
          <S.RemoveFromCardButton onClick={handleRemoveProductToCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCardButton>
        ) : (
          <S.AddToCardButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCardButton>
        )}
      </S.WrapperAddToCardButton>
    </S.Card>
  );
};
