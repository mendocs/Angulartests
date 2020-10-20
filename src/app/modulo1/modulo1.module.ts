import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo1Component } from '../modulo1/modulo1.component';
import { Modulo1RoutingModule } from '../modulo1/modulo1-routing.module';
import { Servico1Service } from '../modulo1/servico1.service';
import { Modulo1Filho1Component } from './modulo1-filho1/modulo1-filho1.component';
import {Modulo1Filho1deactivateServiceService} from './modulo1-filho1/modulo1-filho1deactivate-service.service'
import {Modulo1Filho1CanLoadServiceService} from './modulo1-filho1/modulo1-filho1-can-load-service.service'
import {Modulo1Filho1CanActivateChildService} from './modulo1-filho1/modulo1-filho1-can-activate-child.service';
import { Modulo1Filho1DetalheComponent } from './modulo1-filho1/modulo1-filho1-detalhe/modulo1-filho1-detalhe.component'



@NgModule({
  declarations: [Modulo1Component, Modulo1Filho1Component, Modulo1Filho1DetalheComponent],
  imports: [
    CommonModule,
    Modulo1RoutingModule
  ],
  providers:[Servico1Service,Modulo1Filho1deactivateServiceService,Modulo1Filho1CanLoadServiceService,Modulo1Filho1CanActivateChildService]
})
export class Modulo1Module { }
