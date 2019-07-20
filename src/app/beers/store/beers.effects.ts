import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { BeersService } from '../beers.service';
import {
  FETCH_BEER_BY_ID_REQUEST,
  FETCH_BEERS_REQUEST,
  fetchBeerByIdFailed,
  fetchBeerByIdResponse,
  fetchBeersListFailed,
  fetchBeersListResponse
} from './beers.actions';
import { of } from 'rxjs/index';
import { GenericAction } from '../../models';

@Injectable()
export class BeersEffects {

  constructor(private actions$: Actions,
              private beersService: BeersService) {
  }

  @Effect() fetchBeers = this.actions$
    .pipe(
      ofType<GenericAction>(FETCH_BEERS_REQUEST),
      switchMap(() => this.beersService.getBeers()),
      map((res) => fetchBeersListResponse(res)),
      catchError(() => of(fetchBeersListFailed()))
    );

  @Effect() fetchBeerById = this.actions$
    .pipe(
      ofType<GenericAction>(FETCH_BEER_BY_ID_REQUEST),
      switchMap((action) => this.beersService.getBeerById(action.payload)),
      // console.log(action.payload)
      map((res) => fetchBeerByIdResponse(res)),
      catchError(() => of(fetchBeerByIdFailed()))
    );
}





