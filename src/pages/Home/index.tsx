import { Button } from "../../components/Button"
import { Container, ImgContent, TitleContainer } from "./styles"
import logo from '../../assets/logo.svg';
import { Title } from "../../components/Title";
import { Divider } from "../../components/Divider";
import { Link } from "../../components/Form/Link";
import { useEffect, useState } from "react";
import { List } from "../../components/List";
import { deleteTraining, getTrainings } from "../../hooks/useTraining";
import { useNavigate } from "react-router-dom";

type TrainingItem = {
    id: string;
    title: string;
    descriptionOne: string;
}

export function Home() {
    const navigate = useNavigate();
    const [trainingItems, setTrainingItems] = useState<TrainingItem[]>([]);
    
    const [refreshKey, setRefreshKey] = useState<number>(1);

    const handleDelete = (id: string) => {
        deleteTraining(id);
        setRefreshKey(refreshKey + 1);
    }

    useEffect(() => {
        const trainings = getTrainings();

        const newTrainings = trainings.map((item) => {
            return {
                id: item.id,
                title: item.title,
                descriptionOne: item.description
            }
        });
        setTrainingItems(newTrainings);
    }, [refreshKey]);

    

   

    function handleOpenItem(id: string) {
        navigate(`divisions/${id}`);
    }

    function handleCreateItem(){
        navigate('create');
    }

    return (
        <Container>
            <ImgContent>
                <img src={logo} />
            </ImgContent>
            <TitleContainer>
                <Title>Meus<p>treinos</p></Title>
                <Button size="md" onClick={() => handleCreateItem()}>Adicionar</Button>
            </TitleContainer>

            <Divider />
            <List items={trainingItems} onClick={handleOpenItem} onDelete={handleDelete} />
        </Container>

    )
}

