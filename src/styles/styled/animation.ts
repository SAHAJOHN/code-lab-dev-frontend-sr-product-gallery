import styled, { keyframes } from 'styled-components';

export const FadeInElement = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeInStyled = styled.div`
  animation: ${FadeInElement} 0.3s ease-in;
`;
