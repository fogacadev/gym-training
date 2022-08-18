
type DayOfWeek = {
    index: number;
    name: string;
}

const daysOfWeek = [
    {
        index:0,
        name: 'Domingo'
    },
    {
        index:1,
        name: 'Segunda-Feira'
    },
    {
        index:2,
        name: 'Terça-Feira'
    },
    {
        index:3,
        name: 'Quarta-Feira'
    },
    {
        index:4,
        name: 'Quinta-Feira'
    },
    {
        index:5,
        name: 'Sexta-Feira'
    },
    {
        index:6,
        name: 'Sabado'
    }
]

export function getDaysOfWeek() : DayOfWeek[] {
    return daysOfWeek;
}