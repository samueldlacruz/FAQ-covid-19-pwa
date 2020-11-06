import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import FAQ from '../FAQ'

const Container = styled.div`
 /* background: #2D2D2D; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 2rem 0;
 padding: 1rem;
 height: 100vh;
`

const Wrapper = () => {
    return (
        <Container>
            <Header />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />
            <FAQ />            
        </Container>
    )
};

export default Wrapper