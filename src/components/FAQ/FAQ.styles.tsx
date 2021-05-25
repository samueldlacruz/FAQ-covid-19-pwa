import styled, { keyframes } from 'styled-components';
import { FaPlus, FaTimes } from 'react-icons/fa';

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
 border: 2px solid #545454;
 font-size: clamp(1rem, 1.5vw, 2rem);
 color: #fff;
 width: 100%;
 border-left: none;
 border-right: none;
 outline: none;
 display: flex;
 justify-content: space-between;
 align-items: center;

 background: transparent;
 padding: 1rem;
 margin-bottom: 1rem;
 text-align: left;
 font-weight: bold;
`

const slideDown = keyframes`

`
export const FAQBadge = styled.span`
  background: #2d2d2d96;
  color: #fff;
  border-radius: 10px;
  font-size: small;
  text-align: center;
  width: 100px;
  padding: 3px;
  margin-top: .75rem;
`

export const FAQAnswer = styled.p<FAQAnswerType>`
 padding: .75rem;
 color: #BBBBBB;
 word-spacing: 2px;
 line-height: 1.75rem;
 display: ${({isOpen }) => (isOpen ? "block" : "none")};
 animation: ${slideDown} 500ms ease-in-out;
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