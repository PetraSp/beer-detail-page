import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

const BEERS_PER_PAGE = 25;

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  public getBeers(page: number): Observable<any> {
    console.log(page);
    return this.http.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${BEERS_PER_PAGE}`);
  }

  public getBeerById(id): Observable<any> {
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`);
  }
}
