import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksState } from '../store';
import { ActivatedRoute } from '@angular/router';
import { select, Store} from '@ngrx/store';
import { getSelectedBeerSelector } from '../store/beers.selectors';
import { fetchBeerByIdRequest } from '../store/beers.actions';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {
  public beer$: Observable<any>;
  constructor(private store: Store<DrinksState>, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    this.store.dispatch(fetchBeerByIdRequest(id));
    this.beer$ = this.store.pipe(select(getSelectedBeerSelector));
  }
}
