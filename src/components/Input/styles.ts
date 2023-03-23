import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 8px 14px;
  border-radius: 4px;
  label {
    font-weight: 300;
    font-size: 12px;
  }
  input {
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 21.6px;
  }
`;
