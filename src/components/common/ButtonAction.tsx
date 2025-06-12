import React from 'react';
import styled from 'styled-components';

const ButtonActionStyled = styled.button`
  height: 40px;
  padding: 0 16px 0 12px;
  display: flex;
  align-items: center;
  column-gap: 4px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    background: #eeeeee;
  }

  .text {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }
`;

type Props = {
  onClick?: () => void;
  icon?: React.ReactNode;
  text: string;
  disabled?: boolean;
};
const ButtonAction = ({ onClick, icon, text, disabled }: Props) => {
  return (
    <ButtonActionStyled
      onClick={() => {
        if (!disabled && onClick) {
          onClick();
        }
      }}
    >
      {icon && icon}
      <span className="text">{text}</span>
    </ButtonActionStyled>
  );
};

export default ButtonAction;
