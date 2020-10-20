import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servico1Service {

valor: number = parseInt( localStorage.getItem("valor"));

getAlgo()
{
console.log(this.valor == NaN);


	this.valor =  this.valor ? this.valor : 0;

	this.valor ++;

  localStorage.setItem('valor', this.valor.toString());
  return "retorno_Servico1_GetAlgo()" + this.valor;
}

  constructor() { }
}
