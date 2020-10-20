import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Modulo1Component } from '../modulo1/modulo1.component';
import { Modulo1Filho1Component } from '../modulo1/modulo1-filho1/modulo1-filho1.component';
import {Modulo1Filho1deactivateServiceService} from './modulo1-filho1/modulo1-filho1deactivate-service.service'
import {Modulo1Filho1CanActivateService} from './modulo1-filho1/modulo1-filho1-can-activate.service'
import {Modulo1Filho1CanActivateChildService} from './modulo1-filho1/modulo1-filho1-can-activate-child.service'
import {Modulo1Filho1DetalheComponent} from './modulo1-filho1/modulo1-filho1-detalhe/modulo1-filho1-detalhe.component'


const routes: Routes = [

{path: "", component :Modulo1Component },
{path: "filho1", component :Modulo1Filho1Component , 
    canDeactivate: [Modulo1Filho1deactivateServiceService] 
    ,canActivate : [Modulo1Filho1CanActivateService] 
    ,canActivateChild: [Modulo1Filho1CanActivateChildService] 
    ,children : [{path: ":variavalParametro", component :Modulo1Filho1DetalheComponent}]
  }

];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule { }
