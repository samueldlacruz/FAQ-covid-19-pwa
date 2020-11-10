import styled from 'styled-components';

export const FooterContainer = styled.div`
 margin-top: 2rem;
 padding: 1rem;
 background: #2D2D2D;
 color:#fff;;
 border-radius: 5px;
 line-height: 1.5;
 text-align: center;

 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
export const FooterItems = styled.ul`
 display: flex;
 list-style: none;

 @media screen and (max-width: 700px) {
     flex-direction: column;
 }
` 
export const FooterLink = styled.li`
 padding-left: 1rem;
 margin-top: .75rem;

 a {
     color: #3a7fda;
     text-decoration: none;
     transition: 0.2s ease-in-out;

     &:hover {
       color: #448eee;
       text-decoration: underline;  
     }
 }
`