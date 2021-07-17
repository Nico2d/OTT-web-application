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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    h1, h2, h3, h4, h5, h6{
      margin: 0;
    }
`;
