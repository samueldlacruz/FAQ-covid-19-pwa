import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: space-around;
  align-items: center;
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: border 300ms ease-in;
  border-bottom: 2px solid  ${props => props.theme.colors.primary};

  &:focus-within > div {
    opacity: 1;
  }

  &:focus-within {
    border-bottom: 2px solid #ccc;
  }

  div {
    align-items: center;
    display: flex;
    color: ${props => props.theme.colors.text};
    justify-content: center;
    width: 5%;
    opacity: 0.5;
    font-size: 1.3rem;
    transition: opacity 300ms ease-in;
    padding: 0px 0px 5px 0px;
  }

  input {
    color: ${props => props.theme.colors.text};
    background: transparent;
    border: none;
    outline: none;
    width: 95%;
    padding: 5px 1rem;
  }
`