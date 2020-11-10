import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

import { Container, Formcontent, Buttonform } from './styles';

//Componentes:
import Input from '../../components/Input';
import { history } from "../../history";


type InputsProps = {
    name: string;
    password: string;
    confirmPassword: string;
    email: string;
    expertise: string;
};

const schema = yup.object().shape({
    name: yup.string()
        .min(3, 'Minímo 6 caracters.')
        .max(60, 'Máximo 10 caracters.')
        .required('Preencher o campo nome.'),
    email: yup.string()
        .required('Preencher o campo e-mail.')
        .email('Informe um e-mail válido.'),
    password: yup.string()
        .min(6, 'Minímo 6 caracters.')
        .max(10, 'Máximo 10 caracters.')
        .required('Preencher o campo Password.'),
    confirmPassword: yup.string()
        .min(6, 'Minímo 6 caracters.')
        .max(10, 'Máximo 10 caracters.')
        .required('Preencher o campo Password.')
        .test('passwords ok', 'Passwords são diferentes', function(value) {
            return this.parent.password === value;
          }),
});

const Register = () => {
    const { register, handleSubmit, reset, errors } = useForm<InputsProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (dataInput: InputsProps) => {
        console.log(dataInput);

        axios.post('http://127.0.0.1:3333/user', dataInput)
            .then(resp => {
                const { data } = resp;
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
            .catch((error) => { console.log('MEU ERRO: ' + error) })

    };

    return (
        <Container>
            <Formcontent>
                <h1>Registro de Usuário </h1>
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

                    <Input
                        title="Password"
                        name="password"
                        type="password"
                        placeholder="informe sua senha"
                        register={register}
                        errors={errors.password}
                    />

                    <Input
                        title="Confirme o password"
                        name="confirmPassword"
                        type="password"
                        placeholder="confirme sua senha"
                        register={register}
                        errors={errors.confirmPassword}
                    />

                    <Buttonform type="submit">Registrar</Buttonform>
                </form>
            </Formcontent>
        </Container>
    );


};

export default Register;