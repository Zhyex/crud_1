import { UsersComponent } from '../users/users.component';
import { Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';



export const dashboardRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Users', component:  UsersComponent},
];
