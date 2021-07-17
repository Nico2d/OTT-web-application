import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    html, body {
        padding: 0;
        margin: 0;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.fontColor};
        font-size: ${({ theme }) => theme.font.normal};
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    h1, h2, h3, h4, h5, h6{
      margin: 0;
    }
`;
