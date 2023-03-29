import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { CarsComponent } from './cars/cars.component';
import { TrucksComponent } from './trucks/trucks.component';
import { GeneratorsComponent } from './generators/generators.component';
import { FridgeComponent } from './fridge/fridge.component';
import { AlertsComponent } from './alerts/alerts.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ComingsoonComponent,
    CarsComponent,
    TrucksComponent,
    GeneratorsComponent,
    FridgeComponent,
    AlertsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
