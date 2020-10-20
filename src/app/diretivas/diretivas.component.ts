import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

	variavelbase:string;

	variavelArray: Array<string> = new  Array<string> () ; //= [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  verificaCondicao()
  {
	  return this.variavelbase == "base";
  }

  onMudaVariavel(valor:string)
  {
	this.variavelbase = valor;
	this.variavelArray.push(valor);

  }

}
