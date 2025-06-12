import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '@/components/layouts/MainLayout';
import styled from 'styled-components';

const IndexPageStyled = styled.article`
  width: 100%;
`;
const IndexPage = () => {
  // const { t } = useTranslation('common');
  // console.log('t', t('greeting'));
  return <IndexPageStyled></IndexPageStyled>;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default IndexPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
