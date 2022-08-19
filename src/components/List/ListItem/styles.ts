import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri"

export const ListItemContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

    background-color: ${props => props.theme['gray-200']};
    padding:10px 12px;

    border-bottom:1px solid black;
    border-radius: 8px;

    button {
        display:flex;
        border:none;
        background-color: transparent;
        padding:0;
        font-weight: 900;
        font-size:1rem;
        display:block;
        color: inherit;
        text-decoration: none;

        &:hover{
            cursor:pointer;
        }
    }

    img:hover{
        
    }
`

export const AboutContent = styled.div`
    display:flex;
    flex-direction: column;
    
    div{
        text-transform: lowercase;
        small{
            font-size:1rem;
            display: block;
        }
    }
`

export const TrashIcon = styled(BsTrash)`
transition: color 0.2s;
    &:hover{
        
        color:${props => props.theme['danger']};
        cursor:pointer;
    }
`;

export const ConfirmIcon = styled(RiErrorWarningLine)`
    transition: color 0.2s;
    color:${props => props.theme['danger']};

    &:hover{    
        color:${props => props.theme['danger']};
        cursor:pointer;
    }
`

export const TimelineContent = styled.div`
    margin-top:1rem;
    display:flex;
    flex-direction: column;

    div {
        margin-left:0.5rem;
        
        display:flex;
        gap:0.5rem;
        align-items: center;
        justify-content: space-between;
        border-left: 2px solid black;
        padding-left: 1rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;            
    }
`;