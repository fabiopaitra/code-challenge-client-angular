import { Observable } from 'rxjs'

export enum Xhr {
  URL_TEMPERATURE_API = 'http://localhost:8081/temperature/'
}

export enum BeerKeys {
  ID = 'id',
  NAME = 'name',
  TEMPERATURE = 'temperature',
  MINIMUM_TEMPERATURE = 'minimumTemperature',
  MAXIMUM_TEMPERATURE = 'maximumTemperature',
}

export enum BeerName {
  PILSNER = 'Pilsner',
  IPA = 'IPA',
  LAGER = 'Lager',
  STOUT = 'Stout',
  WHEAT_BEER = 'Wheat beer',
  PALE_ALE = 'Pale Ale'
}

export enum temperatureStatus {
  TOO_HIGH = 'high',
  TOO_LOW = 'low',
  ALL_GOOD = 'good'
}


export interface BeerTemperature {
  [BeerKeys.ID]: number
  [BeerKeys.TEMPERATURE]: number
}

export interface BeerProps {
  [BeerKeys.ID]: number
  [BeerKeys.NAME]: BeerName
  [BeerKeys.MINIMUM_TEMPERATURE]: number
  [BeerKeys.MAXIMUM_TEMPERATURE]: number
  error?: string
}
export type Beer = BeerProps & BeerTemperature
