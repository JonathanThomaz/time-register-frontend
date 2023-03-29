import React from 'react';
import { Container, Content } from './styles';
import { useEmployee } from 'context/Employee';
import Welcome from 'screens/Welcome';
import TimeRegister from 'screens/TimeRegister';

const Home = () => {
  const { beforeDays } = useEmployee();

  return (
    <Container>
      <Content>
        {beforeDays.length > 0 ? <TimeRegister /> : <Welcome />}
      </Content>
    </Container>
  );
};

export default Home;
