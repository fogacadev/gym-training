import styled from "styled-components";



export const CounterContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    padding:2px 8px;
    background-color: ${props => props.theme['gray-200']};

    p {
        color: ${props => props.theme['black']};
        font-size: 0.75rem;
        font-weight: 900;
    }
`;