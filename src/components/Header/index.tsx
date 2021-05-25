import React from 'react'
import styled from 'styled-components'

const Heading = styled.header`
  font-size: clamp(1rem, 10vw, 2rem);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  word-spacing: 5px;
`

const Header = () => <Heading>faq covid-19</Heading>;

export default Header
