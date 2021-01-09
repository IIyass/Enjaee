import {
  CONFIRMATION_STEP, OPEN_MODEL,
  GO_TO_LAST_STEP, GO_TO_SECOND_STEP,
  GO_TO_FIRST_STEP, FINISH_STEP,
  CLOSE_MODEL
} from './actionType';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import { push } from 'connected-react-router';
import firebase from 'firebase';
import { getMeByPhone } from '../../helpers'


const userRef = firestoreFirebase.collection('/users');
const roomsRef = firestoreFirebase.collection('/rooms');

export const next = (id, time) => async (dispatch) => {

  dispatch({
    type: GO_TO_SECOND_STEP,
    payload: {
      id, time: time.value
    }
  });
}

export const NextCode = (id, code) => async (dispatch, getState) => {
  const DataStepOne = getState().TeamChatReducer.DataStepOne;
  const me = await getMeByPhone();
  let teamChatNotification = [];

  await userRef
    .doc(id)
    .get()
    .then(async querySnapshot => {
      teamChatNotification = await querySnapshot.data().teamChatNotification.filter((chat) => {
        return chat.id !== me[0].id;
      })
    })
    .then(async () => {
      await userRef
        .doc(id)
        .update({
          teamChatNotification: [...teamChatNotification, {
            codeConfirmation: code,
            id: me[0].id,
            duration: DataStepOne.time
          }]
        })
    })
    .then(() => {
      dispatch({
        type: GO_TO_LAST_STEP,
      });
    })
}

export const AddContactToTeamChat = (contactId, duration, codeConfirmation) => async (dispatch) => {
  const me = await getMeByPhone();

  await userRef
    .doc(me[0].id)
    .update({
      teamChatNotification: firebase.firestore.FieldValue.arrayRemove({
        id: contactId,
        duration,
        codeConfirmation
      })
    }).then(async () => {
      await userRef
        .doc(contactId)
        .update({
          teamChatContact: firebase.firestore.FieldValue.arrayUnion({
            contactId: me[0].id,
            duration
          })
        })
        .then(async doc => {
          await userRef
            .doc(me[0].id)
            .update({
              teamChatContact: firebase.firestore.FieldValue.arrayUnion({
                contactId,
                duration
              })
            })
        }).then(() => {
          dispatch({
            type: FINISH_STEP,
          });
        })

    })
}

export const ConfirmationModel = () => async (dispatch) => {
  dispatch({
    type: CONFIRMATION_STEP,
  });
}

export const goToFirstStep = () => async (dispatch) => {
  dispatch({
    type: GO_TO_FIRST_STEP,
  });
};

export const OpenModeL = () => async (dispatch) => {
  dispatch({
    type: OPEN_MODEL,
  });
};

export const CloseModal = () => async (dispatch) => {
  document.body.style.overflow = 'scroll';
  dispatch({
    type: CLOSE_MODEL,
  });
}

export const ChangeChatDuration = (newDuration, contactId) => async () => {
  const me = await getMeByPhone();
  let teamChatContactForMe = [];

  await userRef
    .doc(me[0].id)
    .get()
    .then(async querySnapshot => {
      teamChatContactForMe = await querySnapshot.data().teamChatNotification.filter((chat) => {
        return chat.id !== contactId;
      })
    })
    .then(async () => {
      await userRef
        .doc(me[0].id)
        .update({
          teamChatContact: [...teamChatContactForMe, {
            contactId: contactId,
            duration: newDuration
          }]
        })
    })

};


export const GoToPrivateRoom = (id) => async (dispatch) => {
  const me = await getMeByPhone();
  let room = {};
  await roomsRef.where('participants', 'array-contains', me[0].id)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.forEach((doc) => {
        if (doc.data().participants.every(elem => [me[0].id, id].indexOf(elem) > -1)) {
          room = ({ id: doc.id, ...doc.data() })
        }
      });
    })

  dispatch(push({
    pathname: `/webChat/team/${room.id}`
  }));

};
