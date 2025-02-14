import React from "react";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./stylesHeader";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const [showCart, setShowCart] = React.useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    // Usiário não logado
    if (user === null) {
      // Despachar a action do login
      dispatch(
        login({
          name: "leonel Prestes",
          email: "leonelprestes90@gmail.com",
        })
      )

      // dispatch({
      //   type: "user/login",
      //   payload: { 
      //     name: "Leonel Prestes", 
      //     email: "leonelprestes90@gmail.com"
      //    },
      // });
      //   type: "user/logout",
      // });
    } else {
      dispatch(logout({}));
    }
  }

    return (
      <S.StyledHeader>
        <S.Wrapper>
          <S.HeaderTitle>My Shop.</S.HeaderTitle>

          <S.ButtonsWrapper>
            <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
              {isLogged ? "Sair" : "Entrar"}
              {isLogged ? <FiLogOut /> : <FiLogIn />}
            </S.AuthButton>
            <S.CartButton onClick={() => setShowCart(!showCart)}>
              Carrinho
              <FiShoppingCart />
            </S.CartButton>
          </S.ButtonsWrapper>
        </S.Wrapper>
        <Cart showCart={showCart} cart={[]}/>
      </S.StyledHeader>
    );
  };