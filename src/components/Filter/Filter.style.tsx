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

export const Badge = styled.span`
  background: #2d2d2d96;
  color: #fff;
  border-radius: 10px;
  font-size: small;
  text-align: center;
  width: 100px;
  padding: 3px;
  margin-top: .75rem;
`