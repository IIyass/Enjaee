import React from 'react'
import * as Style from './style'
import { BodyContainer } from '../Common/Body'
import Body from '../Body'
const History = () => {

    return (
        <Style.Wrapper as={BodyContainer}>
            <Body PageType="HistoryPage" />
        </Style.Wrapper >
    )
}

export default History;