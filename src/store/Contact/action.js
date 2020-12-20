import firebase from 'firebase';
import { push } from 'connected-react-router';
import {
  GET_ALL_USERS,
  SEND_NOTIFICATION_MODEL,
  SHOW_NOTIFICATION_MODEL,
  SHOW_INVITATION_MODEL,
  CANCEL_SEND_REQUEST,
  ACCEPT_SENT_REQUEST,
  GENERATE_SECURITY_CODE,
  SHOW_GENERATING_CODE_MODEL,
  SHOW_CONFIRMATION_CODE_MODEL,
  REQUEST_SUCCEED,
} from './actionType';
import { firestoreFirebase, firebaseStorage } from '../../firebaseService/FirebaseIndex';
import { parseJwt, getMeByPhone } from '../../helpers';
import { checkMyNotification } from '../Me/action';

const usersRef = firestoreFirebase.collection('/users');
const Token = localStorage.getItem('token');

export const fetchAllUsers = () => async (dispatch, getState) => {
  const token = localStorage.getItem('token');
  const res = await usersRef.get();
  const AllUsersDocuments = res.docs.filter((e) => e.data().mobile !== parseJwt(token).firebase.identities.phone[0]);
  const AllUserMetaData = AllUsersDocuments.map((e) => ({ id: e.id, ...e.data() }));
  dispatch({
    type: GET_ALL_USERS,
    payload: AllUserMetaData,
  });
};

export const generateSecurityCode = (code, id) => async (dispatch) => {
  const me = await getMeByPhone();
  const MyId = me[0].id;
  await usersRef.doc(id).update({
    confirmationCode: firebase.firestore.FieldValue.arrayUnion({ code, Id: MyId }),

  });

  await usersRef.doc(MyId).update({
    acceptedRequest: firebase.firestore.FieldValue.arrayRemove(id),
  });

  dispatch({
    type: GENERATE_SECURITY_CODE,
  });
};

export const AccepteSentRequest = (index, id) => async (dispatch) => {
  const me = await getMeByPhone();
  await usersRef.doc(me[0].id).update({
    notification: firebase.firestore.FieldValue.arrayRemove(id),
    acceptedRequest: firebase.firestore.FieldValue.arrayUnion(id),
  });
  dispatch({
    type: ACCEPT_SENT_REQUEST,
    payload: index,
  });
};

export const sendNotificationToContact = (id) => async (dispatch, getState) => {
  const me = await getMeByPhone();
  await usersRef.doc(id).update({
    notification: firebase.firestore.FieldValue.arrayUnion(me[0].id),
  });
  dispatch({
    type: SEND_NOTIFICATION_MODEL,
    payload: id,
  });
};

export const showNotificationModel = (index) => async (dispatch, getState) => {
  dispatch({
    type: SHOW_NOTIFICATION_MODEL,
    payload: index,
  });
};

export const showConfirmationCode = (index) => async (dispatch) => {
  dispatch({
    type: SHOW_CONFIRMATION_CODE_MODEL,
    payload: index,
  });
};

export const showInvitationModel = (index) => async (dispatch, getState) => {
  dispatch({
    type: SHOW_INVITATION_MODEL,
    payload: index,
  });
};

export const CancelSendRequest = (id) => async (dispatch, getState) => {
  const me = await getMeByPhone();
  await checkMyNotification();
  await usersRef.doc(me[0].id).update({
    notification: firebase.firestore.FieldValue.arrayRemove(id),
  });
  dispatch({
    type: CANCEL_SEND_REQUEST,
  });
};

export const showGeneratingCodeModel = (index) => async (dispatch, getState) => {
  dispatch({
    type: SHOW_GENERATING_CODE_MODEL,
    payload: index,
  });
};

export const requestSucceed = () => async (dispatch) => {
  dispatch(push('/alert'));
  dispatch({
    type: REQUEST_SUCCEED,
  });
};
