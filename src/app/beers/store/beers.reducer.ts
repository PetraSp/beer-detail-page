import { BeersState } from './beers.state-type';
import { FETCH_BEERS_RESPONSE } from './beers.actions';
import { GenericAction } from '../../models';


const initialState: BeersState = {
  data: []
};


export const beersReducer = (state = initialState, action: GenericAction) => {
  switch (action.type) {
    case FETCH_BEERS_RESPONSE: {
      return <BeersState>{
        ...state,
        data: action.payload
      };
    }

    default:
      return state;
  }
};
