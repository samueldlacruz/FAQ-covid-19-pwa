import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import Wrapper from '../components/layout/Wrapper';
import Header from '../components/layout/Header';
import usePersistedState from '../hooks/usePersistedState';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import FAQList from '../components/FAQ/List';
import Footer from '../components/layout/Footer';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header toggleTheme={toggleTheme} />
      <Wrapper>
        <FAQList />
        <Footer />
      </Wrapper>

    </ThemeProvider>
  );
}

export default App;
