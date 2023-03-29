import styled from 'styled-components';

export const TimeRegisterContainer = styled.div`
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
  background: rgba(217, 217, 217, 0.05);
  border-radius: 4px;
  span,
  span * {
    font-size: 12px;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 7px;
  border-radius: 4px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;
