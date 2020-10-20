import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modulo1-filho1-detalhe',
  templateUrl: './modulo1-filho1-detalhe.component.html',
  styleUrls: ['./modulo1-filho1-detalhe.component.scss']
})
export class Modulo1Filho1DetalheComponent implements OnInit {

  @Input() variavelnput : boolean ;

 @Output() variavelOutputEvento = new EventEmitter<string>();

  onClickBotaoOutput()
  {
	this.variavelOutputEvento.emit("valorVariavelOutput11");

  }

  constructor(private route: ActivatedRoute) { }

  Parametros: string = " conteuro Parametros";

  ngOnInit(): void {

    this.route.params
    .subscribe(params => {
      this.Parametros = params['variavalParametro']});

      //this.Parametros = this.route.params["variavalParametro"];

  }

}
