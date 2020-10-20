import { Component, OnInit } from '@angular/core';
import {ObservatorioService} from '../observatorio.service';

@Component({
  selector: 'app-disparador2',
  templateUrl: './disparador2.component.html',
  styleUrls: ['./disparador2.component.scss']
})
export class Disparador2Component implements OnInit {

  valordisparadoRegistradoServico:string

  constructor(private ObservatorioServiceObj: ObservatorioService) { }

  ngOnInit(): void {
    this.valordisparadoRegistradoServico = this.ObservatorioServiceObj.valordisparadoRegistrado;
    this.ObservatorioServiceObj.SetMensagemObjetoObservavel("valorDisparado_disparador2");
    
  }

}
