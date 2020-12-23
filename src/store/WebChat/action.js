import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { GO_CHAT_ROOM, GO_AUDIO_ROOM, GO_VIDEO_ROOM } from './actionType'
import { getMeByPhone } from '../../helpers';

const messagesRef = firestoreFirebase.collection('/messages');
const roomsRef = firestoreFirebase.collection('/rooms');
const usersRef = firestoreFirebase.collection('/users');


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


export const doVideoOffer = (to, offer) => async (dispatch) => {
    const me = await getMeByPhone();
    await usersRef.doc(to).update({
        type: 'offer',
        from: me[0].id,
        offer: JSON.stringify(offer)
    })
    dispatch({
        type: 'VIDEO_CALL_OFFER'
    });
};


export const doCandidate = (to, candidate) => async (dispatch) => {
    const me = await getMeByPhone();
    await usersRef.doc(to).update({
        type: 'candidate',
        from: me[0].id,
        candidate: JSON.stringify(candidate)
    })
    dispatch({
        type: 'VIDEO_CALL_CONDIDATE'
    });

}


export const doVideoAnswer = (to, answer) => async (dispatch) => {
    const me = await getMeByPhone();
    await roomsRef.doc(to).update({
        type: 'answer',
        from: me[0].name,
        answer: JSON.stringify(answer)
    })
    dispatch({
        type: 'VIDEO_CALL_ANSWER'
    });
};


export const startCallAction = () => async (dispatch) => {
    dispatch({
        type: 'START_CALL'
    });
};