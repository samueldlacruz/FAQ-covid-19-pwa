import styled from "styled-components";

export const ContainerList = styled.main`
   width: 65vw;

 @media screen and (max-width: 700px) {
    width: 100%;
 }
`

export const NotFoundCard = styled.div`
   color: ${props => props.theme.colors.text};
   display: flex;
   align-items: center;
   justify-content: center; 
   flex-direction: column;
   border-radius: 5px; 
   border: 2px solid ${props => props.theme.colors.secondary};
   text-align: center; 
   padding: 1rem 2rem; 
   background: ${props => 
      (props.theme.title === 'light' ? props.theme.colors.background : props.theme.colors.secondary)};

   .icon {
      margin: 1rem;
      padding: 1rem 1.2rem;
      color: ${props => props.theme.title === 'light' ? '#fff': '#000'};
      font-size: 1.4rem;
      border-radius: 50%;
      background-color: ${props => props.theme.title === 'light' ? '#000': '#fff'};
   }
`;