import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { GO_CHAT_ROOM, GO_AUDIO_ROOM, GO_VIDEO_ROOM } from './actionType'
import { getMeByPhone } from '../../helpers';

const usersRef = firestoreFirebase.collection('/users');
const messagesRef = firestoreFirebase.collection('/messages');

export const goToChatRoom = () => async (dispatch) => {
    dispatch({
        type: GO_CHAT_ROOM
    });
};

export const goToAudioRoom = () => async (dispatch) => {
    dispatch({
        type: GO_AUDIO_ROOM
    });
};

export const goToVideoRoom = () => async (dispatch) => {
    dispatch({
        type: GO_VIDEO_ROOM
    });
};

export const SendMessage = (data) => async (dispatch) => {
    const me = await getMeByPhone();
    await messagesRef.add({
        text: data.content,
        room: data.room,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userId: me[0].id
    })
    dispatch({
        type: 'SEND_MESSAGE'
    });
};


export const doVideoOffer = (to, offer, database, username) => async (dispatch) => {
    const me = await getMeByPhone();
    await usersRef.doc(to).add({
        type: 'offer',
        from: me[0].name,
        offer: JSON.stringify(offer)
    })
    dispatch({
        type: 'VIDEO_CALL_OFFER'
    });
};


export const doVideoAnswer = (to, offer, database, username) => async (dispatch) => {
    const me = await getMeByPhone();
    await usersRef.doc(to).update({
        type: 'answer',
        from: me[0].name,
        offer: JSON.stringify(offer)
    })
    dispatch({
        type: 'VIDEO_CALL_ANSWER'
    });
};



export const doCandidate = (to, candidate, database, username) => async (dispatch) => {
    const me = await getMeByPhone();
    await usersRef.doc(to).update({
        type: 'candidate',
        from: me[0].name,
        candidate: JSON.stringify(candidate)
    })
    dispatch({
        type: 'VIDEO_CALL_CONDIDATE'
    });

}