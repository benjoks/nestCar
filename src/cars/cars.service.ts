import { Injectable, NotFoundException } from '@nestjs/common';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';
import {v4 as uuid} from 'uuid';

import { Car } from './interfaces/car.interfaces';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        
        {
            id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
        
    
    ];

    findAll(){
        return this.cars;
    }

    findOneById( id:string){
        const car = this.cars.find(car => car.id ===  id);

        if ( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);

        return car;
    }

}
