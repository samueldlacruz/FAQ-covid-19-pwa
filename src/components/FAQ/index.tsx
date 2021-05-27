import React from 'react';
import {
    FAQContainer,
    FAQAnswer,
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon,
    FAQBadge
} from './FAQ.styles';
import { Faq } from './types';

interface FAQProps {
    faq: Faq;
    index: number;
    toggleFAQ: Function;
}

const FAQ: React.FunctionComponent<FAQProps> = ({ faq, toggleFAQ, index }) => {
    const { question, category, answer, isOpen } = faq;

    const icon = isOpen ? <CloseIcon /> : <SpanIcon />;

    return (
        <FAQContainer>
            <FAQQuestion>
                {question}
                <div>
                    <FAQBadge>{category}</FAQBadge>
                    <Icon onClick={() => toggleFAQ(index)}>{icon}</Icon>
                </div>
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                {answer}
            </FAQAnswer>
        </FAQContainer>
    )
}

export default FAQ;
