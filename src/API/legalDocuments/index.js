import axios from 'axios';

import {fetchLegalDocumentsAction} from '../../redux/actions';
import {API_URL} from '@env';

const ENDPOINT_LEGAL_DOCUMENTS = API_URL + '/documents/categories';
const apiKey = 'b4ee0d16abbf4b73af1193cac08f4e04';
const MAX_PER_PAGE = 30;

console.log(ENDPOINT_LEGAL_DOCUMENTS);

export const fetchLegalDocuments = async (dispatch, query) => {
  try {
    const response = await axios.get(ENDPOINT_LEGAL_DOCUMENTS, {
      params: {
        //apiKey,
      },
    });
    console.log('Response =', response.data);
    dispatch(fetchLegalDocumentsAction(response.data));
  } catch (e) {
    console.log('error requete legal documents', e);
  }
};

export const fetchSelectedLegalDocuments = async (dispatch, categoryId) => {
  try {
    console.log('Dans fetch selected recipe');
    const response = await axios.get(
      ENDPOINT_BASE + '/documents' + categoryId + '/category',
      {
        params: {
          //apiKey,
        },
      },
    );

    console.log('Response =', response.data);
    dispatch(fetchSelectedRecipeAction(response.data));
  } catch (e) {
    console.log('error', e);
  }
};
