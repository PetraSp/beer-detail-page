import { BeersState } from './beers.state-type';
import { FETCH_BEER_BY_ID_RESPONSE, FETCH_BEERS_RESPONSE } from './beers.actions';
import { GenericAction } from '../../models';


const initialState: BeersState = {
  data: [],
  id: null
};


export const beersReducer = (state = initialState, action: GenericAction) => {
  switch (action.type) {
    case FETCH_BEERS_RESPONSE: {
      return <BeersState>{
        ...state,
        data: action.payload
      };
    }
    case FETCH_BEER_BY_ID_RESPONSE: {
      return <BeersState>{
        ...state,
        id: action.payload
      };
    }

    default:
      return state;
  }
};
