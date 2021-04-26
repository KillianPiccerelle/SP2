import axios from 'axios';

import {fetchEventsAction} from '../../redux/actions';
import {API_URL} from '@env';

const ENDPOINT_EVENTS = API_URL + '/events=';
const apiKey = 'b4ee0d16abbf4b73af1193cac08f4e04';
const MAX_PER_PAGE = 30;

export const fetchEvents = async (dispatch, query) => {
  try {
    const response = await axios.get(ENDPOINT_EVENTS + MAX_PER_PAGE, {});
    /*console.log('Response =', response.data);*/
    dispatch(fetchEventsAction(response.data));
  } catch (e) {
    console.log('error requete events', e);
  }
};

/**export const fetchSelectedRecipe = async (dispatch, recipeId) => {
  try {
    console.log('Dans fetch selected recipe');
    const response = await axios.get(
      ENDPOINT_BASE + '/' + recipeId + '/information',
      {
        params: {
          apiKey,
        },
      },
    );

    console.log('Response =', response.data);
    dispatch(fetchSelectedRecipeAction(response.data));
  } catch (e) {
    console.log('error', e);
  }
};**/
