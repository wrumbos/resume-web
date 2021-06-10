import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { authInterceptorProviders } from './utils/auth.interceptor';
import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';
import { EmploymentListComponent } from './components/employment-list/employment-list.component';
import { PhotoComponent } from './components/photo/photo.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddEmploymentComponent,
    EmploymentDetailsComponent,
    EmploymentListComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
