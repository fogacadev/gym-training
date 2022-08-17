import styled from "styled-components";

export const Container = styled.div`
    padding: 1.25rem;
    display:flex;
    flex-direction: column;
    height: 100vh;
    gap:1rem;

    form{
        display:flex;
        flex-direction: column;
        gap:1rem;
        flex:1;
    }
`;

export const BackContent = styled.div`
    display:flex;
`

export const AddRepContent = styled.div`
    display:flex;
    align-items: center;

    max-width: 100%;

    gap:2px;
    
`

export const RepListContent = styled.div`
    display:flex;
    flex-direction: column;
    padding-left: 1rem;
    
    gap:1rem;

    div {
        display:flex;
        gap:0.25rem;
        align-items: center;
        justify-content: space-between;
    }
`