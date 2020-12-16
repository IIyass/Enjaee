import React, { useEffect } from 'react'
import * as Style from './style'
import { connect } from 'react-redux'
import { BodyContainer } from '../../Common/Body'
import DumbContactComponent from '../../Components/Contact'
import SearchInput from '../../Components/UI/SearchInput'
import SortInput from '../../Components/UI/SortInput'
import {
    fetchAllUsers,
    sendNotificationToContact,
    showNotificationModel,
    showInvitationModel,
    CancelSendRequest
} from '../../store/Contact/action'
import { checkMyNotification } from '../../store/Me/action'
const Contact = (props) => {
    const { AllUsers,
        MyNotification,
        fetchAllUsers,
        Loading,
        sendNotificationToContact,
        checkMyNotification,
        sentNotificationStep,
        openNotificationModel,
        showNotificationModel,
        showInvitationModel,
        CancelSendRequest
    } = props;

    useEffect(() => {
        fetchAllUsers();
        checkMyNotification();
    }, [])

    return (
        <Style.Wrapper as={BodyContainer}>

            <Style.SearchBar>
                <SearchInput placeholder="Search" name="Search" iconSearch={true} />
                <SortInput width="150px" height="40px" />
            </Style.SearchBar>

            {Loading ?
                <h1>Loading ....</h1> :
                <DumbContactComponent
                    ContactData={AllUsers}
                    MyNotification={MyNotification}
                    sendNotificationToContact={sendNotificationToContact}
                    sentNotificationStep={sentNotificationStep}
                    openNotificationModel={openNotificationModel}
                    showNotificationModel={showNotificationModel}
                    showInvitationModel={showInvitationModel}

                    CancelSendRequest={CancelSendRequest}
                />
            }

        </Style.Wrapper >
    )
}
const mapStateToProps = (state) => {
    return ({
        AllUsers: state.ContactReducer.AllUsers,
        Loading: state.ContactReducer.Loading,
        MyNotification: state.MeReducer.MyNotification,
        sentNotificationStep: state.ContactReducer.sentNotificationStep,
        openNotificationModel: state.ContactReducer.openNotificationModel,

    });
}

export default connect(mapStateToProps,
    {
        fetchAllUsers,
        sendNotificationToContact,
        checkMyNotification,
        showNotificationModel,
        showInvitationModel,
        CancelSendRequest

    }
)(Contact);