import React, { useState } from 'react'
import AddCard from './AddCard'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'


const Group = () => {

    const [step, setStep] = useState(1);
    const [groupName, setGroupName] = useState('')
    const next = () => {
        // update state.step by adding to previous state
        setStep(step + 1)
    }
    const handleSteps = () => {
        switch (step) {
            case 1:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <AddCard next={next} />
                        </Style.CardLayout>
                    </Style.Wrapper>
                )
            case 2:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <Body next={next} Addgroup={true} setGroupName={setGroupName} />
                        </Style.CardLayout>
                    </Style.Wrapper>
                )
            case 3:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <Body groupDetail groupName={groupName}/>
                        </Style.CardLayout>
                    </Style.Wrapper>)
        }
    }
    return (
        <>
            {console.log(groupName)}
            {handleSteps()}
        </>
    )


}
export default Group;