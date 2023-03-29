import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AlertComponent } from './alert/alert.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AlertComponent,
    ComingsoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
