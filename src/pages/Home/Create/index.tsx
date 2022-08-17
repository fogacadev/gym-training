import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Divider } from "../../../components/Divider";
import { GroupForm, Input, InputError } from "../../../components/Form/Input";
import { Link } from "../../../components/Form/Link";
import { Subtitle, Title } from "../../../components/Title";
import { addTraining } from "../../../hooks/useTraining";
import { BackContent, Container } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { FormState, SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiArrowBack } from 'react-icons/bi';
type TrainingFormData = {
    title: string;
    description: string;
}

const trainingFormSchema = yup.object().shape({
    title: yup.string().required('Titulo obrigatório').max(100, "Máximo 100 caracteres"),
    description: yup.string().required('Descrição obrigatória').max(100, "Maximo 100 caracteres")
});

export function CreateTraining() {
    const navigate = useNavigate();

    const handleAddTraining: SubmitHandler<TrainingFormData> = ({ title, description }: TrainingFormData) => {
        console.log('eita');
        const training = {
            id: uuidv4(),
            title: title,
            description: description
        }
        console.log(training)
        addTraining(training);
        navigate('/');
    }

    const handleGoBack = () => {
        navigate('/');
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<TrainingFormData>({
        resolver: yupResolver(trainingFormSchema)
    });


    return (
        <Container>
            <BackContent>
                <Button size="sm" title="Voltar" onClick={handleGoBack}>
                    <BiArrowBack size="1rem" />
                </Button>
            </BackContent>

            <Title>meus <p>treinos</p></Title>
            <Divider />
            <Subtitle>Criação</Subtitle>
            <form onSubmit={handleSubmit(handleAddTraining)}>

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