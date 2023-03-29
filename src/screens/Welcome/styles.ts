import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: auto;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: -webkit-fill-available;
  max-width: 365px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
export const Title = styled.span`
  font-size: 1.3rem;
  * {
    font-size: 1.3rem;
  }
`;
