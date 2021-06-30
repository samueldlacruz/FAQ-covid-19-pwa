import styled from "styled-components";

export const ContainerList = styled.main`
   width: 65vw;

 @media screen and (max-width: 700px) {
    width: 100%;
 }
`

export const NotFoundCard = styled.div`
   color: white;
   display: flex;
   align-items: center;
   justify-content: center; 
   flex-direction: column;
   border-radius: 5px; 
   text-align: center; 
   padding: 1rem 2rem; 
   background: rgb(24, 24, 24);

   .icon {
      margin: 1rem;
      padding: 1rem 1.2rem;
      color: #000;
      font-size: 1.4rem;
      border-radius: 50%;
      background-color: white;
   }
`;