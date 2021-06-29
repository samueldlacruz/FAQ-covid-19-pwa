import React from 'react';
import {
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
        <>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
                {question}
                <div>
                    <FAQBadge>{category}</FAQBadge>
                    <Icon>{icon}</Icon>
                </div>
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                {answer}
            </FAQAnswer>
        </>
    )
}

export default FAQ;
