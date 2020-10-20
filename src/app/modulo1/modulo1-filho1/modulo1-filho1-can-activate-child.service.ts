import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Modulo1Filho1CanActivateChildService  implements CanActivateChild{

  constructor( private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    
    if (route.params["variavalParametro"] == 4)
      return true;
      else
      {
        return false;
      }
  }
}
