import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';
import {CarService} from './car.service';





@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'cars',
          component: CarsComponent
        }
      ]
    )
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
