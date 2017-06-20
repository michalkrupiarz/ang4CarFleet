import { Component,OnInit } from '@angular/core';
import {Car} from './car';
import {CarService} from './car.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  providers: [CarService]
})
export class AppComponent implements OnInit {
  cars:Car[];
  title = 'First try with cars!';
  selectedCar:Car;

  constructor(private carService:CarService){   }

  getCars(): void {
   this.carService.getCars().then(cars => this.cars = cars);
 }

 ngOnInit(): void {
   this.getCars();
 }

 onSelect(car: Car): void {
   this.selectedCar = car;
 }

}
