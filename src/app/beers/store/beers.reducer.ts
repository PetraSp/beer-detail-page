import { BeersState } from './beers.state-type';
import {BEER_LIST_RESET, FETCH_BEER_BY_ID_RESPONSE, FETCH_BEERS_RESPONSE} from './beers.actions';
import { GenericAction } from '../../models';


const initialState: BeersState = {
  data: [],
  selectedBeer: {}
};

export const beersReducer = (state: BeersState = initialState, action: GenericAction) => {
  switch (action.type) {
    case FETCH_BEERS_RESPONSE: {
      return <BeersState>{
        ...state,
        data: state.data.concat(action.payload)
      };
    }
    case BEER_LIST_RESET: {
      return initialState;z
    }
    case FETCH_BEER_BY_ID_RESPONSE: {
      return <BeersState>{
        ...state,
        selectedBeer: action.payload[0]
      };
    }

    default:
      return state;
  }
};


