import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BeerStatusComponent } from 'src/app/modules/beer-status/beer-status.component';
import { Beer, BeerName } from 'src/app/modules/beer-status/beer-status.types';
import { BeerModel } from '../../model/beer.model';

import { BeerStatusService } from './beer-status.service';

import * as apiMocks from 'src/app/shared/api-mocks-beers'

describe('XhrService', () => {
  let service: BeerStatusService;
  let httpClientSpy: { get: jasmine.Spy }
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerStatusComponent],
      providers: [BeerStatusService],
      imports: [HttpClientModule]
    })

    service = TestBed.inject(BeerStatusService)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have at least 1 beer from getBeers()', () => {
    const expectedBeers = service.getBeers()

    expect(expectedBeers.length).toBeGreaterThan(0)
  });

  it('should return beer temperature from getTemperatures()', (done: DoneFn) => {
    const spy = spyOn(service, 'getTemperatures').and.returnValue(of(apiMocks.BEERS as Beer[]))

    service.getTemperatures().subscribe(
      (beer) => {
        expect(beer).toBe(apiMocks.BEERS)
        done()
      },
      done.fail
    )

    expect(spy.calls.count()).toBe(1, 'one call');
  })
  
  it('should not let create a new beer. Reason: min temp. is higher than max temp. ', () => {
    
    expect(() => new BeerModel(BeerName.PILSNER, 6, 5)).toThrowError()
  })
});