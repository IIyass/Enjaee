import React, { useContext } from 'react'
import AddCard from './AddCard'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'
import { Group } from '../../Provider/GroupProvidre'

const GroupWrraper = () => {
    const { step } = useContext(Group);
    const handleSteps = () => {
        switch (step) {
            case 1:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <AddCard />
                        </Style.CardLayout>
                    </Style.Wrapper>
                )
            case 2:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <Body PageType="AddgroupPage" />
                        </Style.CardLayout>
                    </Style.Wrapper>
                )
            case 3:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <Body PageType="GroupDetailPage" />
                        </Style.CardLayout>
                    </Style.Wrapper>)
        }
    }
    return (
        <>
            {handleSteps()}
        </>
    )


}
export default GroupWrraper;