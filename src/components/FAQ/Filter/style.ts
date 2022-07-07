import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  justify-content: space-around;
  align-items: center;
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 3px solid  ${props => props.theme.colors.primary};

  div {
    align-items: center;
    display: flex;
    color: ${props => props.theme.colors.text};
    justify-content: center;
    width: 5%;
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