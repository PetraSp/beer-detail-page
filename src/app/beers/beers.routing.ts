import { Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerItemComponent } from './beer-item/beer-item.component';


export const BeersRouting: Routes = [
  {
    path: 'beers',
    component: BeerListComponent
  },
  {
    path: 'beers/:id',
    component: BeerItemComponent
  }
];
