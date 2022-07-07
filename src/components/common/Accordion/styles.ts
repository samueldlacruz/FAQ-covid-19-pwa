import styled, { keyframes } from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type FAQAnswerType = {
    isOpen: boolean;
}

export const FAQQuestion = styled.button`
 border: none;
 border-bottom: 2px solid ${props => props.theme.colors.primary};
 font-size: clamp(1rem, 1.5vw, 2rem);
 color: ${props => props.theme.colors.text};
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

const bounceInUp = keyframes`
from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`
export const FAQBadge = styled.span`
  background: ${props => props.theme.colors.secondary};
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
 color: ${props => (props.theme.title === 'light' ? props.theme.colors.secondary : '')};
 display: ${({isOpen }) => (isOpen ? "block" : "none")};
 animation: ${bounceInUp} 500ms ease-in-out;
`

export const SpanIcon = styled(FaChevronDown)`
 color: ${props => props.theme.colors.text};
`

export const CloseIcon = styled(FaChevronUp)`
 color: ${props => props.theme.colors.text};
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