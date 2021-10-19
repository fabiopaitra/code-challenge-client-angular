import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Beer, temperatureStatus } from './beer-status.types';
import { BeerStatusService } from '../../shared/services/xhr/beer-status.service';

@Component({
  selector: 'app-beer-status',
  templateUrl: './beer-status.component.html',
  styleUrls: ['./beer-status.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BeerStatusComponent implements OnInit {
  title = 'code-challenge';
  beers = this.beerStatusService.getBeers();

  constructor(private beerStatusService: BeerStatusService) { }

  ngOnInit(): void {
    this.reqTemperatures()
    this.refreshTemperature(5000);
  }

  reqTemperatures(): void {
      this.beerStatusService.getTemperatures().subscribe(data => this.beers = data)
  }

  refreshTemperature(miliSecs: number) {
    setInterval(() => {
      this.reqTemperatures()
    }, miliSecs)
  }

  checkTemp(beer: Beer): temperatureStatus {
    if (beer.temperature < beer.minimumTemperature) {

      return temperatureStatus.TOO_LOW
    }
    if (beer.temperature > beer.maximumTemperature) {
      return temperatureStatus.TOO_HIGH
    }
    return temperatureStatus.ALL_GOOD
  }
}