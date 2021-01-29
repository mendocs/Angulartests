import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRemoveComponent } from './add-remove/add-remove.component'
import { PrimeiroComponent } from './primeiro/primeiro.component'
import { AnimateComponent } from './animate/animate.component'
import { HomeComponent } from './home/home.component'
import {Modulo1Filho1CanLoadServiceService} from './modulo1/modulo1-filho1/modulo1-filho1-can-load-service.service'
import {ObserverComponent} from './observer/observer.component'
import { Disparador2Component } from './observer/disparador2/disparador2.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { BootComponent } from './boot/boot.component'

const routes: Routes = [
  {path: 'diretivas', component :DiretivasComponent} ,
  {path: 'add', component :AddRemoveComponent} ,
  {path: 'primeiro', component :PrimeiroComponent} ,
  {path: 'animate', component :AnimateComponent} ,
  {path: 'observer', component :ObserverComponent} ,
  {path: 'boot', component :BootComponent} ,
  {path: 'disparador2', component :Disparador2Component} ,
  {path: 'modulo1', loadChildren: './modulo1/modulo1.module#Modulo1Module', canLoad : [Modulo1Filho1CanLoadServiceService] },
  {path: 'forms', loadChildren: './form/form.module#FormModule' },
  {path: '', component: HomeComponent} ,

  { path: 'filho1teste2', component: PrimeiroComponent,
    children: [
      { path: 'overview/:id', component: HomeComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
