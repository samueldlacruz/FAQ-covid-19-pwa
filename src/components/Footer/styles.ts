import styled from 'styled-components';

export const FooterContainer = styled.div`
 margin-top: 2rem;
 padding: 1rem;
 background-color: ${props => 
  (props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secundary)};
 color: ${props => props.theme.colors.text};
 border-radius: 5px;
 line-height: 1.5;
 border: 2px solid ${props => props.theme.colors.secundary};
 display: flex;
 flex-direction: column;

 width: 65vw;

 @media (max-width: 768px) {
   width: 100%;
 }
`
export const FooterItems = styled.ul`
 display: flex;
 list-style: none;
 flex-direction: column;
` 
export const FooterLink = styled.li`
  display: flex;
  align-items: center;
  margin-top: .55rem;

 a {
     color: #3a7fda;
     padding-left: 5px;
     text-decoration: none;
     transition: 0.2s ease-in-out;

     &:hover {
       color: #448eee;
       text-decoration: underline;  
     }
 }
`