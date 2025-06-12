import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const NavigationStyled = styled.nav`
  width: 100%;
  height: 64px;
  position: fixed;
  left: 0;
  background: ${({ theme }) => theme.colors.content};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  display: flex;
  align-items: center;
  padding: 0 24px;
  img {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: rotate(45deg);
    }
  }
`;
const Navigation = () => {
  // const setTheme = useThemeStore((state) => state.setTheme);
  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  // };
  return (
    <NavigationStyled>
      <Image
        src={`/images/logo.webp`}
        alt="logo"
        width={40}
        height={40}
        priority
        placeholder="blur"
        draggable={false}
        blurDataURL={`/_next/image?url=/images/logo.webp&w=64&q=50`}
        // sizes="(max-width: 768px) 75vw, (max-width: 1200px) 100vw, 70vw"
      />
    </NavigationStyled>
  );
};

export default Navigation;
