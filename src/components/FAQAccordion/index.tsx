import React from 'react';
import {
    FAQAnswer,
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon,
    FAQBadge
} from './FAQ.styles';
import { FAQ } from '../../interfaces/FAQ';

interface FAQProps {
    faq: FAQ;
    index: number;
    toggleFAQ: Function;
}

const FAQAccordion: React.FunctionComponent<FAQProps> = ({ faq, toggleFAQ, index }) => {
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

export default FAQAccordion;
