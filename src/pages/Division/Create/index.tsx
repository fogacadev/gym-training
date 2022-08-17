import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Divider } from "../../../components/Divider";
import { GroupForm, Input, InputError } from "../../../components/Form/Input";
import { Subtitle, Title } from "../../../components/Title";
import { addDivision } from "../../../hooks/useDivision";
import { BackContent, Container } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiArrowBack } from 'react-icons/bi';


type DivisionFormData = {
    title: string;
    division: string;
    dayOfWeek: string;
}

const divisionFormSchema = yup.object().shape({
    title: yup.string().required('Titulo obrigatório').max(100, "Máximo 100 caracteres"),
    division: yup.string().required('Descrição obrigatória').max(100, "Maximo 100 caracteres"),
    dayOfWeek: yup.string().required('Dia da semana obrigatória').max(100, "Maximo 100 caracteres")
});

type ParamTypes = {
    id: string;
}

export function CreateDivision() {
    const navigate = useNavigate();
    const { id } = useParams<ParamTypes>();

    const handleAddDivision: SubmitHandler<DivisionFormData> = ({ title, division, dayOfWeek }: DivisionFormData) => {
        console.log('eita');
        const newDivision = {
            id: uuidv4(),
            title: title,
            division: division,
            dayOfWeek: dayOfWeek,
            trainingId: `${id}`
        }

        addDivision(newDivision);
        navigate(-1);
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<DivisionFormData>({
        resolver: yupResolver(divisionFormSchema)
    });

    return (
        <Container>
            <BackContent>
                <Button size="sm" title="Voltar" onClick={handleGoBack}>
                    <BiArrowBack size="1rem" />
                </Button>
            </BackContent>

            <Title>divisão <p>de treino</p></Title>
            <Divider />
            <Subtitle>Criação</Subtitle>
            <form onSubmit={handleSubmit(handleAddDivision)}>

                <GroupForm>
                    <Input {...register('title')} placeholder="Titulo" />
                    <InputError>{errors.title?.message}</InputError>
                </GroupForm>

                <GroupForm>
                    <Input {...register('division')} placeholder="Descrição" />
                    <InputError>{errors.division?.message}</InputError>
                </GroupForm>
                <GroupForm>
                    <Input {...register('dayOfWeek')} placeholder="Dia da semana" />
                    <InputError>{errors.dayOfWeek?.message}</InputError>
                </GroupForm>
                <Button size="lg" type="submit">Adicionar</Button>
            </form>



        </Container>
    )
}