import {ADD_LEGAL_DOCUMENTS} from '../actionTypes';

const defaultState = [];

export const legalDocumentsList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LEGAL_DOCUMENTS:
      // payload : {data: data}
      return action.payload.data;
    default:
      return state;
  }
};
