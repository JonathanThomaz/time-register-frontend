import React, { useState } from 'react';
import { Container, Content, Title } from './styles';
import { Button, Input } from 'components';
import instance from 'services';
import { ITimeRegister } from 'interfaces';
import { TimeRegister } from 'screens/TimeRegister';

interface IAxiosResponse {
  result: ITimeRegister[];
}

const Home = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<ITimeRegister[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      const response = await instance.get<IAxiosResponse>(
        `/time-register/${code}`
      );
      setResult(response.data.result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const renderInsertCode = () => {
    if (result?.length !== 0) return <TimeRegister array={result} />;
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
        <Button onClick={handleConfirm} disabled={isLoading && code === ''}>
          {isLoading ? 'Carregando' : 'Confirmar'}
        </Button>
      </>
    );
  };

  return (
    <Container>
      <Content>{renderInsertCode()}</Content>
    </Container>
  );
};

export default Home;
