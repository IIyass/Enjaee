import {
  CONFIRMATION_STEP, BACK_TO_PREVIOUS_STEP,
  GO_TO_LAST_STEP, GO_TO_SECOND_STEP,
  GO_TO_FIRST_STEP, FINISH_STEP
} from './actionType';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { getMeByPhone } from '../../helpers'

const userRef = firestoreFirebase.collection('/users');

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

  await userRef
    .doc(id)
    .update({
      teamChatNotification: firebase.firestore.FieldValue.arrayUnion({
        codeConfirmation: code,
        id: me[0].id,
        duration: DataStepOne.time
      })
    })
    .then(doc => {
      dispatch({
        type: GO_TO_LAST_STEP,
      });
    })
}

export const AddContactToTeamChat = (contactId, duration, codeConfirmation) => async (dispatch) => {
  const me = await getMeByPhone();
  console.log('res')
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

export const back = () => async (dispatch) => {
  dispatch({
    type: BACK_TO_PREVIOUS_STEP,
  });
};
