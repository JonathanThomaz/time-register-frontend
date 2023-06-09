import styled from 'styled-components';
interface IButtonContainer {
  isActive: boolean;
}
export const ButtonContainer = styled.div<IButtonContainer>`
  width: -webkit-fill-available;
  background: linear-gradient(124.18deg, #fe8a00 22.06%, #fe8a00 81.62%);
  text-align: center;
  padding: 0 14px;
  button {
    cursor: pointer;
    width: 100%;

    height: 47px;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  border-radius: 4px;
`;
