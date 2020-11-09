import React from 'react'
import AddCard from './AddCard'
import * as Style from './style'
import { Link, useHistory } from "react-router-dom";
import { Container } from '../Common/Body'

const Chat = () => {

    let history = useHistory();

    const HandleTeamAdd = () => {
        history.push("/contact");

    }

    return (
        <Style.Wrapper as={Container}>

            <Style.CardLayout>
                <AddCard />
            </Style.CardLayout>

        </Style.Wrapper>
    )
}

export default Chat;