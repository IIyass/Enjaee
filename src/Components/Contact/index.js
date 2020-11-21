import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import Layout from '../Layout'
import Body from '../Body'
const Contact = () => {

    return (
        <Layout>
            <Style.Wrapper as={Container}>
                <Body PageType="ContactPage" />
            </Style.Wrapper >
        </Layout>
    )
}

export default Contact;