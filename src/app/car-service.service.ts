import { Injectable } from '@angular/core';
import {DataProviderService} from './data-provider.service';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CarServiceService {
  private allCars = '/getAllCars';
  constructor(private dataService : DataProviderService) { }

  getAllCars(){

  }

}
