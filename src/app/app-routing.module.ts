import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AlertComponent } from './alert/alert.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'alert',component: AlertComponent},
  {path:'comingsoon',component:ComingsoonComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
