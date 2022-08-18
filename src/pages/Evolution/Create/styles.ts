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

    div {
        margin-left:0.5rem;
        display:flex;
        gap:0.5rem;
        align-items: center;
        justify-content: space-between;
        border-left: 2px solid black;
        padding-left: 0.25rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;

        

        div {
            border-left:none;
        }
            
    }

    
`