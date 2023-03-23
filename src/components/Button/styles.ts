import styled from 'styled-components';
interface IButtonContainer {
  isActive: boolean;
}
export const ButtonContainer = styled.div<IButtonContainer>`
  background: linear-gradient(124.18deg, #fe8a00 22.06%, #fe8a00 81.62%);
  width: 100%;
  text-align: center;
  padding: 14px;
  cursor: pointer;
  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
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
