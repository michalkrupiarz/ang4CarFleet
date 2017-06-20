import { Component } from '@angular/core';
import {Car} from './car';



const CARS:Car[] = [
  {id:1,name:'Ford Mustang', registration:'FM11'},
  {id:2,name:'Dodge Charger', registration:'DC22'},
  {id:3,name:'Ford F150', registration:'FF33'},
  {id:4,name:'Plymouth Cuda', registration:'PC44'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First try with cars!';
  cars = CARS;
  selectedCar:Car;

  onSelect(car:Car):void {
    this.selectedCar = car;
  }

}
