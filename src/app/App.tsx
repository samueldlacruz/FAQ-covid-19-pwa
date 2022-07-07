import React, { lazy, Suspense } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import Wrapper from '../components/layout/Wrapper';
import Header from '../components/layout/Header';
import usePersistedState from '../hooks/usePersistedState';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import Loading from '../components/common/Loading';
import { FaHeadSideMask } from 'react-icons/fa';
const FAQList = lazy(() => import('../components/FAQ/List'));
const Footer = lazy(() => import('../components/layout/Footer'));

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading icon={FaHeadSideMask} message="Init App, loading ..." iconSize="lg" />}>
        <GlobalStyle />

        <Header toggleTheme={toggleTheme} />
        <Wrapper>
          <FAQList />
          <Footer />
        </Wrapper>

      </Suspense>
    </ThemeProvider>
  );
}

export default App;
