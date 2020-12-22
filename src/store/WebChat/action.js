import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { GO_CHAT_ROOM, GO_AUDIO_ROOM, GO_VIDEO_ROOM } from './actionType'
import { getMeByPhone } from '../../helpers';
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
    console.log(data)
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
