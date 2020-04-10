import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: content-box;
    margin: 0;
    font-family: 'Trebuchet MS', 'Verdana', monospace;
  }

  @media (max-width: 992px) {
    body {
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyle;