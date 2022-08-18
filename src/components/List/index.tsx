import { ListItem } from "./ListItem";
import { EmptyContainer, ListContainer } from "./styles";
import { CgGym } from "react-icons/cg";
import { defaultTheme } from "../../styles/themes/default";
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
    titleEmptyList?: string;
    subtitleEmptyList?: string;
}

export function List({ items, onClick, onDelete, titleEmptyList, subtitleEmptyList}: ListProps) {

    return (
        <ListContainer>
            {
                (items.length === 0 && titleEmptyList) && (
                    <EmptyContainer>
                        <CgGym size="4rem" color={defaultTheme['gray-400']}/>
                        <p>{titleEmptyList}</p>
                        <small>{subtitleEmptyList}</small>
                    </EmptyContainer>

                )
            }
            {items.map(item => {
                return (
                    <ListItem id={item.id}
                        title={item.title}
                        descriptionOne={item.descriptionOne}
                        descriptionTwo={item.descriptionTwo}
                        details={item.details}
                        onDelete={onDelete}
                        onClick={onClick}
                        key={item.id} />
                )
            })}
        </ListContainer>
    )
}