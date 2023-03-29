import React, { useState } from 'react';
import { Title } from './styles';
import { Button, Input } from 'components';
import { useEmployee } from 'context/Employee';

const Welcome = () => {
  const [code, setCode] = useState('');
  const { isLoading, getBeforeDays } = useEmployee();

  return (
    <>
      <Title>
        Ponto <strong>Ilumeo</strong>
      </Title>
      <Input
        label="Código do usuário"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <Button
        onClick={e => {
          e.preventDefault();
          getBeforeDays(code);
        }}
        disabled={isLoading && code === ''}
      >
        {isLoading ? 'Carregando' : 'Confirmar'}
      </Button>
    </>
  );
};

export default Welcome;
