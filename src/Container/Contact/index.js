import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Style from './style';
import BodyContainer from '../../Common/Body';
import DumbContactComponent from '../../Components/Contact';
import SearchInput from '../../Components/UI/SearchInput';
import SortInput from '../../Components/UI/SortInput';
import {
  fetchAllUsers,
  sendNotificationToContact,
  showNotificationModel,
  showInvitationModel,
  CancelSendRequest,
  AccepteSentRequest,
  generateSecurityCode,
  showConfirmationCode,
  showGeneratingCodeModel,
  requestSucceed,
} from '../../store/Contact/action';
import {
  checkMyNotification, fetchMyData, getMyAcceptedRequest, getMyConfirmationRequest,
} from '../../store/Me/action';

const Contact = (props) => {
  const {
    AllUsers,
    fetchMyData,
    MyNotification,
    fetchAllUsers,
    Loading,
    sendNotificationToContact,
    checkMyNotification,
    sentNotificationStep,
    openNotificationModel,
    showNotificationModel,
    showInvitationModel,
    CancelSendRequest,
    AccepteSentRequest,
    generateSecurityCode,
    getMyAcceptedRequest,
    AcceptedRequest,
    showGeneratingCodeModel,
    confirmationCode,
    getMyConfirmationRequest,
    showConfirmationCode,
    requestSucceed,
    me,
  } = props;

  useEffect(() => {
    fetchAllUsers();
  }, [AllUsers, fetchAllUsers])

  useEffect(() => {
    fetchMyData();
  }, [fetchMyData, me]);

  useEffect(() => {
    getMyAcceptedRequest();
  }, [getMyAcceptedRequest, AcceptedRequest]);

  useEffect(() => {
    getMyConfirmationRequest();;
  }, [getMyConfirmationRequest, confirmationCode]);

  useEffect(() => {
    checkMyNotification();
  }, [checkMyNotification, MyNotification]);

  return (
    <Style.Wrapper as={BodyContainer}>
      <Style.SearchBar>
        <SearchInput placeholder="Search" name="Search" iconSearch />
        <SortInput width="150px" height="40px" />
      </Style.SearchBar>
      {Loading
        ? <h1>Loading ....</h1>
        : (
          <DumbContactComponent
            ContactData={AllUsers}
            MyNotification={MyNotification}
            sendNotificationToContact={sendNotificationToContact}
            sentNotificationStep={sentNotificationStep}
            openNotificationModel={openNotificationModel}
            showNotificationModel={showNotificationModel}
            showInvitationModel={showInvitationModel}
            CancelSendRequest={CancelSendRequest}
            AccepteSentRequest={AccepteSentRequest}
            generateSecurityCode={generateSecurityCode}
            AcceptedRequest={AcceptedRequest}
            confirmationCode={confirmationCode}
            showConfirmationCode={showConfirmationCode}
            showGeneratingCodeModel={showGeneratingCodeModel}
            requestSucceed={requestSucceed}
            me={me}
          />
        )}
    </Style.Wrapper>
  );
};
const mapStateToProps = (state) => ({
  AllUsers: state.ContactReducer.AllUsers,
  Loading: state.ContactReducer.Loading,
  MyNotification: state.MeReducer.MyNotification,
  sentNotificationStep: state.ContactReducer.sentNotificationStep,
  openNotificationModel: state.ContactReducer.openNotificationModel,
  me: state.MeReducer.Me,
  AcceptedRequest: state.MeReducer.AcceptedRequest,
  confirmationCode: state.MeReducer.confirmationCode,

});

export default connect(mapStateToProps,
  {
    fetchAllUsers,
    sendNotificationToContact,
    checkMyNotification,
    showNotificationModel,
    showInvitationModel,
    CancelSendRequest,
    fetchMyData,
    AccepteSentRequest,
    generateSecurityCode,
    getMyAcceptedRequest,
    showGeneratingCodeModel,
    showConfirmationCode,
    getMyConfirmationRequest,
    requestSucceed,

  })(Contact);
