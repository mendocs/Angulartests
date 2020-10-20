import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Modulo1Filho1CanLoadServiceService implements CanLoad {
  constructor( private router: Router) {
  }
  canLoad(route: Route): boolean {
    console.log("passou canload");
    return true;		
  }
  
}
