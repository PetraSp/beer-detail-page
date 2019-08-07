import {Component, OnDestroy, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DrinksState } from '../store';
import { Observable, Subscription } from 'rxjs/index';
import { getBeersDataSelector } from '../store/beers.selectors';
import { fetchBeersListRequest } from '../store/beers.actions';

const LOAD_HEIGHT = 849;

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
  public currentPage = 1;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBeers = this.listFilter ? this.performFilter(this.listFilter) : this.beers;
  }

  constructor(private store: Store<DrinksState>) { }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
    this.store.dispatch(fetchBeersListRequest(this.currentPage));
    this.beers$ = this.store.pipe(select(getBeersDataSelector));
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

  onScroll = () =>  {
    if (window.pageYOffset > LOAD_HEIGHT * this.currentPage) {
      this.currentPage = this.currentPage + 1;
      this.store.dispatch(fetchBeersListRequest(this.currentPage));
    }
  };

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
    window.removeEventListener('scroll', this.onScroll);
  }
}



