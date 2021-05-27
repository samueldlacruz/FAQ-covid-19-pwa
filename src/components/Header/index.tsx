import React from 'react'
import styled from 'styled-components'

const Heading = styled.header`
  font-size: clamp(1rem, 10vw, 2rem);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
  word-spacing: 5px;
  display: flex;
  flex-direction: column;

  span {
    font-size: small;
    text-transform: capitalize;
    color: #2d2d2d;
  }
`

const Header = () => {
   return (
     <Heading>
       Info covid-19
       <span>FAQ and vaccines</span>
     </Heading>
   )
}

export default Header
