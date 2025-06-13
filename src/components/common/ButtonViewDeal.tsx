import React from 'react';
import styled from 'styled-components';
import SvgArrowExport from '@/components/svg-icons/SvgArrowExport';

const ButtonViewDealStyled = styled.button`
  width: 100%;
  background: #18a661;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  border-radius: 38px;
  height: 36px;
  padding: 0 24px;
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    background: #118048;
  }

  span {
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
`;
const ButtonViewDeal = () => {
  return (
    <ButtonViewDealStyled>
      <span>View Deal</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <SvgArrowExport />
      </svg>
    </ButtonViewDealStyled>
  );
};

export default ButtonViewDeal;
