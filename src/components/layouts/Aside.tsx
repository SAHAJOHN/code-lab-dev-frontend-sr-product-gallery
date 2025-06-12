import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '@/components/common/ButtonIcon';
import Image from 'next/image';
import Link from 'next/link';
import { numberWithCommas } from '@/utils/number';

const AsideStyled = styled.aside`
  width: 280px;
  background: ${({ theme }) => theme.colors.content};
  display: flex;
  flex-direction: column;
  min-height: inherit;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border}`};
  .wishlist-header {
    height: 78px;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    padding: 0 16px;
    margin-top: 8px;
    .upload-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 24px;
        font-weight: 800;
      }
    }

    p {
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      text-transform: uppercase;
    }
  }
  .wishlist-list-wrap {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 8px;
    .wishlist-list {
      color: ${({ theme }) => theme.colors.text};
      padding: 0 16px;
      .wishlist-item-wrap {
        width: 100%;
        .wishlist-item {
          width: 100%;
          position: relative;
          padding-bottom: 4px;
          display: flex;
          align-items: center;
          column-gap: 12px;
          cursor: pointer;
          border-radius: 8px;
          transition: 0.15s ease-in-out;
          overflow: hidden;
          &:before {
            content: '';
            position: absolute;
            bottom: -8px;
            height: 1px;
            width: 100%;
            background: ${({ theme }) => theme.colors.border};
          }
          &:hover {
            background: #e0e0e0;
            a {
              text-decoration: underline;
            }
          }
          .image {
            width: 60px;
            min-width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .text-group {
            width: 100%;
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            a {
              color: ${({ theme }) => theme.colors.text};
              font-weight: 600;
            }
            .matching {
              font-size: 14px;
              color: ${({ theme }) => theme.colors.description};
              font-weight: 400;
              max-width: 100%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
`;
const Aside = () => {
  return (
    <AsideStyled>
      <div className="wishlist-header">
        <div className="upload-wrapper">
          <h2>Your wishlist</h2>
          <ButtonIcon
            icon={
              <Image
                src={`/icons/share.webp`}
                alt="upload"
                width={14}
                height={14}
                priority
                placeholder="blur"
                draggable={false}
                blurDataURL={`/_next/image?url=/icons/share.webp&w=8&q=50`}
                // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 70vw"
              />
            }
          />
        </div>
        <p>5 Gifts</p>
      </div>
      <div className="wishlist-list-wrap">
        {[...Array(5)].map((_, index: number) => {
          return (
            <ul className="wishlist-list" key={index}>
              <li className="wishlist-item-wrap">
                <div className="wishlist-item">
                  <div className="image">
                    <Image
                      src={`/images/camera.png`}
                      alt="upload"
                      width={100}
                      height={100}
                      priority
                      placeholder="blur"
                      draggable={false}
                      blurDataURL={`/_next/image?url=/images/camera.png&w=24&q=50`}
                      // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 70vw"
                    />
                  </div>
                  <div className="text-group">
                    <Link
                      href={`${process.env.NEXT_PUBLIC_APP}`}
                      title={`Pink polaroid Now+ Black`}
                      onClick={(e: any) => {
                        e.preventDefault();
                      }}
                    >
                      Pink polaroid Now+ Black (9061) - Bluetooth Connected
                      I-Type Instant Film Camera with Bonus Lens Filter Set
                    </Link>
                    <p className="matching">
                      {numberWithCommas(23)} matching items
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </AsideStyled>
  );
};

export default Aside;
