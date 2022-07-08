import { ReactNode } from 'react';
import { Container } from './styles';

const Wrapper = ({ children }: { children: ReactNode }) => {

  return (
    <Container>
      {children}
    </Container>
  )
};

export default Wrapper