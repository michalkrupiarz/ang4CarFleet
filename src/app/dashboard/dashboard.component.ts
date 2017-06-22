import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
cOd : Car[] = [];
cars: Car[]=[];

constructor (private carService:CarService){}
ngOnInit():void {
    this.carService.getCars().then(cOd=>this.cOd=cOd.slice(0,6));

}

}
