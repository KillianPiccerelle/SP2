import {ADD_INFO_GENERALS} from '../actionTypes';

const defaultState = [];

export const generalInformationList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_INFO_GENERALS:
      // payload : {data: data}
      return action.payload.data;
    default:
      return state;
  }
};
