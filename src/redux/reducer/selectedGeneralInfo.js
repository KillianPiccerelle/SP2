import {SELECTED_GENERALS} from '../actionTypes';
const defaultState = [];

export const selectedGeneralInfo = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_GENERALS:
      return action.payload.data;
    default:
      return state;
  }
};
