import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Modulo1Filho1CanActivateService implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    console.log("passou canactivate");
    return true;		
  }
}
