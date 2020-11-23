import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  // :root {
  //   font-size: ${({ theme: { fontSizes } }) => (fontSizes.root)};
  // }
  
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    cursor: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background-color: ${({ theme: { colors } }) => (colors.pageBackground)};
    overflow: hidden;
  }

  html, body, #root, #root>div {
    min-height: 100vh;
  }
  
  //#root>div {
  //  display: flex;
  //  flex-direction: column;
  //}
  
`;


export default GlobalStyle;