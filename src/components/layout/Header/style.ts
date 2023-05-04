import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 65vw;
  margin: 2rem auto;

  @media (max-width: 768px) {
   width: 100%;
 }
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
    position: relative;
    cursor: pointer;
    right: 0px;
    color: ${props =>  props.theme.colors.text};
    font-size: 1rem;
    border: 2px solid ${props => props.theme.colors.primary};
    padding: 7px 7px 4px 7px;
    border-radius: 10px;

    @media (max-width: 768px) {
     margin-left: 0.8rem;
  }
`;