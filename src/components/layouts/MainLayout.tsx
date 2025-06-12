import styled from 'styled-components';
import { ReactElement } from 'react';
import Navigation from '@/components/layouts/Navigation';
import Aside from '@/components/layouts/Aside';

const MainLayoutStyled = styled.main`
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
  min-height: calc(100dvh - 64px);
  margin-top: 64px;
  display: flex;
`;

const ContentWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    width: 1480px;
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
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
        <ContentWrapperStyled>
          <div className="content">{children}</div>
        </ContentWrapperStyled>
      </MainLayoutStyled>
    </>
  );
};
export default MainLayout;
