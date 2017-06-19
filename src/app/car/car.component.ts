import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id:  number;
  carName: String;
  carRegistration: String;
    constructor() { }

  ngOnInit() {}

  getAllCars(){
    console.log('getAllCars method fired');
  }

}
