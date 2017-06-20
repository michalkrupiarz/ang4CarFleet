import { Injectable } from '@angular/core';
import {Car} from './car';
import {CARS} from './mock-car';

@Injectable()
export class CarService {
  getCars():Promise<Car[]>{
    return Promise.resolve(CARS);
  };

}
