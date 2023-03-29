import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AlertComponent } from './alert/alert.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
const routes: Routes = [

  {path:'mainpage',component:MainpageComponent},
  {path:'alert',component: AlertComponent},
  {path:'coming',component:ComingsoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
