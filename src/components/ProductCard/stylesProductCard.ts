import styled from 'styled-components';

export const Card = styled.article`
background-color: white;
width: 100%;
height: 100%;
padding: 2rem;
margin:0 auto;

display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
`

export const ProductImage = styled.img`
width: 200px;

`

export const ProductTitle = styled.h2`
font-size: 1.2rem;
font-weight: 500;
`

export const ReviewPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 0.2rem;
`

export const Review = styled.span`
display: flex;
font-size: 0.7rem;

    svg {
        font-size: 1rem;
    }
`

export const Price = styled.strong``

export const WrapperAddToCardButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 0.2rem;
width: 100%;
`

export const AddToCardButton = styled.button`
font-weight: 600;
font-size: 0.75rem;

border: none;
border-radius: 5px;
height: 35px;
width: 100%;
padding: 0 1rem;
background-color:rgb(227, 241, 100);
color: black;

display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;

svg {
    font-size: 1rem;
}
`