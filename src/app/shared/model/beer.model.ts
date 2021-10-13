import { Beer, BeerKeys, BeerName } from 'src/app/modules/beer-status/beer-status.types';

export class BeerModel {
  static lastId = -1;
  [BeerKeys.ID]: Beer[BeerKeys.ID];
  [BeerKeys.TEMPERATURE]: Beer[BeerKeys.TEMPERATURE];
  error = `${this.name} - Maximum temperature is lower than minimum temperature.`


  constructor(
    public name: BeerName,
    public minimumTemperature: Beer[BeerKeys.MINIMUM_TEMPERATURE],
    public maximumTemperature: Beer[BeerKeys.MAXIMUM_TEMPERATURE],
  ) {
    this.id = ++BeerModel.lastId;
    
    if (this.minimumTemperature > this.maximumTemperature) {
      throw new Error(this.error);
    }
  }
}