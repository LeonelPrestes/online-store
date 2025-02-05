import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  `;

  interface AuthButtonProps {
    isLogged: boolean;
  }

export const AuthButton = styled.button<AuthButtonProps>`
border: none;
border-radius: 5px;
height: 35px;
padding: 0 1rem;
background-color: ${(props) => props.isLogged ? 'rgb(222, 136, 115)' : 'rgb(123, 183, 233)'}; 
color: black;

display: flex;
align-items: center;
gap: 0.5rem;
font-size: 0.75rem;

svg {
    font-size: 1rem;
}
`;

export const CartButton = styled.button`
border: none;
border-radius: 5px;
height: 35px;
padding: 0 1rem;
background-color:rgb(227, 241, 100);
color: black;

display: flex;
align-items: center;
gap: 0.5rem;
font-size: 0.75rem;

svg {
    font-size: 1rem;
}
`;
