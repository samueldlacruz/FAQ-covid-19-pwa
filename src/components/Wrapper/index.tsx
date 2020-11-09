import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import FAQ from '../FAQ'
import { Faq } from '../FAQ/types'
import { getFAQs } from '../../services/FAQsServices'

const Container = styled.div`
 /* background: #2D2D2D; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 2rem 0;
 padding: 1rem;
`

const Wrapper = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const listOfFaqs = await getFAQs();
      setFaqs(listOfFaqs);

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const toggleFAQ = (index: number) => {
      setFaqs(faqs.map((faq, i) => {
          if (i === index) {
              faq.isOpen = !faq.isOpen
          } else {
              faq.isOpen = false;
          }

         return faq;
      }))
  } 
    
    if (loading) {
        return <h1>loading ... </h1>
    }
    return (
        <Container>
            <Header />
            {faqs.map((faq, index) => (
                <FAQ 
                key={index} 
                index={index}
                faq={faq}
                toggleFAQ={toggleFAQ} />
            ))}       
        </Container>
    )
};

export default Wrapper