import axios from 'axios';

import {fetchInfoGeneralsAction} from '../../redux/actions';
import {API_URL} from '@env';

const ENDPOINT_GENERAL_INFORMATION = API_URL + '/informations/categories';
const apiKey = 'b4ee0d16abbf4b73af1193cac08f4e04';
const MAX_PER_PAGE = 30;

export const fetchInfoGenerals = async (dispatch, query) => {
  try {
    const response = await axios.get(ENDPOINT_GENERAL_INFORMATION, {
      params: {
        //apiKey,
      },
    });
    console.log('Response =', response.data);
    dispatch(fetchInfoGeneralsAction(response.data));
  } catch (e) {
    console.log('error requete general informations', e);
  }
};

export const fetchSelectedRecipe = async (dispatch, categoryId) => {
  try {
    console.log('Dans fetch selected recipe');
    const response = await axios.get(
      ENDPOINT_BASE + '/informations' + categoryId + '/category',
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
