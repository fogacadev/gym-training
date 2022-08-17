import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Divider } from "../../../components/Divider";
import { GroupForm, Input, InputError } from "../../../components/Form/Input";
import { Subtitle, Title } from "../../../components/Title";
import { AddRepContent, BackContent, Container, RepListContent } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiArrowBack } from 'react-icons/bi';
import { addEvolution } from "../../../hooks/useEvolution";
import { useState } from "react";
import { CgGym } from "react-icons/cg";
import { GiBiceps } from "react-icons/gi";
import { BsTrash } from "react-icons/bs";

type EvolutionFormData = {
    date: Date;
    description: string;
}

type RepItem = {
    id: string;
    reps: string;
    weight: string;
}

const divisionFormSchema = yup.object().shape({
    date: yup.date().required('Data obrigatória').typeError('Data obrigatória'),
    description: yup.string().required('Descrição obrigatória').max(100, "Maximo 100 caracteres"),
});

type ParamTypes = {
    id: string;
}

export function CreateEvolution() {
    const navigate = useNavigate();
    const { id } = useParams<ParamTypes>();

    const [reps, setReps] = useState<RepItem[]>([]);
    const [repInput, setRepInput] = useState<string>('');
    const [weightInput, setWeightInput] = useState<string>('');

    const handleAddDivision: SubmitHandler<EvolutionFormData> = ({ date, description }: EvolutionFormData) => {
        console.log('eita');
        const newEvolution = {
            id: uuidv4(),
            date: date,
            description: description,
            exercicieId: `${id}`,
            reps: reps
        }

        addEvolution(newEvolution);
        navigate(-1);
    }

    const handleAddRep = () => {
        const rep = {
            id: uuidv4(),
            reps: repInput,
            weight: weightInput,
        };

        setReps([...reps, rep]);
        setRepInput('');
        setWeightInput('');
    }

    const handleDeleteRep = (id: string) => {
        const newReps = reps.filter(item => item.id !== id);

        setReps(newReps);
    }

    const handleGoBack = () => {
        navigate(-1);
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<EvolutionFormData>({
        resolver: yupResolver(divisionFormSchema)
    });

    return (
        <Container>
            <BackContent>
                <Button size="sm" title="Voltar" onClick={handleGoBack}>
                    <BiArrowBack size="1rem" />
                </Button>
            </BackContent>

            <Title>evolução <p>de carga</p></Title>
            <Divider />
            <Subtitle>Criação</Subtitle>
            <form>

                <GroupForm>
                    <Input type="date" {...register('date')} placeholder="Data"/>
                    <InputError>{errors.date?.message}</InputError>
                </GroupForm>

                <GroupForm>
                    <Input {...register('description')} placeholder="Descrição" />
                    <InputError>{errors.description?.message}</InputError>
                </GroupForm>
                <RepListContent>
                    {reps.length > 0 ?? (
                        <Subtitle>Repetições</Subtitle>
                    )}
                    {
                        reps.map(item => {
                            return (
                                <div key={item.id}>
                                    <div>
                                        <GiBiceps />
                                        {item.reps}
                                        -
                                        {item.weight}
                                    </div>
                                    <Button size="sm"
                                        type="button"
                                        onClick={() => handleDeleteRep(item.id)}>
                                        <BsTrash />
                                    </Button>
                                </div>
                            )
                        })
                    }
                </RepListContent>
                <Subtitle>
                    Adicionar repetições
                </Subtitle>
                <AddRepContent>
                    <Input
                        width="20px"
                        placeholder="12rep"
                        onChange={(e) => setRepInput(e.target.value)}
                        value={repInput} />
                    <Input width="20px"
                        placeholder="20kg"
                        onChange={(e) => setWeightInput(e.target.value)}
                        value={weightInput} />
                    <Button size="lg"
                        type="button"
                        onClick={handleAddRep}><CgGym /></Button>
                </AddRepContent>


                <Button size="lg" type="button" onClick={handleSubmit(handleAddDivision)}>Adicionar</Button>
            </form>
        </Container>
    )
}