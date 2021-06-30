import React from 'react'
import { Container } from './styles';
import Footer from '../Footer'
import FAQList from '../FAQList';

const Wrapper: React.FunctionComponent = () => {

  return (
    <Container>
      <FAQList />
      <Footer />
    </Container>
  )
};

export default Wrapper