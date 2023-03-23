import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...rest }: IInput) => {
  return (
    <Container>
      <label>{label}</label>
      <input {...rest} />
    </Container>
  );
};
