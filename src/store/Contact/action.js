import {
    GET_ALL_USERS,
    SEND_NOTIFICATION_MODEL,
    SHOW_NOTIFICATION_MODEL,
    SHOW_INVITATION_MODEL,
    CANCEL_SEND_REQUEST
} from './actionType'
import { firestoreFirebase, firebaseStorage } from '../../firebaseService/FirebaseIndex'
import firebase from 'firebase'
import { parseJwt, getMeByPhone } from '../../helpers'
import { checkMyNotification } from '../Me/action'
const usersRef = firestoreFirebase.collection("/users");
const Token = localStorage.getItem('token')


export const fetchAllUsers = () => async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const res = await usersRef.get();
    const AllUsersDocuments = res.docs.filter(e => {
        return e.data().mobile !== parseJwt(token).firebase.identities.phone[0];
    })
    const AllUserMetaData = AllUsersDocuments.map(e => {
        return { id: e.id, ...e.data() }
    })
    dispatch({
        type: GET_ALL_USERS,
        payload: AllUserMetaData
    });
}



export const sendNotificationToContact = (id) => async (dispatch, getState) => {
    const me = await getMeByPhone()
    await usersRef.doc(id).update({
        notification: firebase.firestore.FieldValue.arrayUnion(me[0].id),
    });
    dispatch({
        type: SEND_NOTIFICATION_MODEL,
        payload: id
    });
}


export const showNotificationModel = (index) => async (dispatch, getState) => {
    dispatch({
        type: SHOW_NOTIFICATION_MODEL,
        payload: index
    });
}


export const showInvitationModel = (index) => async (dispatch, getState) => {
    dispatch({
        type: SHOW_INVITATION_MODEL,
        payload: index
    });
}

export const CancelSendRequest = (id) => async (dispatch, getState) => {
    const me = await getMeByPhone();
    await checkMyNotification()
    await usersRef.doc(me[0].id).update({
        notification: firebase.firestore.FieldValue.arrayRemove(id),
    });
    dispatch({
        type: CANCEL_SEND_REQUEST,
    });
}


