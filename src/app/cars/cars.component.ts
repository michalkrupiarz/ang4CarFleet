import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Car} from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'my-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService]
})
export class CarsComponent implements OnInit {
  cars:Car[];
  title = 'First try with cars!';
  selectedCar:Car;

  constructor(private carService:CarService,private router:Router){   }

  getCars(): void {
   this.carService.getCars().then(cars => this.cars = cars);
  }

  add(name:string,registration:string): void {

    console.log(name);
    name = name.trim();
    registration = registration.trim();

    if (!name || !registration){return};
    this.carService.create(name,registration)
    .then(car=>{
      this.cars.push(car);
      this.selectedCar = null;
    })
  }

  ngOnInit(): void {
   this.getCars();
  }

  onSelect(car: Car): void {
   this.selectedCar = car;
  }

  gotoDetail():void{
    console.log(this.selectedCar.id);
    this.router.navigate(['/detail',this.selectedCar.id]);
  }


}
