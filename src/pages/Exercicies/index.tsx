import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { List } from "../../components/List";
import { Subtitle, Title } from "../../components/Title";
import { deleteDivision, getDivision, getDivisions, getDivisionsByTrainingId } from "../../hooks/useDivision";
import { deleteExercicie, getExerciciesByDivisionId } from "../../hooks/useExercicie";
import { getTraining } from "../../hooks/useTraining";
import { Container } from "../Home/styles";
import { BackContent, TitleContainer } from "./styles";


type ExercicieItem = {
    id: string;
    title: string;
    descriptionOne?: string;
}
type ParamType = {
    id: string;
}


export function Exercicies() {

    const { id } = useParams<ParamType>();
    const division = getDivision(id);

    const navigate = useNavigate();

    const [exercicieItems, setExercicieItems] = useState<ExercicieItem[]>([]);
    const [refreshKey, setRefreshKey] = useState<number>(0);

    const handleDelete = (id: string) => {
        deleteExercicie(id);
        setRefreshKey(state =>  state+1);
    }

    useEffect(() => {
        const exercicies = getExerciciesByDivisionId(id);

        const newExercicies = exercicies.map((item) => {
            return {
                id: item.id,
                title: item.title,
                descriptionOne: item.description
            }
        });
        setExercicieItems(newExercicies);
    }, [refreshKey]);

    
    function handleOpenItem(id: string) {
        navigate(`/evolutions/${id}`);
    }

    const handleCreateItem = () => {
        navigate(`/exercicies/create/${id}`);
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <Container>
            <BackContent>
                <Button size="sm" title="Voltar" onClick={handleGoBack}>
                    <BiArrowBack size="1rem" />
                </Button>
            </BackContent>
            <TitleContainer>
                <Title>exercicios<p>da divisão</p></Title>
                <Button size="md" onClick={() => handleCreateItem()}>Adicionar</Button>
            </TitleContainer>
            <Divider />
            <Subtitle>{division?.title}</Subtitle>
            <List items={exercicieItems} onClick={handleOpenItem} onDelete={handleDelete} />
        </Container>
    )
}