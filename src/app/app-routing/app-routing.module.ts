import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {CarsComponent} from '../cars/cars.component';
import {CarDetailsComponent} from '../car-details/car-details.component';

const routes:Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'detail/:id',
    component: CarDetailsComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
