import {Component, OnDestroy, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DrinksState } from '../store';
import { Observable, Subscription } from 'rxjs/index';
import { getBeersSelector } from '../store/beers.selectors';
import { fetchBeersListRequest } from '../store/beers.actions';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {

  public beers$: Observable<any>;
  public beers = [];
  public filteredBeers = [];
  public beersSubscription: Subscription;
  public _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBeers = this.listFilter ? this.performFilter(this.listFilter) : this.beers;
  }

  constructor(private store: Store<DrinksState>) { }

  ngOnInit() {
    this.store.dispatch(fetchBeersListRequest());
    this.beers$ = this.store.pipe(select(getBeersSelector));
    this.beersSubscription = this.beers$.subscribe(beers => {
      this.beers = beers;
      this.filteredBeers = this.beers;
    });
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.beers.filter( beer  =>
     beer.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
  }
}



