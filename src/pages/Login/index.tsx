import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

import { Container, Formcontent, Buttonform } from './styles';

//Componentes:
import Input from '../../components/Input';
import Check from '../../components/Checkbox';
import { history } from "../../history";

const remember = [{ id: 1, name: 'Lembrar-me' }];

type InputsProps = {
    password: string;
    email: string;
    remember: Array<number>;
    expertise: string;
};

const schema = yup.object().shape({
    password: yup.string()
        .min(6,'Minímo 6 caracters.')
        .max(10,'Máximo 10 caracters.')
        .required('Preencher o campo Password.'),
    email: yup.string()
        .required('Preencher o campo e-mail.')
        .email('Informe um e-mail válido.'),
});

const Login = () => {
    const { register, handleSubmit, reset, errors } = useForm<InputsProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (dataInput: InputsProps) => {
        console.log(dataInput);
        
        axios.post('http://127.0.0.1:3333/login', dataInput)
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
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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


                    <Check name="ckeckRemember" items={remember} register={register} />

                    <Buttonform type="submit">Enviar</Buttonform>
                </form>
            </Formcontent>
        </Container>
    );


};

export default Login;