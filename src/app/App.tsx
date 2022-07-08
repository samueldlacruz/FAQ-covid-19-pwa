import { lazy, Suspense } from 'react';
import { FaHeadSideMask } from 'react-icons/fa';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Loading from '../components/common/Loading';
import Header from '../components/layout/Header';
import Wrapper from '../components/layout/Wrapper';
import usePersistedState from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { GlobalStyle } from './globalStyles';
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
