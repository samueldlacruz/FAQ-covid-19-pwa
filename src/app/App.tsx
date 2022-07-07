import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import Wrapper from '../components/Container';
import Header from '../components/Header';
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
      <Wrapper />
    </ThemeProvider>
  );
}

export default App;
