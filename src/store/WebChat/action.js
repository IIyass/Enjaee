import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { GO_CHAT_ROOM, GO_AUDIO_ROOM, GO_VIDEO_ROOM, ROOM_DATA } from './actionType'
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



export const GetRoomMetaData = (id) => async (dispatch) => {

    let room = {};
    await roomsRef
        .where(firebase.firestore.FieldPath.documentId(),
            "==",
            id)
        .get()
        .then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
                room = ({ id: doc.id, ...doc.data() })
            });
        })

    dispatch({
        type: ROOM_DATA,
        payload: room
    });
}


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

export const leaveRoom = (me, remoteUser, room, localconnection, localstream,
    localVideoRef, displayTwoVideo, setDisplayVideoScreen, handleReset) => async (dispatch) => {

        if (displayTwoVideo) {
            const tracks = localVideoRef.current.srcObject.getTracks();
            tracks.forEach(track => {
                track.stop();
            });

            if (localstream) {
                localstream.getTracks().forEach(track => track.stop());
            }

            if (localconnection) {
                localconnection.close();
            }

            setDisplayVideoScreen(false);
            handleReset();

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
        }
    };
