import { createSelector } from '@ngrx/store';

import { DrinksState, getDrinksState } from './index';
import { BeersState } from './beers.state-type';


export const getBeers = (state: BeersState) => state.data;
export const getBeersById = (state: BeersState) => state.id;

export const beersState = createSelector(
  getDrinksState,
  (state: DrinksState) => state.beersState
);

export const getBeersSelector = createSelector(
  beersState,
  getBeers
);

// export const getBeerById = (id: number) => createSelector(
//   getBeersSelector,
//   (beers) => {
//     return beers.find(b => b.id === id);
//   }
// );

export const getBeerByIdSelector = createSelector(
  beersState,
  getBeersById
);
