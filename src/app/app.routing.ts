
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { ErrorComponent } from "./components/error/error.component";

import { NgModule } from '@angular/core';
import { dashboardRoutes } from './components/dashboard/dashboard.routes';


const appRoutes: Routes = [
    {
        path:'',
        component:DashboardComponent,
        children: dashboardRoutes
    },
    {path:'**',component:ErrorComponent} //pagina de error 
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }

