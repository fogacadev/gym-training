import styled from "styled-components";


export const Input = styled.input`
    height: 54px;
    padding:16px;
    min-width: 0;
    
    color: ${props => props.theme['gray-500']};
    font-size:1rem;
    font-family: 'Inter', sans-serif;
    
    background-color: ${props => props.theme['gray-200']};
    border-radius: 8px;
    border-color: ${props => props.theme['gray-700']};
    border-width: 2px;

    :focus{
        outline:none;
        border-color: #9747FF;
        color: ${props => props.theme['gray-700']}
    }

    &[type="date"]{
        -webkit-appearance: none;
    }
`;

export const GroupForm = styled.div`
    display:flex;
    flex-direction: column;
`;

export const InputError = styled.small`
    color: red;
    margin-top:2px;
    font-size: 0.75rem;
`;