import { BeerProps, BeerName, Beer } from '../modules/beer-status/beer-status.types'

export const RES_BEER_TEMPERATURES = [
  {
    "id": 1,
    "temperature": 3
  },
  {
    "id": 2,
    "temperature": -2
  },
  {
    "id": 3,
    "temperature": 5
  },
  {
    "id": 4,
    "temperature": 4
  },
  {
    "id": 5,
    "temperature": 1
  },
  {
    "id": 6,
    "temperature": 9
  }
]



export const BEERS_PROPS: BeerProps[] = [
  {
    "id": 1,
    "name": BeerName.PILSNER,
    "minimumTemperature": 4,
    "maximumTemperature": 5,
  },
  {
    "id": 2,
    "name": BeerName.IPA,
    "minimumTemperature": 5,
    "maximumTemperature": 6,
  },
  {
    "id": 3,
    "name": BeerName.LAGER,
    "minimumTemperature": 4,
    "maximumTemperature": 7,
  },
  {
    "id": 4,
    "name": BeerName.STOUT,
    "minimumTemperature": 6,
    "maximumTemperature": 8,
  },
  {
    "id": 5,
    "name": BeerName.WHEAT_BEER,
    "minimumTemperature": 3,
    "maximumTemperature": 5,
  },
  {
    "id": 6,
    "name": BeerName.PALE_ALE,
    "minimumTemperature": 4,
    "maximumTemperature": 6,
  }
]




export const BEERS: Beer[] = [
  {
    "id": 1,
    "name": BeerName.PILSNER,
    "minimumTemperature": 4,
    "maximumTemperature": 5,
    "temperature": 3
  },
  {
    "id": 2,
    "name": BeerName.IPA,
    "minimumTemperature": 5,
    "maximumTemperature": 6,
    "temperature": -2
  },
  {
    "id": 3,
    "name": BeerName.LAGER,
    "minimumTemperature": 4,
    "maximumTemperature": 7,
    "temperature": 5
  },
  {
    "id": 4,
    "name": BeerName.STOUT,
    "minimumTemperature": 6,
    "maximumTemperature": 8,
    "temperature": 4
  },
  {
    "id": 5,
    "name": BeerName.WHEAT_BEER,
    "minimumTemperature": 3,
    "maximumTemperature": 5,
    "temperature": 1
  },
  {
    "id": 6,
    "name": BeerName.PALE_ALE,
    "minimumTemperature": 4,
    "maximumTemperature": 6,
    "temperature": 9
  }
]



