import {
  GET_MY_DATA, CHECK_MY_NOTIFICATION, GET_MY_CONFIRMATION_REQUEST, GET_MY_ACCEPTED_REQUEST,
} from './actionType';
import { getMeByPhone } from '../../helpers';

export const fetchMyData = () => async (dispatch) => {
  const me = await getMeByPhone();

  dispatch({
    type: GET_MY_DATA,
    payload: me[0],
  });
};

export const checkMyNotification = () => async (dispatch, getState) => {
  const me = await getMeByPhone();
  dispatch({
    type: CHECK_MY_NOTIFICATION,
    payload: me[0].notification,
  });
};

export const getMyAcceptedRequest = () => async (dispatch) => {
  const me = await getMeByPhone();
  dispatch({
    type: GET_MY_ACCEPTED_REQUEST,
    payload: me[0].acceptedRequest,
  });
};

export const getMyConfirmationRequest = () => async (dispatch) => {
  const me = await getMeByPhone();
  dispatch({
    type: GET_MY_CONFIRMATION_REQUEST,
    payload: me[0].confirmationCode,
  });
};
