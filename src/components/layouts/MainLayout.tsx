import styled from 'styled-components';
import { ReactElement } from 'react';
import Navigation from '@/components/layouts/Navigation';
import Aside from '@/components/layouts/Aside';

const MainLayoutStyled = styled.main`
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 64px;
  display: flex;
  position: relative;
  height: calc(100dvh - 64px);
  overflow: auto;
  &:before {
    content: '';
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    position: fixed;
    z-index: 1;
    height: 24px;
    right: 0;
    bottom: 0;
    width: calc(100% - 280px);
  }
`;

const ContentWrapperStyled = styled.div`
  width: 1480px;
  max-width: calc(100vw - 440px);
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
type MainLayoutProps = {
  children: ReactElement;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navigation />
      <MainLayoutStyled>
        <Aside />
        <ContentWrapperStyled>{children}</ContentWrapperStyled>
      </MainLayoutStyled>
    </>
  );
};
export default MainLayout;
