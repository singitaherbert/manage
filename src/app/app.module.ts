import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AlertComponent } from './alert/alert.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AlertComponent,
    ComingsoonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'mainpage',component:MainpageComponent},
      {path:'alert',component: AlertComponent},
      {path:'coming',component:ComingsoonComponent},
      {path:'login',component:LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
