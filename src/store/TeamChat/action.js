import { GO_TO_NEXT_STEP, BACK_TO_PREVIOUS_STEP } from './actionType';

export const next = () => async (dispatch, getState) => {
  dispatch({
    type: GO_TO_NEXT_STEP,
  });
};

export const back = () => async (dispatch, getState) => {
  dispatch({
    type: BACK_TO_PREVIOUS_STEP,
  });
};
