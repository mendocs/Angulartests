import { Component, OnInit } from '@angular/core';
import { Servico1Service } from '../modulo1/servico1.service';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.scss']
})
export class Modulo1Component implements OnInit {

  servicoAtual: string = "";
  
  isCorVermelho()
  {
    return true;
  }

  constructor(
    private servico1Service: Servico1Service
  ) {   }

  ngOnInit(): void {
    this.servicoAtual = this.servico1Service.getAlgo();
  }

}
