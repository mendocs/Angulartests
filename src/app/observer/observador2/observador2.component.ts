import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {ObservatorioService} from '../observatorio.service';

@Component({
  selector: 'app-observador2',
  templateUrl: './observador2.component.html',
  styleUrls: ['./observador2.component.scss']
})
export class Observador2Component implements OnInit {

  valorObservado:string;

  constructor(private ObservatorioServiceObj: ObservatorioService) { }

  ngOnInit(): void {
    this.ObservatorioServiceObj.ObjetoObservavel
    .pipe(take(1))
    .subscribe(valor => this.valorObservado = valor);
  }

}
