import {SELECTED_LEGAL_DOCUMENTS} from '../actionTypes';
const defaultState = [];

export const selectedLegalDoc = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_LEGAL_DOCUMENTS:
      return action.payload.data;
    default:
      return state;
  }
};
