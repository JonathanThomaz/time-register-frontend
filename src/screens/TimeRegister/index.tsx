import React from 'react';
import { Container, Header, Hours, Strong, User } from './styles';
import { BeforeDays } from './components';
import { Button } from 'components';
import { getTime } from './functions/index';

const TimeRegister = () => {
  return (
    <Container>
      <Header>
        <strong>Relógio de ponto</strong>
        <User>
          <strong>#userCode</strong>
          <span>Usuário</span>
        </User>
      </Header>
      <Hours>
        <Strong size="24px">{getTime('', '')}</Strong>
        <Strong size="12px">Horas de hoje</Strong>
      </Hours>
      <Button>Teste</Button>
      <BeforeDays />
    </Container>
  );
};

export default TimeRegister;
