import React, { useState } from 'react';
import { 
    QuestionContainer, 
    QuestionAnswer, 
    QuestionStatement,
    Icon,
    SpanIcon,
    CloseIcon
} from './QuestionElements';

const Question = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false);

 const toggle = () => {
     setIsOpen(!isOpen)
 }

 const icon = isOpen ? <CloseIcon /> : <SpanIcon />;

    return (
        <QuestionContainer>
            <QuestionStatement>
                how are you?
                <Icon onClick={toggle}>{icon}</Icon>
            </QuestionStatement>
            <QuestionAnswer isOpen={isOpen}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quae accusantium illo praesentium consectetur aspern
                repellat voluptatem, sit voluptates placeat!
            </QuestionAnswer>
        </QuestionContainer>
    )
}

export default Question
