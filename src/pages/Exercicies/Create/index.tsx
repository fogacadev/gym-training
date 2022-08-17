import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Divider } from "../../../components/Divider";
import { GroupForm, Input, InputError } from "../../../components/Form/Input";
import { Subtitle, Title } from "../../../components/Title";
import { BackContent, Container } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiArrowBack } from 'react-icons/bi';
import { addExercicie } from "../../../hooks/useExercicie";

type ExercicieFormData = {
    title: string;
    description: string;
}

const divisionFormSchema = yup.object().shape({
    title: yup.string().required('Titulo obrigatório').max(100, "Máximo 100 caracteres"),
    description: yup.string().required('Descrição obrigatória').max(100, "Maximo 100 caracteres"),
});

type ParamTypes = {
    id: string;
}

export function CreateExercicie() {
    const navigate = useNavigate();
    const { id } = useParams<ParamTypes>();

    const handleAddExercicie: SubmitHandler<ExercicieFormData> = ({ title, description }: ExercicieFormData) => {
        const newExercicie = {
            id: uuidv4(),
            title: title,
            description: description,
            divisionId: `${id}`
        }

        addExercicie(newExercicie);
        navigate(-1);
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ExercicieFormData>({
        resolver: yupResolver(divisionFormSchema)
    });

    return (
        <Container>
            <BackContent>
                <Button size="sm" title="Voltar" onClick={handleGoBack}>
                    <BiArrowBack size="1rem" />
                </Button>
            </BackContent>

            <Title>exercicios<p>da divisão</p></Title>
            <Divider />
            <Subtitle>Criação</Subtitle>
            <form onSubmit={handleSubmit(handleAddExercicie)}>

                <GroupForm>
                    <Input {...register('title')} placeholder="Titulo" />
                    <InputError>{errors.title?.message}</InputError>
                </GroupForm>

                <GroupForm>
                    <Input {...register('description')} placeholder="Descrição" />
                    <InputError>{errors.description?.message}</InputError>
                </GroupForm>
                <Button size="lg" type="submit">Adicionar</Button>
            </form>



        </Container>
    )
}