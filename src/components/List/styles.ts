import styled from "styled-components";

export const ListContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:1rem;
    flex:1;
`;

export const EmptyContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top:2rem;
    
    p{
        margin-top:1rem;
        font-weight: 900;
        color:${props => props.theme['gray-400']};
    }
    small{
        color:${props => props.theme['gray-300']};
        font-weight: 400;
    }
`