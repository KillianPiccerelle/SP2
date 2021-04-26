import {combineReducers} from 'redux';

import {eventsList} from './eventsList';
import {generalInformationList} from './generalInformationList';
import {legalDocumentsList} from './legalDocumentsList';
import {selectedGeneralInfo} from './selectedGeneralInfo';
import {selectedLegalDoc} from './selectedLegalDoc';

export default combineReducers({
  eventsList,
  generalInformationList,
  legalDocumentsList,
  selectedGeneralInfo,
  selectedLegalDoc,
});
