import { GiBiceps } from "react-icons/gi";
import { AboutContent, ListItemContainer, TimelineContent, TrashIcon } from "./styles";
import { v4 as uuidv4 } from 'uuid';

interface ListItemProps {
    id: string;
    title: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    onDelete: (id: string) => void;
    onClick: (id: string) => void;
    details?: Details[];
}

interface Details {
    description: string;
}

export function ListItem({ id, title, descriptionOne = undefined, descriptionTwo = undefined, onDelete, onClick, details = [] }: ListItemProps) {

    return (
        <ListItemContainer>
            <div>
                <button onClick={() => onClick(id)}>{title}</button>
                <AboutContent>
                    <div>
                        {
                            descriptionOne ?? (
                                <small>{descriptionOne}</small>
                            )
                        }
                    </div>
                    <div>
                        {
                            descriptionTwo ?? (
                                <small>{descriptionTwo}</small>
                            )
                        }
                    </div>
                </AboutContent>
                {
                    details.length > 0 && (

                        <TimelineContent>
                            {
                                details.map(item => {
                                    return (
                                        <div key={uuidv4()}>
                                            <GiBiceps />
                                            {item.description}
                                        </div>
                                    )
                                })
                            }
                        </TimelineContent>
                    )
                }

            </div>
            <TrashIcon onClick={() => onDelete(id)} />
        </ListItemContainer>
    )
}