import { Injectable } from '@angular/core';
import {Car} from './car';
import {CARS} from './mock-car';

@Injectable()
export class CarService {
  getCars():Promise<Car[]>{
    return Promise.resolve(CARS);
  }
  getCar(id:number):Promise<Car>{
    return this.getCars().then(CARS=>CARS.find(Car => Car.id ===id));
  }

}
