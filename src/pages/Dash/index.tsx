import React from "react";
import { useForm } from "react-hook-form";

import { Container, Formcontent, Buttonform } from './styles';

//Componentes:
import Input from '../../components/Input';

type InputsProps = {
    name: string;   
};

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm<InputsProps>();
    const onSubmit = (data: InputsProps) => console.log(data);
    
    return (
        <Container>
            <Formcontent>
                <h1>React Hook Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        title="Nome"
                        name="name" 
                        type="text" 
                        placeholder="informe seu nome" 
                        register={register} 
                    />
                    <Buttonform type="submit">Enviar</Buttonform>
                </form>
            </Formcontent>
        </Container>
    );
}