import React, { ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MainLayout from '@/components/layouts/MainLayout';
import Image from 'next/image';
import ButtonAction from '@/components/common/ButtonAction';
import { GetServerSideProps } from 'next';
import apiProduct from '@/services/product';
import { ProductApiResponseType, ProductItemType } from '@/types/product';
import SvgWinnerIcon from '@/components/svg-icons/SvgWinnerIcon';
import { numberWithCommas } from '@/utils/number';
import SvgShippingIcon from '@/components/svg-icons/SvgShippingIcon';
import SvgGiftIcon from '@/components/svg-icons/SvgGiftIcon';
import { IndexPageStyled } from '@/styles/styled/index.styled';
import ButtonViewDeal from '@/components/common/ButtonViewDeal';
import ButtonFav from '@/components/common/ButtonFav';

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
                  {item.discountPercentage && (
                    <span className="chip">{item.discountPercentage}% off</span>
                  )}
                </div>
                <div className="promotion">
                  <div className="promotion-item">
                    <SvgShippingIcon />
                    <span>Free shipping</span>
                  </div>
                  <div className="promotion-item">
                    <SvgGiftIcon />
                    <span>Free gift</span>
                  </div>
                </div>
                <div className="action-group">
                  <ButtonViewDeal />
                  <ButtonFav />
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
    limit: limit ? Number(limit) : 200,
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
