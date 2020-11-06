import React, { useState } from 'react';
import { 
    FAQContainer, 
    FAQAnswer, 
    FAQQuestion,
    Icon,
    SpanIcon,
    CloseIcon
} from './FAQ.styles';

const FAQ = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);

 const toggle = () => {
     setIsOpen(!isOpen)
 }

 const icon = isOpen ? <CloseIcon /> : <SpanIcon />;

    return (
        <FAQContainer>
            <FAQQuestion>
                how are you?
                <Icon onClick={toggle}>{icon}</Icon>
            </FAQQuestion>
            <FAQAnswer isOpen={isOpen}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quae accusantium illo praesentium consectetur aspern
                repellat voluptatem, sit voluptates placeat!
            </FAQAnswer>
        </FAQContainer>
    )
}

export default FAQ;
