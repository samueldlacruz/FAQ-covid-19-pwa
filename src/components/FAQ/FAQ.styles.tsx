import styled, { keyframes } from 'styled-components';
import { FaPlus, FaTimes } from 'react-icons/fa';

type FAQAnswerType = {
    isOpen: boolean;
}

export const FAQContainer = styled.div`
  transition: all 0.4s ease;
  width: 60vw;
`

export const FAQQuestion = styled.button`
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

const slideDown = keyframes`
 0% {
   transform: translateY(-90%)
 }
 50% {
   transform: translateY(8%)
 }
 65% {
   transform: translateY(-4%)
 }
 80% {
   transform: translateY(4%)
 }
 95% {
  transform: translateY(-2%)
 }
 100% {
   transform: translateY(0%)
 }
`

export const FAQAnswer = styled.p<FAQAnswerType>`
 padding: .75rem;
 color: #BBBBBB;
 word-spacing: 2px;
 line-height: 1.75rem;
 display: ${({isOpen }) => (isOpen ? "block" : "none")};
 animation: ${slideDown} 500ms ease;
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