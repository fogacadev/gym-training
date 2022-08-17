import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonLink } from "./styles";

interface LinkProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    to: string;
    content: ReactNode;
}

export function Link({ to, content,...rest }: LinkProps) {
    return (
        <ButtonLink to={to}>
            <button {...rest}>
                {content}
            </button>
        </ButtonLink>
    )
}