import styled from 'styled-components';
import { ReactElement } from 'react';

const MainLayoutStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 12px;
  max-width: 1500px;
  margin-top: 72px;
`;

type MainLayoutProps = {
  children: ReactElement;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainLayoutStyled>{children}</MainLayoutStyled>
    </>
  );
};
export default MainLayout;
