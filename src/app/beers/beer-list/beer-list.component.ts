import {Component, OnDestroy, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DrinksState } from '../store';
import { Observable, Subscription } from 'rxjs/index';
import { getBeersDataSelector } from '../store/beers.selectors';
import {fetchBeersListRequest, resetBeerList} from '../store/beers.actions';

const LOAD_HEIGHT = 849;

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {

  public beers$: Observable<any>;
  public beers = [];
  public beersSubscription: Subscription;
  public _listSearch = '';
  public currentPage = 1;

  get listSearch(): string {
    return this._listSearch;
  }

  set listSearch(value: string) {
    this._listSearch = value;
    this.currentPage = 1;
    const params = value === '' ? {'page': this.currentPage} : {'page': this.currentPage, 'beer_name': value};

    this.store.dispatch(resetBeerList());
    this.store.dispatch(fetchBeersListRequest(params));
  }

  constructor(private store: Store<DrinksState>) { }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
    this.store.dispatch(fetchBeersListRequest({'page': this.currentPage}));
    this.beers$ = this.store.pipe(select(getBeersDataSelector));
    this.beersSubscription = this.beers$.subscribe(beers => {
      this.beers = beers;
    });
  }

  onScroll = () =>  {
    const params = this._listSearch === '' ? {'page': this.currentPage} : {'page': this.currentPage, 'beer_name': this._listSearch};
    if (window.pageYOffset > LOAD_HEIGHT * this.currentPage) {
      this.currentPage = this.currentPage + 1;
      this.store.dispatch(fetchBeersListRequest(params));
    }
  };

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
    window.removeEventListener('scroll', this.onScroll);
  }
}



