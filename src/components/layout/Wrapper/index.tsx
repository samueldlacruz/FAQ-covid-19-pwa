import React from 'react'
import { Container } from './styles';

const Wrapper: React.FunctionComponent = ({ children }) => {

  return (
    <Container>
      {children}
    </Container>
  )
};

export default Wrapper