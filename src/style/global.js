import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
  html {
  font-size: ${(props) => props.theme.font.base};
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.font.base};
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    
    &:active,
    &:hover,
    &:visited,
    &:focus {
      text-decoration: none;
    }
  }
  
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
