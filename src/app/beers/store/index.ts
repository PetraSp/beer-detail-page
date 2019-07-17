import { BeersState } from './beers.state-type';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { beersReducer } from './beers.reducer';


export interface DrinksState {
  beers: BeersState;
}

export const beersReducers: ActionReducerMap<DrinksState> = {
  beers: beersReducer
};

export const getDrinksState = createFeatureSelector<DrinksState>(
  'drinks'
);
