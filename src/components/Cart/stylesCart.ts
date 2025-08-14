import styled from 'styled-components';

interface CartContainerProps {
    $showCart: boolean;
}

export const CartContainer = styled.aside<CartContainerProps>`
position: fixed;
top: 0;
right: ${({ $showCart }) => ($showCart ? '0' : '-350px')};

width: 350px;
background-color: white;
height: 100vh;

padding: 2rem;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

transition: right 0.3s;
`;

export const Title = styled.h1`
`;

export const CartProductList = styled.ul`
padding: 2rem 0;
list-style: none;

display: flex;
flex-direction: column;
gap: 1rem;
`;

export const CartProductItem = styled.li`
`;

export const CartTotal = styled.strong`
position: fixed;
bottom: 0px;
padding: 2rem 0;
`;