import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modulo1-filho1',
  templateUrl: './modulo1-filho1.component.html',
  styleUrls: ['./modulo1-filho1.component.scss']
})
export class Modulo1Filho1Component implements OnInit {

  deixaSair: boolean ;

  queryParametros: any = "teste queryParametros";

  Parametros: any = "variavel Parametros";
  variavel_output:string = "";

  constructor(private route: ActivatedRoute, private rota: Router) { }

  MetodoDisparadoVariavelOutput(newItem: string) {
    this.variavel_output = newItem;
  }

  ngOnInit(): void {


    this.route.queryParams
      .subscribe(params => {
        this.queryParametros = params['queryParametro'];});


    if (this.queryParametros == "redirecionar")
    {
      console.log ("redirecionar passou")
    ;  this.rota.navigate(['modulo1']);  }

        this.deixaSair = true;

      
        //nao funciona por não ser a rota que tem o parametro
        this.route.params
        .subscribe(params => {
          this.Parametros = params['variavalParametro']});

    
let rotaAtiva : boolean = this.rota.isActive("modulo1/filho1/1",false);

    this.Parametros = rotaAtiva;

  }


      

}
