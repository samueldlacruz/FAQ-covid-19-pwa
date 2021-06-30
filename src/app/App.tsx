import React from 'react';
import { GlobalStyle } from './globalStyles';

import Warpper from '../components/Container';
import Header from '../components/Header';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../hooks/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Warpper />
    </ThemeProvider>
  );
}

export default App;
