import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '@/components/layouts/MainLayout';
import styled from 'styled-components';
import Image from 'next/image';
import ButtonAction from '@/components/common/ButtonAction';
import { GetServerSideProps } from 'next';
import apiProduct from '@/services/product';
import { ProductApiResponseType, ProductItemType } from '@/types/product';

const IndexPageStyled = styled.article`
  width: 100%;
  //background: black;
  position: relative;
  padding-top: 40px;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    background: ${({ theme }) => theme.colors.background};
    padding-bottom: 40px;
    .title-group {
      max-width: 300px;
      display: flex;
      flex-direction: column-reverse;
      row-gap: 8px;
      h1 {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
        line-height: 1.3;
      }
      .paragraph-wrap {
        display: flex;
        align-items: center;
        column-gap: 4px;
        p {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.text};
          font-weight: 400;
        }
      }
    }
  }
  .product-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 32px;
    padding-bottom: 40px;
    .product-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 24px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: 24px 20px;
      row-gap: 24px;
      .product-image {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
      }
      p {
        color: ${({ theme }) => theme.colors.description};
        font-weight: 400;
      }
    }
  }
`;
type Props = {
  data: ProductApiResponseType;
};
const IndexPage = ({ data }: Props) => {
  // const { t } = useTranslation('common');
  // console.log('t', t('greeting'));
  console.log('data', data);
  return (
    <IndexPageStyled>
      <header>
        <div className="title-group">
          <h1>Gaming Laptops of December 2022</h1>
          <div className="paragraph-wrap">
            <Image
              src={`/icons/check.webp`}
              alt="logo"
              width={16}
              height={16}
              priority
              draggable={false}
              blurDataURL={`/_next/image?url=/icons/check.webp&w=8&q=50`}
              // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 70vw"
            />
            <p>Last updated 1m ago</p>
          </div>
        </div>
        <ButtonAction
          text={'Filters'}
          icon={
            <Image
              src={`/icons/filter.webp`}
              alt="logo"
              width={24}
              height={24}
              priority
              draggable={false}
              blurDataURL={`/_next/image?url=/icons/filter.webp&w=8&q=50`}
              // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 70vw"
            />
          }
        />
      </header>
      <section className="product-list">
        {data.products.map((item: ProductItemType) => {
          console.log('item', item);
          return (
            <div className="product-item" key={item.id}>
              <div className="product-image">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={132}
                  height={132}
                  priority
                  draggable={false}
                  blurDataURL={`/_next/image?url=${item.images[0]}&w=16&q=50`}
                  // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 70vw"
                />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {/* <span>${item.price}</span> */}
            </div>
          );
        })}
      </section>
    </IndexPageStyled>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, query } = context;
  const { search, limit, skip } = query;

  const params = {
    search: search || '',
    limit: limit ? Number(limit) : 10,
    skip: skip ? Number(skip) : 0,
  };

  const res = await apiProduct.getProduct(params);

  return {
    props: {
      data: res,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};
