import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from '../hooks/usePersistedState';
import dark from '../styles/themes/dark';
import App from './App';

test('renders the FAQ covid pwa lazy', async () => {
    render(<App />);

    await waitFor(() => screen.getByRole('heading'))
    expect(screen.getByRole('heading')).toHaveTextContent(/Init App, loading .../);
});

test('renders Header App', async () => {
    const { result } = renderHook(() => usePersistedState<DefaultTheme>('theme', dark))

    const [theme] = result.current;

    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )

    await waitFor(() => {
        expect(getByText(/FAQ COVID-19/i)).toBeInTheDocument()
    })
})