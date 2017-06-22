import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './car.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CarDetailsComponent,
    CarsComponent,
    DashboardComponent
  ],

  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
