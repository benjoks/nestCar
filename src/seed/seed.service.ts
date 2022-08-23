import { Injectable } from '@nestjs/common';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService:CarsService,
  ){}

  populateDB(){

    this.carsService.fillCarsWithSeedData( CARS_SEED);

  }
}
