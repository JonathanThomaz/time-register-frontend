import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export const Button = ({ children, isActive = false, ...rest }: IButton) => (
  <ButtonContainer isActive={isActive}>
    <button {...rest}>{children}</button>
  </ButtonContainer>
);
