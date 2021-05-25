import React from 'react';
import { 
    FAQContainer, 
    FAQAnswer, 
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon,
    FAQBadge,
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
               <Flex>
                {question}
                <FAQBadge>{category}</FAQBadge>               
               </Flex>
               <Icon onClick={() => toggleFAQ(index)}>{icon}</Icon>    
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                {answer}
            </FAQAnswer>
        </FAQContainer>
    )
}

export default FAQ;
