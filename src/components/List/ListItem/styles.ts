import styled from "styled-components";
import { BsTrash} from "react-icons/bs";

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

export const TimelineContent = styled.div`
    margin-top:1rem;

    display:flex;
    flex-direction: column;
    gap:0.5rem;

    div {
        display:flex;
        gap:1rem;
    }
`;