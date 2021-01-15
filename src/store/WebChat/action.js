import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { GO_CHAT_ROOM, GO_AUDIO_ROOM, GO_VIDEO_ROOM, ROOM_DATA } from './actionType'
import { getMeByPhone } from '../../helpers';

const messagesRef = firestoreFirebase.collection('/messages');
const ClearedMessagesRef = firestoreFirebase.collection('/clearedMessages');
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

export const clearMessages = (roomData) => async (dispatch) => {

    await messagesRef
        .doc(roomData.id)
        .get()
        .then((querySnapshot) => {
            const entries = Object.entries(querySnapshot.data())
            entries.forEach(async message => {
                await ClearedMessagesRef.doc(roomData.id).set({
                    [message[0]]: {
                        text: message[1].text,
                        room: message[1].room,
                        createdAt: message[1].createdAt,
                        userId: message[1].userId,
                        read: message[1].read
                    }
                }, { merge: true })
            })
        }).then(async () => {
            await messagesRef
                .doc(roomData.id)
                .delete()
        })
};

export const SendMessage = (data) => async (dispatch) => {

    const me = await getMeByPhone();
    const newId = messagesRef.doc();
    await messagesRef.doc(data.room).set({
        [newId.id]: {
            text: data.content,
            room: data.room,
            createdAt: firebase.firestore.Timestamp.now(),
            userId: me[0].id,
            read: false
        }
    }, { merge: true }).then(async (doc) => {
        dispatch({
            type: 'SEND_MESSAGE'
        });
    })

};

export const readMessage = (roomData) => async (dispatch) => {

    const me = await getMeByPhone();
    let unReadMessages = [];
    await messagesRef
        .where(firebase.firestore.FieldPath.documentId()
            , "==", roomData.id)
        .get()
        .then((querySnapshot) => {

            return querySnapshot.forEach((doc) => {
                const entries = Object.entries(doc.data())
                unReadMessages = entries.filter((e) => {
                    return e[1].userId !== me[0].id && e[1].read === false
                })
                unReadMessages = unReadMessages.map(e => e[0])
            });
        })
        .then(() => {
            let messages = [];
            unReadMessages.every(async message => {
                await messagesRef.doc(roomData.id)
                    .get()
                    .then((querySnapshot) => {
                        messages = { id: message, ...querySnapshot.data()[message] };
                    })
                    .then(async () => {

                        if (messages.id === message) {
                            await messagesRef.doc(roomData.id)
                                .update({
                                    [message]: {
                                        createdAt: messages.createdAt,
                                        read: true,
                                        room: messages.room,
                                        text: messages.text,
                                        userId: messages.userId
                                    }
                                })
                        }
                    })
            })
        })
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
