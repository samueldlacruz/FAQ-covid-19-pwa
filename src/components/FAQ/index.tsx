import React from 'react';
import { 
    FAQContainer, 
    FAQAnswer, 
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon
} from './FAQ.styles';
import { Faq } from './types';

type FAQProps = {
    faq: Faq;
    index: number;
    toggleFAQ: Function;
} 

const FAQ = ({ faq, toggleFAQ, index }: FAQProps) => {
  const { question, answer, isOpen } = faq;

  const icon = isOpen ? <CloseIcon /> : <SpanIcon />;

    return (
        <FAQContainer>
            <FAQQuestion>
               {question}
                <Icon onClick={() => toggleFAQ(index)}>{icon}</Icon>
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                {answer}
            </FAQAnswer>
        </FAQContainer>
    )
}

export default FAQ;
