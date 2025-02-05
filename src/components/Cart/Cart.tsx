import * as S from './stylesCart';

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({
    showCart
}) => {
    return(
        <S.CartContainer showCart={showCart}>
            <S.Title>Carrinho</S.Title>
        </S.CartContainer>
    )
};