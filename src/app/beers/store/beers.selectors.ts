import { createSelector } from '@ngrx/store';

import { DrinksState, getDrinksSelector } from './index';
import { BeersState } from './beers.state-type';

export const getBeersData = (state: BeersState) => state.data;
export const getSelectedBeer = (state: BeersState) => state.selectedBeer;
export const getBeers = (state: DrinksState) => state.beers;

export const getBeersSelector = createSelector(
  getDrinksSelector,
  getBeers
);

export const getBeersDataSelector = createSelector(
  getBeersSelector,
  getBeersData
);

export const getSelectedBeerSelector = createSelector(
  getBeersSelector,
  getSelectedBeer
);
