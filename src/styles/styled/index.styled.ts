import styled from 'styled-components';

export const IndexPageStyled = styled.article`
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
      row-gap: 16px;
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
        .promotion {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          padding: 12px 0 0;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: ${({ theme }) => theme.colors.border};
          }
          .promotion-item {
            display: flex;
            align-items: center;
            column-gap: 4px;
            span {
              color: ${({ theme }) => theme.colors.border};
              font-size: 12px;
              font-weight: 400;
            }
          }
        }
        .action-group {
          width: 100%;
          margin-top: 8px;
          display: flex;
          align-items: center;
          column-gap: 10px;
        }
      }
    }
  }
`;
