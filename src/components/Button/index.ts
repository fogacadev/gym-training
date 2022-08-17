import styled from "styled-components";

interface ButtonProps {
    flex?:string;
    size: 'sm' | "md" | "lg"
}

export const Button = styled.button<ButtonProps>`
   padding:${props => props.size === 'lg' ? '1rem' : props.size === 'md' ? '0.75rem' : '0.5rem'};
   justify-content: center;
   align-items: center;
   border-radius: 8px;
   border-color: ${props => props.theme['black']};
   background-color: ${props => props.theme['gray-200']};

   font-family: 'Inter', sans-serif;
   font-size:${props => props.size === 'lg' ? '1rem' : props.size === 'md' ? '0.75rem' : '0.5rem'};;
   font-weight: 900;
   text-align: center;
   text-transform: uppercase;

   
   
   color: ${props => props.theme['gray-500']};
   background-color: ${props => props.theme['gray-200']};

   :hover{
       background-color: ${props => props.theme['gray-100']};
       cursor: pointer;
   }
   
`;