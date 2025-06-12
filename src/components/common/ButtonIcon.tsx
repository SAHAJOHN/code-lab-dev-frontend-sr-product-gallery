import React from 'react';
import styled from 'styled-components';

const ButtonIconStyled = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.buttonIcon}`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;
type Props = {
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
};
const ButtonIcon = ({ onClick, disabled, icon }: Props) => {
  return (
    <ButtonIconStyled
      onClick={() => {
        if (!disabled && onClick) {
          onClick();
        }
      }}
    >
      {icon}
    </ButtonIconStyled>
  );
};

export default ButtonIcon;
