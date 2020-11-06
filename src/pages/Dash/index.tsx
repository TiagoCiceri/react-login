import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Formcontent, Buttonform } from './styles';

//Componentes:
import Input from '../../components/Input';
import Check from '../../components/Checkbox';
import Radio from '../../components/Radio';

const languages = [{id: 1, name: 'React'},
                   {id: 2, name: 'Node'},
                   {id: 3, name: 'Delph'},
                  ];

type InputsProps = {
    name: string;
    email: string;
    checklanguages: Array<number>;
    expertise: string;
};

const schema = yup.object().shape({
    name: yup.string()
        .required('Preencher o campo nome.'),
    email: yup.string()
        .required('Preencher o campo e-mail.')
        .email('Informe um e-mail válido.'),
});

export default function App() {
    const { register, handleSubmit, reset, errors } = useForm<InputsProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: InputsProps) => console.log(data);

    useEffect(() => {

        //setTime para simular um carregamento obtendo da API Fake
        setTimeout(() => {
            const data = {
                name: 'Tiago Ciceri',
                email: 'tiagociceri@gmail.com',
                checklanguages: [1, 3],
                expertise: '2',
            } as InputsProps;
            
            reset(data);

        }, 2000);
        
    },[reset]);

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

                    <Check name="checklanguages" items={languages} register={register} />
                    
                    <Radio
                        name="expertise"
                        register={register}
                        id="1"
                        nameDisplay="Iniciante"
                    />
                    <Radio
                        name="expertise"
                        register={register}
                        id="2"
                        nameDisplay="Intermediário"
                    />
                    <Radio
                        name="expertise"
                        register={register}
                        id="3"
                        nameDisplay="Avançado"
                    />

                    <Buttonform type="submit">Enviar</Buttonform>
                </form>
            </Formcontent>
        </Container>
    );
}