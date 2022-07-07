import React, { useState } from 'react';
import { AccordionProvider } from '../../../context/AccordionContext';
import { AccordionComposition } from '../../../interfaces/Accordion';
import Content from './Content';
import Header from './Header';

const Accordion: React.FunctionComponent & AccordionComposition = ({ children }) => {
    const [activeItem, setActiveItem] = useState<boolean>(false);

    return (
        <AccordionProvider value={{ activeItem, setActiveItem }}>
            {children}
        </AccordionProvider>
    )
}


Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
