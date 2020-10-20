import { Component, OnInit } from '@angular/core';
import {ObservatorioService} from './observatorio.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit {

  _valorDisparado: string="";
  valordisparadoRegistradoServico:string="";
  constructor(private ObservatorioServiceObj: ObservatorioService ) { }

  ngOnInit(): void {
    this.valordisparadoRegistradoServico = this.ObservatorioServiceObj.valordisparadoRegistrado;
  }



  onDisparador(valorDisparado: string)
  {
    console.log("onDisparador");
    this.ObservatorioServiceObj.SetMensagemObjetoObservavel(valorDisparado);
    this._valorDisparado = valorDisparado;

  }

}
