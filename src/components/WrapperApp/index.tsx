import React from 'react'
import styled from 'styled-components'
import HeaderApp from '../HeaderApp'

const Warpper = styled.div`
 background: #2D2D2D;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100vh;
 margin: 2rem 0;
`

const WarpperApp = () => {
    return (
        <Warpper>
            <HeaderApp />
        </Warpper>
    )
};

export default WarpperApp