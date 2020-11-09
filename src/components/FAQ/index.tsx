import React from 'react';
import { 
    FAQContainer, 
    FAQAnswer, 
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon,
    FAQCategory,
    Flex
} from './FAQ.styles';
import { Faq } from './types';

type FAQProps = {
    faq: Faq;
    index: number;
    toggleFAQ: Function;
} 

const FAQ = ({ faq, toggleFAQ, index }: FAQProps) => {
  const { question, category, answer, isOpen } = faq;

  const icon = isOpen ? <CloseIcon /> : <SpanIcon />;

    return (
        <FAQContainer>
            <FAQQuestion>
               {question}
               <Flex>
                <FAQCategory>{category}</FAQCategory>
                <Icon onClick={() => toggleFAQ(index)}>{icon}</Icon>                   
               </Flex>
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                {answer}
            </FAQAnswer>
        </FAQContainer>
    )
}

export default FAQ;
