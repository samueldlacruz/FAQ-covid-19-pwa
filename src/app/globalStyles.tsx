import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Merriweather', serif;   
  }

  body {
    background:${props => props.theme.colors.background};
    transition: 500ms ease-in-out;
  }
`