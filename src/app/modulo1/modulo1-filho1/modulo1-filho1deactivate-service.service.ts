import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Modulo1Filho1Component } from './modulo1-filho1.component';

@Injectable({
  providedIn: 'root'
})
export class Modulo1Filho1deactivateServiceService implements CanDeactivate<Modulo1Filho1Component> {

  canDeactivate(
    component: Modulo1Filho1Component,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(route)
    //return window.confirm("Tem certeza que deseja sair dessa página?");
    return component.deixaSair;
  }
}
