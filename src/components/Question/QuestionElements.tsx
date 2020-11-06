import styled from 'styled-components';
import { FaPlus, FaTimes } from 'react-icons/fa';

type QuestionAnswerP = {
    isOpen: boolean;
}

export const QuestionContainer = styled.div`
  width: 60vw;
`

export const QuestionStatement = styled.button`
 border: 2px solid #545454;
 font-size: clamp(1rem, 1.5vw, 2rem);
 color: #fff;
 width: 100%;
 border-left: none;
 border-right: none;
 outline: none;
 display: flex;
 justify-content: space-between;

 background: transparent;
 padding: 1rem;
 margin-bottom: 1rem;
 text-align: left;
 font-weight: bold;
`

export const QuestionAnswer = styled.p<QuestionAnswerP>`
 padding: .75rem;
 color: #BBBBBB;
 word-spacing: 2px;
 line-height: 1.75rem;
 display: ${({isOpen }) => (isOpen ? "block" : "none")};
`

export const SpanIcon = styled(FaPlus)`
 color: #fff;
`

export const CloseIcon = styled(FaTimes)`
 color: #fff;
`

export const Icon = styled.div`
 background: transparent;
 font-size: 1rem;
 cursor: pointer;
 outline: none;
`