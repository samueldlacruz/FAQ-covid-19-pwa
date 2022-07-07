import styled, { keyframes } from 'styled-components';

type LoadingContainerI = {
    iconSize: "sm" | "md" | "lg" | "xl";
}

const zoom = keyframes`
  0% {
    transform: scale(0.85) rotate(10deg);
  }
  30% {
    transform: scale(0.95) rotate(-10deg);
  },
  60% {
    transform: scale(1.05) rotate(10deg);
  }
  80% {
    transform: scale(1.05) rotate(-10deg);
  },
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

export const LoadingContainer = styled.div<LoadingContainerI>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text};

  span {
    font-size: ${props => props.iconSize === 'sm' ? '1.8rem' : props.iconSize === 'md' ? '2.5rem' : props.iconSize === 'lg' ? '3.8rem' : '1.8rem'};
    animation: ${zoom} 2s infinite;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
`;