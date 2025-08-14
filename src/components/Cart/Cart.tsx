import { useDispatch, useSelector } from "react-redux";
import * as S from "./stylesCart";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "src/data/produtcts";
import { RootReducer, rootReducer } from "src/redux/root-reducer";

interface CartProps {
  showCart: boolean;
  cart: Product[]
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const {cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  )
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, products) => {
    return totalCart + products.price;
  }, 0);

  return (
    <S.CartContainer $showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <button
              onClick={() =>
                dispatch(removeProduct(product))
              }
            >
              Remover
            </button>
          </S.CartProductItem>
        ))}
      </S.CartProductList>

      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.CartContainer>
  );
};
