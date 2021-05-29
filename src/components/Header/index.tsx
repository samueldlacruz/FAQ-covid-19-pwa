import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: clamp(1.5rem, 10vw, 2rem);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
  word-spacing: 5px;
  display: flex;
  flex-direction: column;
`

const Header = () => {
   return (
     <Heading>FAQ COVID-19</Heading>
   )
}

export default Header
