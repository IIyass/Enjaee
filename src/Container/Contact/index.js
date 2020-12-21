import React, { useEffect, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
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
    fetchMyData,
    fetchAllUsers,
    sendNotificationToContact,
    checkMyNotification,
    showNotificationModel,
    showInvitationModel,
    CancelSendRequest,
    AccepteSentRequest,
    generateSecurityCode,
    getMyAcceptedRequest,
    showGeneratingCodeModel,
    getMyConfirmationRequest,
    showConfirmationCode,
    requestSucceed,
  } = props;

  const dispatch = useDispatch()
  const AllUsers = useSelector((state) => state.ContactReducer.AllUsers)
  const Loading = useSelector((state) => state.ContactReducer.Loading)
  const MyNotification = useSelector((state) => state.MeReducer.MyNotification)
  const sentNotificationStep = useSelector((state) => state.ContactReducer.sentNotificationStep)
  const openNotificationModel = useSelector((state) => state.ContactReducer.openNotificationModel)
  const me = useSelector((state) => state.MeReducer.Me)
  const AcceptedRequest = useSelector((state) => state.MeReducer.AcceptedRequest)
  const confirmationCode = useSelector((state) => state.MeReducer.confirmationCode)

  const fetchAllUsersCall = useCallback(
    () => dispatch(fetchAllUsers),
    [dispatch, fetchAllUsers]
  );

  const fetchMyDataCall = useCallback(
    () => dispatch(fetchMyData),
    [dispatch, fetchMyData]
  );

  const getMyAcceptedRequestCall = useCallback(
    () => dispatch(getMyAcceptedRequest),
    [dispatch, getMyAcceptedRequest]
  );

  const getMyConfirmationRequestCall = useCallback(
    () => dispatch(getMyConfirmationRequest),
    [dispatch, getMyConfirmationRequest]
  );

  const checkMyNotificationCall = useCallback(
    () => dispatch(checkMyNotification),
    [checkMyNotification, dispatch]
  );

  useEffect(() => {
    fetchAllUsersCall()
  }, [fetchAllUsersCall])

  useEffect(() => {
    fetchMyDataCall();
  }, [fetchMyDataCall]);

  useEffect(() => {
    getMyAcceptedRequestCall()
  }, [getMyAcceptedRequestCall]);

  useEffect(() => {
    getMyConfirmationRequestCall()
  }, [getMyConfirmationRequestCall]);

  useEffect(() => {
    checkMyNotificationCall();
  }, [checkMyNotificationCall]);

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


export default connect(null,
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
