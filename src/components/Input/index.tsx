import React from 'react';

import { Container } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    title?: string;
    register: RefReturn;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, title, register }) => {
    return(
        <Container>
            <h1>Meu input</h1>
        </Container>
    );
};

export default Input;