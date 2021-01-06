import {
  CONFIRMATION_STEP, BACK_TO_PREVIOUS_STEP,
  GO_TO_LAST_STEP, GO_TO_SECOND_STEP
} from './actionType';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import firebase from 'firebase';
import { getMeByPhone } from '../../helpers'

const userRef = firestoreFirebase.collection('/users');

export const next = (id, time) => async (dispatch) => {
  const me = await getMeByPhone();

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
    .doc(me[0].id)
    .update({
      teamChat: firebase.firestore.FieldValue.arrayUnion({
        code,
        id: id,
        duration: DataStepOne.time
      })
    })
    .then(async doc => {
      await userRef
        .doc(id)
        .update({
          teamChat: firebase.firestore.FieldValue.arrayUnion({
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
    })
}

export const ConfirmationModel = () => async (dispatch) => {
  dispatch({
    type: CONFIRMATION_STEP,
  });
}
export const back = () => async (dispatch) => {
  dispatch({
    type: BACK_TO_PREVIOUS_STEP,
  });
};
