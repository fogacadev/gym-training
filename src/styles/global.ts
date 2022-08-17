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
        color: ${defaultTheme["gray-700"]};
        background-color: ${defaultTheme["gray-100"]};
        font-size: 16px;
    }

    input, button {
        display:flex;
    }
`;