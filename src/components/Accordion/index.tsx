import React, { FunctionComponent, useState } from 'react';
import {
    FAQAnswer,
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon,
    FAQBadge
} from './Accordion.styles';
import useAccordion from '../../hooks/useAccordion';
import { AccordionProvider } from '../../context/AccordionContext';
import { AccordionComposition, QuestionProps } from '../../interfaces/Accordion';

const Accordion: React.FunctionComponent & AccordionComposition = ({ children }) => {
    const [activeItem, setActiveItem] = useState<boolean>(false);

    return (
        <AccordionProvider value={{ activeItem, setActiveItem }}>
            {children}
        </AccordionProvider>
    )
}


const Header: FunctionComponent<QuestionProps> = ({ children, category }) => {
    const { setActiveItem, activeItem } = useAccordion();

    return (
        <FAQQuestion onClick={() => setActiveItem(!activeItem)}>
            {children}
            <div>
                <FAQBadge>{category}</FAQBadge>
                <Icon>
                    {activeItem ?
                        <CloseIcon onClick={() => setActiveItem(false)} /> :
                        <SpanIcon onClick={() => setActiveItem(true)} />}
                </Icon>
            </div>
        </FAQQuestion>
    )
}

const Content: FunctionComponent = ({ children }) => {
    const { activeItem } = useAccordion();

    return (
        <FAQAnswer isOpen={activeItem}>
            {children}
        </FAQAnswer>
    )
}

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
