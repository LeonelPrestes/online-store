import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: white;
}

body, input, button {
    font-family: 'Poppins', sans-serif;
}

button {
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
        transition: filter 0.3s;
    }
}
`;