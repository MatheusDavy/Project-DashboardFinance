import { createGlobalStyle } from "styled-components";
import bodyImage from "../Assets/Images/body-background.png";

export const GlobalStyle = createGlobalStyle`

    html{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding:0;
        font-family: "Open Sans", sans-serif;
        transition: 0.4s;
        background-image: url(${bodyImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }

    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none !important;
    
    }
    input[type=number] { 
        -moz-appearance: none;
        appearance: none;
    }

`;
