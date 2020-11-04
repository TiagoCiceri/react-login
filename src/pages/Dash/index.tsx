import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Formcontent, Buttonform } from './styles';

//Componentes:
import Input from '../../components/Input';
import Check from '../../components/Checkbox';

const languages = [{id: 1, name: 'React'},{id: 2, name: 'Node'}]

type InputsProps = {
    name: string;
    email: string;
    checklanguages: Array<number>;
};

const schema = yup.object().shape({
    name: yup.string()
        .required('Preencher o campo nome.'),
    email: yup.string()
        .required('Preencher o campo e-mail.')
        .email('Informe um e-mail válido.'),
});

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm<InputsProps>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: InputsProps) => console.log(data);

    return (
        <Container>
            <Formcontent>
                <h1>React Hook Form </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        title="Nome"
                        name="name"
                        type="text"
                        placeholder="informe seu nome"
                        register={register}
                        errors={errors.name}
                    />

                    <Input
                        title="e-mail"
                        name="email"
                        type="text"
                        placeholder="informe seu e-mail"
                        register={register}
                        errors={errors.email}
                    />

                    <Check name="checklanguage" items={languages} register={register} />

                    <Buttonform type="submit">Enviar</Buttonform>
                </form>
            </Formcontent>
        </Container>
    );
}