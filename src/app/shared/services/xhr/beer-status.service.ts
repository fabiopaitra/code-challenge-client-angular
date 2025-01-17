import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer, BeerName, Xhr } from 'src/app/modules/beer-status/beer-status.types';
import { BeerModel } from '../../model/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerStatusService {
  _beers: Beer[] = [
    new BeerModel(BeerName.PILSNER, 4, 6),
    new BeerModel(BeerName.IPA, 5, 6),
    new BeerModel(BeerName.LAGER, 4, 7),
    new BeerModel(BeerName.STOUT, 6, 8),
    new BeerModel(BeerName.WHEAT_BEER, 3, 5),
    new BeerModel(BeerName.PALE_ALE, 4, 6)
  ]

  getTemperatures(): Observable<Beer[]> {
    return this.http.post<Beer[]>(Xhr.URL_TEMPERATURE_API, this._beers)
  }

  getBeers(): Beer[] {
    return this._beers
  }

  constructor(private http: HttpClient) {

  }
}
