import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/index';

const BEERS_PER_PAGE = 25;

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  public getBeers(params: any): Observable<any> {

    const optionParams = new HttpParams({ fromObject : params });
    return this.http.get('https://api.punkapi.com/v2/beers', {params: optionParams});
  }

  public getBeerById(id): Observable<any> {
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`);
  }
}
