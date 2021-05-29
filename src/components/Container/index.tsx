import React from 'react'
import { Container } from './Container.styles';
import Header from '../Header'
import Footer from '../Footer'
import FAQList from '../FAQList';

const Wrapper: React.FunctionComponent = () => {
 
  return (
        <Container>
          <Header />
              <FAQList />
          <Footer />
        </Container>
  )
};

export default Wrapper