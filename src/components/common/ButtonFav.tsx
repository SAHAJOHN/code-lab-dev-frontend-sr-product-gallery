import React from 'react';
import styled from 'styled-components';
import SvgFavIcon from '@/components/svg-icons/SvgFavIcon';

const ButtonFavStyled = styled.button`
  height: 36px;
  width: 36px;
  min-width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #18a661;
  background: white;
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    background: rgba(24, 166, 97, 0.15);
  }
`;

const ButtonFav = () => {
  return (
    <ButtonFavStyled>
      <SvgFavIcon />
    </ButtonFavStyled>
  );
};

export default ButtonFav;
