import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { List } from "../../components/List";
import { Subtitle, Title } from "../../components/Title";
import { deleteEvolution, getEvolutionsByExercicieId } from "../../hooks/useEvolution";
import { getExercicie } from "../../hooks/useExercicie";
import { Container } from "../Home/styles";
import { BackContent, SubtitleContainer, TitleContainer } from "./styles";
import { format } from 'date-fns';
import { Counter } from "../../components/Form/Counter";

type EvolutionItem = {
    id: string;
    title: string;
    descriptionOne?: string;
    details: EvolutionItemRep[]
}

type EvolutionItemRep = {
    description: string;
}

type ParamType = {
    id: string;
}


export function Evolutions() {

    const { id } = useParams<ParamType>();
    const exercicie = getExercicie(id);

    const navigate = useNavigate();

    const [evolutionItems, setEvolutionItems] = useState<EvolutionItem[]>([]);
    const [refreshKey, setRefreshKey] = useState<number>(0);

    const handleDelete = (id: string) => {
        deleteEvolution(id);
        setRefreshKey(state => state + 1);
    }

    useEffect(() => {
        const evolutions = getEvolutionsByExercicieId(id);

        const newEvolutions = evolutions.map((item) => {
            return {
                id: item.id,
                title: format(new Date(item.date), 'dd/MM/yyyy'),
                descriptionOne: item.description,
                details: item.reps.map((rep) => {
                    return { description: `${rep.reps} / ${rep.weight}` }
                })
            }
        });

        console.log(newEvolutions);
        setEvolutionItems(newEvolutions);
    }, [refreshKey]);


    function handleOpenItem(id: string) {

    }

    const handleCreateItem = () => {
        navigate(`/evolutions/create/${id}`);
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
                <Title>evolução<p>de carga</p></Title>
                <Button size="md" onClick={() => handleCreateItem()}>Adicionar</Button>
            </TitleContainer>
            <Divider />
            <SubtitleContainer>
                <Subtitle>{exercicie?.title}</Subtitle>
                <Counter amount={evolutionItems.length} />
            </SubtitleContainer>

            <List
                items={evolutionItems}
                onClick={handleOpenItem}
                onDelete={handleDelete}
                titleEmptyList="Você não possui histórico cadastrado"
                subtitleEmptyList="Adicione o histórico diário para acompanhar sua evolução" />
        </Container>
    )
}
