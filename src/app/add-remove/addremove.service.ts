import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddremoveService {

  public removedor$: Subject<any> = new Subject<string>();

  constructor() { }

  SetMensagemObjetoObservavel (valor:any)
  {
    this.removedor$.next(valor);
  }  


}
