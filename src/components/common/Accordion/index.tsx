import React, { useState } from 'react';
import { AccordionProvider } from '../../../context/AccordionContext';
import { AccordionComposition, AccordionProps } from '../../../interfaces/Accordion';
import Content from './Content';
import Header from './Header';

const Accordion: React.FC<AccordionProps> & AccordionComposition = ({ children }) => {
    const [activeItem, setActiveItem] = useState<boolean>(false);

    return (
        <AccordionProvider value={{ activeItem, setActiveItem }}>
            {children}
        </AccordionProvider>
    )
}

Accordion.Content = Content;
Accordion.Header = Header;


export default Accordion;
