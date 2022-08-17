import { GiBiceps } from "react-icons/gi";
import { AboutContent, ConfirmIcon, ListItemContainer, TimelineContent, TrashIcon } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

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

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function ListItem({ id, title, descriptionOne = undefined, descriptionTwo = undefined, onDelete, onClick, details = [] }: ListItemProps) {

    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        if (isDeleting) {
            sleep(3000).then(() => {
                setIsDeleting(false);
            });
        }

    }, [isDeleting])

    const handleDelete = (id: string) => {
        onDelete(id);
        setIsDeleting(false);
    }

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
            {!isDeleting ? (
                <TrashIcon onClick={() => setIsDeleting(true)} />
            ) : (
                <ConfirmIcon onClick={() => handleDelete(id)} />
            )}

        </ListItemContainer>
    )
}