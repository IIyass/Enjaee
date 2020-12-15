import React from 'react'
import * as Style from './style'
import { connect } from 'react-redux';
import { BodyContainer } from '../../Common/Body'
import { next, back } from '../../store/TeamChat/action'
import DumbTeamChatComponent from '../../Components/TeamChat'
import MockData from '../../Data/ContactMockData'
const TeamChat = (props) => {

    const { step, next, back } = props;

    return (
        <Style.Wrapper as={BodyContainer}>
            <DumbTeamChatComponent
                TeamData={MockData}
                step={step}
                next={next}
                back={back}
            />
        </Style.Wrapper >
    )
}
const mapStateToProps = (state) => {
    return ({
        step: state.TeamChatReducer.step
    });
}

export default connect(mapStateToProps,
    {
        next,
        back
    }
)(TeamChat);