import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'
const History = () => {

    return (
        <Style.Wrapper as={Container}>
            <Body PageType="HistoryPage" />
        </Style.Wrapper >
    )
}

export default History;