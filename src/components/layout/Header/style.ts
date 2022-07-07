import styled from "styled-components"

export const HeaderContainer = styled.div`
   margin-top: 2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color:  ${props => props.theme.colors.text};
  text-align: center;
  word-spacing: 5px;
  display: flex;
  flex-direction: column;
`

export const ThemeSwitcher = styled.button`
    all: unset;
    position: absolute;
    cursor: pointer;
    padding: 3px;
    right: 1rem;
    top: 1rem;
    color: ${props =>  props.theme.colors.text};
    font-size: 1.5rem;
`;