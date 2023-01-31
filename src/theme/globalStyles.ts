import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    font-family: ${({ theme }) => theme.font};
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.white};
  }

  @media(min-width: 576px) {
    body {
      font-size: 18px;
    } 
  }
`;

export default GlobalStyle;
