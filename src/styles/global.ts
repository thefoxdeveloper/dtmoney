import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #F0F2F5;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body{
    background: var(--background-color);
    -webkit-font-smoothing: antialiased;
}
html{ 
    @media(max-width:1080px){
        font-size: 93.75%;
    }
    @media(max-width:728px){
        font-size: 87.5%;
    }
}
button{
    cursor: pointer;
}
`;
