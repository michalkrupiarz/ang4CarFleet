import { Component } from '@angular/core';

export class Car {
  id: number;
  name: String;
  registration: String;
}

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1><h2>{{car.name}} details!</h2>',
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
