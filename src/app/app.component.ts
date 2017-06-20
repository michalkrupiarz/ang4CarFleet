import { Component} from '@angular/core';
import {Car} from './car';
import {CarService} from './car.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  providers: [CarService]
})
export class AppComponent  {
  title = "This is component from app component "

}
