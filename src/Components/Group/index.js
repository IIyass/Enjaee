import React, { useState } from 'react'
import AddCard from './AddCard'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'


const Group = () => {

    const [step, setStep] = useState(1);
    const [groupName, setGroupName] = useState('');
    const [contacts, setContacts] = useState([]);

    const next = () => {
        // update state.step by adding to previous state
        setStep(step + 1)
    }
    const back = () => {
        // update state.step by adding to previous state
        setStep(step - 1)
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
                            <Body next={next} groupName={groupName} Addgroup contacts={contacts} setGroupName={setGroupName} setContacts={setContacts} />
                        </Style.CardLayout>
                    </Style.Wrapper>
                )
            case 3:
                return (
                    <Style.Wrapper as={Container}>
                        <Style.CardLayout>
                            <Body step={step} groupDetail back={back} contacts={contacts} groupName={groupName} />
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
export default Group;