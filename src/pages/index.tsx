import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '@/components/layouts/MainLayout';
import styled from 'styled-components';
import Image from 'next/image';
import ButtonAction from '@/components/common/ButtonAction';
import { GetServerSideProps } from 'next';
import apiProduct from '@/services/product';
import { ProductApiResponseType, ProductItemType } from '@/types/product';
import SvgWinnerIcon from '@/components/svg-icons/SvgWinnerIcon';
import { numberWithCommas } from '@/utils/number';

const IndexPageStyled = styled.article`
  width: 100%;
  //background: black;
  position: relative;
  padding-top: 40px;
  .page-header {
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
      position: relative;
      .winner-chip {
        position: absolute;
        top: 0;
        left: 20px;
        height: 36px;
        background: #ffab0a;
        border-radius: 0px 0px 8px 8px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 8px;
        padding: 10px;
        span {
          font-size: 14px;
          font-weight: 500;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -5px;
            width: 1px;
            height: 16px;
            background: white;
          }
        }
      }
      .platform {
        position: absolute;
        top: 12px;
        right: 12px;
      }
      .product-image {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .product-header {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        h2 {
          font-size: 20px;
          color: ${({ theme }) => theme.colors.text};
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          color: ${({ theme }) => theme.colors.description};
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow-wrap: break-word;
        }
      }
      .bottom-group {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        color: ${({ theme }) => theme.colors.text};
        .price {
          display: flex;
          align-items: center;
          column-gap: 10px;
          font-weight: 700;
          span {
            //
          }
          .chip {
            height: 24px;
            border-radius: 4px;
            border: 1px solid ${({ theme }) => theme.colors.text};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 500;
            padding: 0 8px;
          }
        }
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
      <header className="page-header">
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
        {data.products.map((item: ProductItemType, index: number) => {
          const isOdd = index % 2 === 1;
          const platformSrc = isOdd
            ? '/images/amazon.webp'
            : '/images/walmart.webp';
          return (
            <div className="product-item" key={item.id}>
              {!index && (
                <div className="winner-chip">
                  <SvgWinnerIcon />
                  <span>Winner</span>
                </div>
              )}
              <div className="platform">
                <Image
                  src={platformSrc}
                  alt={isOdd ? 'amazon' : 'walmart'}
                  width={40}
                  height={40}
                  priority
                  draggable={false}
                  blurDataURL={`/_next/image?url=${platformSrc}&w=16&q=50`}
                />
              </div>
              <div className="product-image">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={132}
                  height={132}
                  priority
                  draggable={false}
                  blurDataURL={`/_next/image?url=${item.images[0]}&w=16&q=50`}
                />
              </div>
              <header className="product-header">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </header>
              <div className="bottom-group">
                <div className="price">
                  <span>${numberWithCommas(item.price, 2)}+</span>
                  <span className="chip">35% off</span>
                </div>
              </div>
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
