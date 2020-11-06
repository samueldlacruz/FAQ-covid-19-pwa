import React from 'react'
import styled from 'styled-components'
import HeaderApp from '../HeaderApp'
import Question from '../Question'

const Warpper = styled.div`
 /* background: #2D2D2D; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 2rem 0;
 padding: 1rem;
 height: 100vh;
`

const WarpperApp = () => {
    return (
        <Warpper>
            <HeaderApp />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />            
        </Warpper>
    )
};

export default WarpperApp