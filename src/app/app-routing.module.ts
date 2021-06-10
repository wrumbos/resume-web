import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';
import { EmploymentListComponent } from './components/employment-list/employment-list.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'employment', component: EmploymentListComponent, canActivate: [AuthGuard] },
  { path: 'employment/:id', component: EmploymentDetailsComponent, canActivate: [AuthGuard] },
  { path: 'createEmployment', component: AddEmploymentComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
