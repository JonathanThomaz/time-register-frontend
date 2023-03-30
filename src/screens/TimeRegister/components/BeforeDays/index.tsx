import React from 'react';
import { ITimeRegister } from 'interfaces';
import { format } from 'date-fns';
import { Container, TimeRegisterContainer, Title } from './styles';
import { useEmployee } from 'context';
import { getTime } from './../../functions/index';

export const BeforeDays = () => {
  const { beforeDays } = useEmployee();
  const renderItems = (array: ITimeRegister[]) => {
    return array.map(item => {
      return (
        <TimeRegisterContainer key={`${item.id}`}>
          <span>{format(new Date(item.startDateTime), 'ee/MM/yy')}</span>
          <span>
            <strong>{getTime(item.startDateTime, item.endDateTime)}</strong>
          </span>
        </TimeRegisterContainer>
      );
    });
  };

  return (
    <Container>
      <Title>Dias anteriores</Title>
      {renderItems(beforeDays)}
    </Container>
  );
};
