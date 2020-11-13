import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'
const Contact = () => {

    return (
        <Style.Wrapper as={Container}>
            <Body PageType="ContactPage" />
        </Style.Wrapper >
    )
}

export default Contact;