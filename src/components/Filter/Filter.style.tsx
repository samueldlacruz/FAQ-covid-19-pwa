import styled from 'styled-components';

export const FiltrerContainer = styled.div`
  display: flex;
  width: 55vw;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 3px solid rgb(24, 24, 24);

  div {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 5%;
  }

  input {
    color: white;
    background: transparent;
    border: none;
    outline: none;
    width: 95%;
    padding: 5px 1rem;
  }
`