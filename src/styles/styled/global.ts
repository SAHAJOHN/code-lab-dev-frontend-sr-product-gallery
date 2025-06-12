import { createGlobalStyle } from 'styled-components';
import { inter } from '@/styles/fonts';

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${inter.style.fontFamily} !important;
    }
    html {
        scroll-behavior: smooth;
        -webkit-tap-highlight-color: transparent;
        //user-select: none;
    }
    body {
        margin: 0;
        display: flex;
        justify-content: center;
    }
    #nprogress {
        transition: all 0.4s ease-out !important;

        .bar {
            box-shadow: 0 0 10px #44b3ff, 0 0 4px #44b3ff;
            height: 2px;
            background: #44b3ff;
        }
    }
`;
