import styled, { keyframes } from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type FAQAnswerType = {
    isOpen: boolean;
}

export const FAQContainer = styled.div`
  transition: all 0.4s ease;
  width: 65vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FAQQuestion = styled.button`
 border: none;
 border-bottom: 2px solid rgb(32, 32, 32);
 font-size: clamp(1rem, 1.5vw, 2rem);
 color: #fff;
 width: 100%;
 outline: none;

 background: transparent;
 padding: 1rem;
 margin-bottom: 1rem;
 text-align: left;
 font-weight: bold;

 display: flex;
 justify-content: space-between;

 div {
   display: flex;
   justify-content: center;
   align-items: center;
 }

 @media screen and (max-width: 700px) {
  margin-top: .75rem;
 }
`

const slideDown = keyframes`
  0% { transform: translateX(-2000px) scale(0.7); opacity: 0.7}
  80% { transform: translateX(0px) scale(0.7);opacity: 0.7;}
  100% {transform: scale(1);opacity: 1; }
`
export const FAQBadge = styled.span`
  background: #2d2d2d96;
  color: #fff;
  border-radius: 10px;
  font-size: small;
  text-align: center;
  width: fit-content;
  padding: 4px 12px;
  margin-left: 1rem;
`

export const FAQAnswer = styled.p<FAQAnswerType>`
 padding: .75rem;
 color: #BBBBBB;
 word-spacing: 2px;
 line-height: 1.75rem;
 display: ${({isOpen }) => (isOpen ? "block" : "none")};
 animation: ${slideDown} 500ms ease-in-out;
`

export const SpanIcon = styled(FaChevronDown)`
 color: #fff;
`

export const CloseIcon = styled(FaChevronUp)`
 color: #fff;
`

export const Icon = styled.div`
 background: transparent;
 font-size: 1rem;
 padding-left: 5px;
 cursor: pointer;
 outline: none;
`
export const Flex = styled.div`
 display: flex;
 flex-direction: column;

 @media screen and (max-width: 700px) {
  margin-top: .75rem;
 }
`