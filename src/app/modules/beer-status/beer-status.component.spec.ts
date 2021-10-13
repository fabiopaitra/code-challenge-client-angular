import { HttpClientModule } from '@angular/common/http';
import { tick, fakeAsync, ComponentFixture, TestBed, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BeerStatusService } from 'src/app/shared/services/xhr/beer-status.service';

import { BeerStatusComponent } from './beer-status.component';
import { Beer, BeerName, temperatureStatus } from './beer-status.types';

import * as apiMocks from 'src/app/shared/api-mocks-beers'
import { of } from 'rxjs';
import { BeerModel } from 'src/app/shared/model/beer.model';

describe('BeerStatusComponent', () => {
  let component: BeerStatusComponent;
  let fixture: ComponentFixture<BeerStatusComponent>;
  let service: BeerStatusService;
  let httpClientSpy: { get: jasmine.Spy }


  afterEach(() => {
    BeerModel.lastId = 0
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerStatusComponent],
      imports: [HttpClientModule],
      providers: [BeerStatusService],
    })


    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(BeerStatusService);
    fixture = TestBed.createComponent(BeerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Pilsner', () => {
    let de = fixture.debugElement.queryAll(By.css('.beer-name'))
    let beerName = BeerName.PILSNER // Changer the beer name in case we have no more Pilsner
    let gotBeer: BeerName | Error

    de.forEach(el => {
      let beerEl = el.nativeElement.innerHTML
      if (beerName === beerEl) {
        gotBeer = beerEl
      }
    })
    gotBeer ??= new Error(`Don\'t you have ${beerName} anymore? Add ${beerName} or try a different one`)

    expect(gotBeer).toContain(beerName)
  })

  it('should render temperature', () => {
    component.beers = apiMocks.BEERS
    fixture.detectChanges()

    let de = fixture.debugElement.query(By.css('.beer-temperature'))
    let el: HTMLElement = de.nativeElement

    expect(el.innerHTML).toBeTruthy()
  })


  it('should render Temperature Notification according to checkTemp()', () => {
    const onInit = spyOn(component, 'ngOnInit').and.callThrough()
    component.beers = apiMocks.BEERS
    fixture.detectChanges()
    let de = fixture.debugElement.queryAll(By.css('.beer-temperature'))
    const beerTooLow: HTMLElement = de[0].nativeElement
    const beerAllGood: HTMLElement = de[2].nativeElement
    const beerTooHigh: HTMLElement = de[5].nativeElement

    component.ngOnInit()

    expect(beerTooLow).toHaveClass(temperatureStatus.TOO_LOW)
    expect(beerAllGood).toHaveClass(temperatureStatus.ALL_GOOD)
    expect(beerTooHigh).toHaveClass(temperatureStatus.TOO_HIGH)
    expect(onInit).toHaveBeenCalled()
  })

  it('should define BEERS ARRAY with temperatures based on id', fakeAsync(() => {
    const beers: Beer[] = component.beers
    
    spyOn(service, 'getTemperatures').and.returnValue(of(apiMocks.RES_BEER_TEMPERATURES[0]))
    
    component.reqTemperatures();
    tick()
    fixture.detectChanges()

    expect(component.beers).toEqual(beers)
  }))

  it('should update the beer temperatures every 5 secs', fakeAsync(() => {
    let beers = apiMocks.BEERS
    spyOn(service, 'getTemperatures').and.callFake(() => {
      return of(apiMocks.RES_BEER_TEMPERATURES[0])
    })
    spyOn(component, 'refreshTemperature').and.callThrough()

    component.reqTemperatures()
    component.refreshTemperature(5000)
    tick(25000)
    fixture.detectChanges()
    discardPeriodicTasks()
    
    expect(beers).not.toBe(component.beers)
    expect(component.refreshTemperature).toHaveBeenCalled()

  }))

});

