import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';



import {CarService} from '../car.service';
import {Car} from '../car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit{

  @Input() car: Car;


  constructor (
    private carService:CarService,
    private route:ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.carService.getCar(+params['id']))
      .subscribe(car => this.car = car);
  }

  goBack():void {
    this.location.back();
  }

}
