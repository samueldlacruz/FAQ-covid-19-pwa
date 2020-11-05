import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  font-size: clamp(1rem, 10vw, 2rem);
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  text-align: center;
  word-spacing: 5px;
`

const HeaderApp = () => <Header>faq covi19</Header>;

export default HeaderApp
