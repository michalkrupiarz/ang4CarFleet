import { Component } from '@angular/core';

export class Car {
  id: number;
  name: String;
  registration: String;
}

@Component({
  selector: 'app-root',
  template: ' <h1>{{title}}</h1><h2>details!</h2><div><label>id: </label>{{car.id}}</div><div><label>name: </label><input [(ngModel)]="car.name" placeholder = "Car Name"/>{{car.name}}</div><div><label>registration: </label> {{car.registration}}</div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First try with cars!';
  car:Car = {
    id : 1,
    name : 'Ford Mustang',
    registration : 'AXN 1212'
  }
}
