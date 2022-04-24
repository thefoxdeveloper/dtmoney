import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #F0F2F5;
    --red:#e52e4d;
    --blue:#5429CC;
    --blue-light:#6933ff;
    --green:#33cc95;
    --text-title:#363f5f;
    --text-body:#969cB3;
    --background:#f0f2f5;
    --shape: #fff;
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
body, input,textarea, button, main{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6,strong{
    font-weight: 600;
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
[disabled]{
    cursor: not-allowed;
    }
`;
