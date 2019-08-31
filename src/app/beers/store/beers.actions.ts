
import { Action } from '@ngrx/store';
import { GenericAction } from '../../models';


export const FETCH_BEERS_REQUEST = '[Beers] fetch list of beers request';
export const FETCH_BEERS_RESPONSE = '[Beers] fetch list of beers response';
export const FETCH_BEERS_FAILED = '[Beers] fetch list of beers failed';


export const FETCH_BEER_BY_ID_REQUEST = '[Beers] fetch a beer request';
export const FETCH_BEER_BY_ID_RESPONSE = '[Beers] fetch a beer response';
export const FETCH_BEER_BY_ID_FAILED = '[Beers] fetch a beer failed';
export const BEER_LIST_RESET = '[Beers] reset beer list';


export const fetchBeersListRequest = (params): Action => {
  return new GenericAction(FETCH_BEERS_REQUEST, params);
};

export const fetchBeersListResponse = (beers): Action => {
  return new GenericAction(FETCH_BEERS_RESPONSE, beers);
};

export const fetchBeersListFailed = (): Action => {
  return new GenericAction(FETCH_BEERS_FAILED);
};

export const resetBeerList = (): Action => {
  return new GenericAction(BEER_LIST_RESET);
};


export const fetchBeerByIdRequest = (id): Action => {
  return new GenericAction(FETCH_BEER_BY_ID_REQUEST, id);
};

export const fetchBeerByIdResponse = (beer): Action => {
  return new GenericAction(FETCH_BEER_BY_ID_RESPONSE, beer);
};

export const fetchBeerByIdFailed = (): Action => {
  return new GenericAction(FETCH_BEER_BY_ID_FAILED);
};
