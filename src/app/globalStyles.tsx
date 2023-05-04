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

 
  ::-webkit-scrollbar {
  /* Set the width and height of the scrollbar */
  width: 8px;
  height: 100%;
  }


  ::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 4px;
  background-color: gray;
  opacity: 0.25;
}
`