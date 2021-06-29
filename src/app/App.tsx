import React from 'react';
import { GlobalStyle } from './globalStyles';
import Warpper from '../components/Container';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';  

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
       <button style={{backgroundColor: 'white', color: 'black'}} onClick={toggleTheme}>{theme.title}</button>
      <Warpper />
    </ThemeProvider>
  );
}

export default App;
