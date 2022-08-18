import { CounterContainer } from "./styles";


interface CounterProps {
    amount: number;
}

export function Counter({ amount }: CounterProps) {
    return (
        <CounterContainer>
            <p>{amount}</p>
        </CounterContainer>
    )
}