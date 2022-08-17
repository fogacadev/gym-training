import { ListItem } from "./ListItem";
import { ListContainer } from "./styles";

type ListItem = {
    id: string;
    title: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    details?: Details[]
}

type Details = {
    description: string;
}

interface ListProps {
    items: ListItem[];
    onClick: (id: string) => void;
    onDelete: (id: string) => void;
}

export function List({ items, onClick, onDelete }: ListProps) {

    return (
        <ListContainer>
            {items.map(item =>{
                return(
                    <ListItem id={item.id} 
                    title={item.title} 
                    descriptionOne={item.descriptionOne} 
                    descriptionTwo={item.descriptionTwo}
                    details={item.details}
                    onDelete={onDelete}
                    onClick={onClick}
                    key={item.id}/>
                )
            })}
        </ListContainer>
    )
}