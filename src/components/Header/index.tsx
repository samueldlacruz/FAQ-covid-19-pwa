import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { FaMoon, FaSun } from 'react-icons/fa'
import { HeaderContainer, HeaderTitle, ThemeSwitcher } from './style'

interface HeaderProps {
  toggleTheme(): void;
}
const Header: React.FunctionComponent<HeaderProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext as any);

  return (
    <HeaderContainer>
      <ThemeSwitcher onClick={toggleTheme}>
        {title === 'light' ? <FaSun /> : <FaMoon />}
      </ThemeSwitcher>
      <HeaderTitle>FAQ COVID-19</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
