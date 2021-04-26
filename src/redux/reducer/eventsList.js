import {ADD_EVENTS} from '../actionTypes';

const defaultState = [];

export const eventsList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EVENTS:
      // payload : {data: data}
      return action.payload.data;
    default:
      return state;
  }
};
