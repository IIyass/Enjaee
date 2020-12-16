import { GET_MY_DATA, CHECK_MY_NOTIFICATION } from './actionType'
import { firestoreFirebase, firebaseStorage } from '../../firebaseService/FirebaseIndex'
import firebase from 'firebase'
import { getMeByPhone } from '../../helpers'

const usersRef = firestoreFirebase.collection("/users");

export const fetchMyData = (userId) => async (dispatch, getState) => {
    const me = await getMeByPhone();
    dispatch({
        type: GET_MY_DATA,
        payload: me
    });
}


export const checkMyNotification = () => async (dispatch, getState) => {
    const me = await getMeByPhone();
    dispatch({
        type: CHECK_MY_NOTIFICATION,
        payload: me[0].notification
    });
}


