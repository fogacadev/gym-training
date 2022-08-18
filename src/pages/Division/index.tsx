import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { List } from "../../components/List";
import { Subtitle, Title } from "../../components/Title";
import { deleteDivision, getDivisions, getDivisionsByTrainingId } from "../../hooks/useDivision";
import { getTraining } from "../../hooks/useTraining";
import { Container } from "../Home/styles";
import { BackContent, TitleContainer } from "./styles";

type DivisionItem = {
    id: string;
    title: string;
    descriptionOne?: string;
    descriptionTwo?: string;
}

type ParamType = {
    id: string;
}


export function Division() {

    const { id } = useParams<ParamType>();
    const training = getTraining(id);

    const navigate = useNavigate();

    const [divisionItems, setDivisionItems] = useState<DivisionItem[]>([]);
    const [refreshKey, setRefreshKey] = useState<number>(0);

    const handleDelete = (id: string) => {
        deleteDivision(id);
        setRefreshKey(state =>  state+1);
    }

    useEffect(() => {
        const divisions = getDivisionsByTrainingId(id);

        const newDivisions = divisions.map((item) => {
            return {
                id: item.id,
                title: item.title,
                descriptionOne: item.division,
                descriptionTwo: item.dayOfWeek
            }
        });
        setDivisionItems(newDivisions);
    }, [refreshKey]);

    
    function handleOpenItem(id: string) {
        navigate(`/exercicies/${id}`);
    }

    const handleCreateItem = () => {
        navigate(`/divisions/create/${id}`);
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
                <Title>divisão<p>de treino</p></Title>
                <Button size="md" onClick={() => handleCreateItem()}>Adicionar</Button>
            </TitleContainer>
            <Divider />
            <Subtitle>{training?.title}</Subtitle>
            <List 
            items={divisionItems} 
            onClick={handleOpenItem} 
            onDelete={handleDelete}
            titleEmptyList="Você não possui divisões cadastradas"
            subtitleEmptyList="Crie divisões para separar seu treino" />
        </Container>
    )
}
