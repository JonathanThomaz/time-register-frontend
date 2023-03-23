import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.fonts.primaryFamily};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  body {
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0;
  }
`;

export * from './theme';
