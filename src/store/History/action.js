import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import { getMeByPhone, getUserDataById } from '../../helpers';
import { push } from 'connected-react-router';
import { GET_MY_HISTORY } from './actionType';
const usersRef = firestoreFirebase.collection('/users');
const roomRef = firestoreFirebase.collection('/rooms');

export const getMyHistory = () => async (dispatch) => {
    const me = await getMeByPhone();
    let history = [];
    let a = []
    let y = []

    await usersRef.doc(me[0].id)
        .get()
        .then((querySnapshot) => {
            history = querySnapshot.data().history;
        })
        .then(() => {

            if (history.length > 0) {
                history.every((e) => {
                    return firestoreFirebase.doc(e)
                        .get()
                        .then(async (querySnapshot) => {
                            await roomRef.doc(querySnapshot.data().room)
                                .get()
                                .then((e) => {
                                    a = [...a, {
                                        ...querySnapshot.data(),
                                        userId: e.data().participants.filter(e => e !== me[0].id)[0]
                                    }]
                                    return a;
                                })
                                .then((res) => {
                                    y = res.map(async e => {
                                        const userData = await getUserDataById(e.userId);
                                        return { ...e, userData }
                                    })
                                    return y
                                })
                                .then((res) => {
                                    Promise.all(res).then((values) => {
                                        dispatch(({
                                            type: GET_MY_HISTORY,
                                            payload: values
                                        }))
                                    })
                                })
                        })
                })
            } else {
                dispatch(({
                    type: GET_MY_HISTORY,
                    payload: []
                }))
            }


        })
};


export const goToPrivateRoom = (id) => async (dispatch) => {

    dispatch(push({
        pathname: `/webChat/${id}`
    }));
}
