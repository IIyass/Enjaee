import { GET_MY_DATA } from './actionType'
import { firestoreFirebase, firebaseStorage } from '../../firebaseService/FirebaseIndex'
import firebase from 'firebase'

const usersRef = firestoreFirebase.collection("/users");

export const fetchMyData = (userId) => async (dispatch, getState) => {
    const res = await usersRef.doc(userId).get();
    dispatch({
        type: GET_MY_DATA,
        payload: res.data()
    });
}
