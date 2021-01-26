import { firestoreFirebase } from "../../firebaseService/FirebaseIndex";
import firebase from "firebase";
import { getMeByPhone, getUserDataById } from "../../helpers";
import { push } from "connected-react-router";
import { GET_MY_HISTORY } from "./actionType";
import {fetchMyData} from '../Me/action'
const usersRef = firestoreFirebase.collection("/users");
const roomRef = firestoreFirebase.collection("/rooms");

export const getMyHistory = () => async (dispatch) => {
  const me = await getMeByPhone();
  let history = [];
  let a = [];
  let alluserData = [];

  await usersRef
    .doc(me[0].id)
    .get()
    .then((querySnapshot) => {
      history = querySnapshot.data().history;
    })
    .then(() => {
      if (history.length > 0) {
        history.every((e) => {
          return firestoreFirebase
            .doc(e)
            .get()
            .then(async (querySnapshot) => {
              await roomRef
                .doc(querySnapshot.data().room)
                .get()
                .then((e) => {
                  a = [
                    ...a,
                    {
                      ...querySnapshot.data(),
                      userId: e
                        .data()
                        .participants.filter((e) => e !== me[0].id)[0],
                    },
                  ];
                  return a;
                })
                .then((res) => {
                  alluserData = res.map(async (e) => {
                    const userData = await getUserDataById(e.userId);
                    return { ...e, userData };
                  });
                  return alluserData;
                })
                .then((res) => {
                  Promise.all(res).then((values) => {
                    dispatch({
                      type: GET_MY_HISTORY,
                      payload: values,
                    });
                  });
                });
            });
        });
      } else {
        dispatch({
          type: GET_MY_HISTORY,
          payload: [],
        });
      }
    });
};

export const goToPrivateRoom = (id) => async (dispatch) => {
  dispatch(
    push({
      pathname: `/webChat/${id}`,
    })
  );
};

export const blockContact = (id) => async (dispatch) => {
  const me = await getMeByPhone();
  const MyId = me[0].id;
  await usersRef.doc(MyId).update({
    blockedUsers: firebase.firestore.FieldValue.arrayUnion(id),
  });
  dispatch(fetchMyData());
};

export const ClearHistory = () => async (dispatch) => {};

export const DeleteHistory = () => async (dispatch) => {};

export const CallHistory = () => async (dispatch) => {};
