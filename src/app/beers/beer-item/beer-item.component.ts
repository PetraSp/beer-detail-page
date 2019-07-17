import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksState } from '../store';
import { ActivatedRoute } from '@angular/router';
import { select, Store} from '@ngrx/store';
import { getBeerById } from '../store/beers.selectors';

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
    this.beer$ = this.store.pipe(select(getBeerById(id)));
    this.beer$.subscribe(e => console.log(e));
  }

}
