import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";


export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        
    }

    body{
        font-family: 'Inter', sans-serif;
        color: ${props => props.theme['gray-700']};
        background-color: ${props => props.theme['gray-100']};
        font-size: 16px;
    }

    input, button {
        display:flex;
    }
`;