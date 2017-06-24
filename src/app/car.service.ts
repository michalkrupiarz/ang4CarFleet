import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Car} from './car';
//import {CARS} from './mock-car';

@Injectable()
export class CarService {

  private carsUrl = 'api/cars';  // URL to web api
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http: Http){}

  update(car:Car):Promise<Car>{
    const url = '${this.carsUrl}/${car.id}';
    return this.http
    .put(url, JSON.stringify(car),{headers:this.headers})
    .toPromise()
    .then(()=>car)
    .catch(this.handleError);
  }

  create(name:string,registration:string):Promise<Car>{
    return this.http
    .post(this.carsUrl, JSON.stringify({name:name,registration:registration}),  {headers:this.headers})
    .toPromise()
    .then(res=>res.json().data as Car)
    .catch(this.handleError);
  }

  getCars():Promise<Car[]>{
    return this.http.get(this.carsUrl)
    .toPromise()
    .then(response=>response.json().data as Car[])
    .catch(this.handleError);
  }

  private handleError(error: any):Promise<any>{
    console.error('An error occurred ',error);
    return Promise.reject(error.message || error);
  }

  getCar(id:number):Promise<Car>{
    const url = '${this.carsUrl}/${car.id}';
    console.log(url, 'this is url');
    return this.http.get(url)
    .toPromise()
    .then(response=>response.json().data as Car)
    .catch(this.handleError);
  }

}
