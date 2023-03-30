import React, { useEffect } from 'react';
import { Container, Header, Hours, Strong, User } from './styles';
import { BeforeDays } from './components';
import { Button } from 'components';
import { getTime } from './functions/index';
import { useEmployee } from 'context';

const TimeRegister = () => {
  const {
    code,
    getCurrentHours,
    currentHours,
    startTimeRegister,
    isLoading,
    endTimeRegister
  } = useEmployee();

  useEffect(() => {
    getCurrentHours(code);
  }, []);

  return (
    <Container>
      <Header>
        <strong>Relógio de ponto</strong>
        <User>
          <strong>#{code}</strong>
          <span>Usuário</span>
        </User>
      </Header>
      <Hours>
        <Strong size="24px">
          {isLoading
            ? 'Carregando...'
            : getTime(
                currentHours?.startDateTime ?? '',
                currentHours?.endDateTime ?? new Date().toISOString()
              )}
        </Strong>
        <Strong size="12px">Horas de hoje</Strong>
      </Hours>
      {!currentHours?.endDateTime && (
        <Button
          onClick={() =>
            currentHours ? endTimeRegister(code) : startTimeRegister(code)
          }
          disabled={isLoading}
        >
          {currentHours ? 'Hora de saída' : 'Hora de entrada'}
        </Button>
      )}
      <BeforeDays />
    </Container>
  );
};

export default TimeRegister;
