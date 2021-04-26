import {
  ADD_EVENTS,
  ADD_INFO_GENERALS,
  SELECTED_GENERALS,
  ADD_LEGAL_DOCUMENTS,
  SELECTED_LEGAL_DOCUMENTS,
} from './actionTypes';

// action = {type: NOM_ACTION, payload: data}
export const fetchEventsAction = data => ({
  type: ADD_EVENTS,
  payload: {
    data,
  },
});

export const fetchInfoGeneralsAction = data => ({
  type: ADD_INFO_GENERALS,
  payload: {
    data,
  },
});

export const fetchSelectedInfoGeneralsAction = data => ({
  type: SELECTED_GENERALS,
  payload: {
    data,
  },
});

export const fetchLegalDocumentsAction = data => ({
  type: ADD_LEGAL_DOCUMENTS,
  payload: {
    data,
  },
});

export const fetchSelectedLegalDocumentsAction = data => ({
  type: SELECTED_LEGAL_DOCUMENTS,
  payload: {
    data,
  },
});
