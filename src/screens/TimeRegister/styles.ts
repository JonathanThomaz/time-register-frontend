import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 7px;
  border-radius: 4px;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    font-size: 12px;
  }
`;
export const User = styled.div`
  width: fit-content;
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: space-between;
  span {
    color: ${({ theme }) => theme.colors.text}=>;
  }
`;

export const Hours = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 18px;
  padding-top: 10px;
`;
interface IStrong {
  size: string;
}
export const Strong = styled.strong<IStrong>`
  font-size: ${({ size }) => size};
`;
