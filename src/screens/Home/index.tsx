import React from 'react';
import { Container, Content, Title } from './styles';
import { Button, Input } from 'components';

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>
          Ponto <strong>Ilumeo</strong>
        </Title>
        <Input label="Código do usuário" />
        <Button>Confirmar</Button>
      </Content>
    </Container>
  );
};

export default Home;
