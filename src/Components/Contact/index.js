import React from 'react'
import * as Style from './style'
import { BodyContainer } from '../Common/Body'
import Body from '../Body'
const Contact = () => {

    return (

        <Style.Wrapper as={BodyContainer}>
            <Body PageType="ContactPage" />
        </Style.Wrapper >
    )
}

export default Contact;