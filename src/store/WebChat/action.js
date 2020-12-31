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


export const doVideoOffer = (room, offer) => async (dispatch) => {
    const me = await getMeByPhone();
    await roomsRef.doc(room).update({
        type: 'offer',
        from: me[0].id,
        offer: JSON.stringify(offer)
    })

};


export const doCandidate = (to, candidate) => async (dispatch) => {
    const me = await getMeByPhone();
    await usersRef.doc(to).update({
        VideoRoom: {
            type: 'candidate',
            from: me[0].id,
            candidate: JSON.stringify(candidate)
        }
    })


}


export const doVideoAnswer = (room, answer) => async (dispatch) => {
    const me = await getMeByPhone();
    await roomsRef.doc(room).update({
        type: 'answer',
        from: me[0].id,
        answer: JSON.stringify(answer)
    })

};

export const leaveRoom = (me, remoteUser, room, localconnection, localstream) => async (dispatch) => {

    await roomsRef.doc(room).update({
        type: 'leave',
        answer: '',
        from: '',
        offer: '',
    })
    await usersRef.doc(me).update({
        "VideoRoom.type": '',
        "VideoRoom.from": '',
        "VideoRoom.candidate": ''
    })
    await usersRef.doc(remoteUser[0]).update({
        'VideoRoom.type': '',
        'VideoRoom.from': '',
        'VideoRoom.candidate': ''
    })
    dispatch({
        type: 'LEAVE_CALL'
    });

};

export const startCallAction = () => async (dispatch) => {
    dispatch({
        type: 'START_CALL'
    });
};