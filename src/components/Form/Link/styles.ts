import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
    display:flex;
    flex-direction: row;

    button { 
        padding: 8px 15px;
        flex:1;
        border-radius: 8px;
        border: 1px solid black;
        text-transform: uppercase;
        font-weight: 900;
        background: #d9d9d9d9;
        transition: background 0.2s;
        color: ${props => props.theme['black']};
        justify-content: center;
        text-align: center;
        :hover{
            background-color: #d9d9d989;
            cursor: pointer;

        }
    }
`

export const Button = styled.a`
    
`;