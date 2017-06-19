import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import {CarServiceService} from './car-service.service';
import {DataProviderService} from './data-provider.service';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarServiceService,DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
