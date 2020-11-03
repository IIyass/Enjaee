import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
const Body = () => {
    return (
        <Style.Wrapper as={Container}>
            <h1>Hello World</h1>
        </Style.Wrapper>
    )
}

export default Body