import React from 'react';
import { ITimeRegister } from 'interfaces';
import { format, intervalToDuration } from 'date-fns';
import { Container, TimeRegisterContainer, Title } from './styles';
interface ITimeRegisterScreen {
  array: ITimeRegister[];
}
export const TimeRegister = ({ array = [] }: ITimeRegisterScreen) => {
  const renderItems = () => {
    return array.map(item => {
      const duration = intervalToDuration({
        start: new Date(item.startDateTime),
        end: new Date(item.endDateTime)
      });
      return (
        <TimeRegisterContainer key={`${item.id}`}>
          <span>{format(new Date(item.startDateTime), 'ee/MM/yy')}</span>
          <span>
            <strong>
              {duration.hours}h {duration.minutes}m
            </strong>
          </span>
        </TimeRegisterContainer>
      );
    });
  };

  return (
    <Container>
      <Title>Dias anteriores</Title>
      {renderItems()}
    </Container>
  );
};
