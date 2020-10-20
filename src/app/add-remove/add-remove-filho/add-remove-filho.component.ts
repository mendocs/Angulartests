import { Component, OnInit, Input } from '@angular/core';
import {AddremoveService } from '../addremove.service';

@Component({
  selector: 'app-add-remove-filho',
  templateUrl: './add-remove-filho.component.html',
  styleUrls: ['./add-remove-filho.component.scss']
})
export class AddRemoveFilhoComponent implements OnInit {

  @Input() nomeAddFilho : string = ''

  constructor(private addremoveService: AddremoveService) {  }

  ngOnInit(): void {
    this.nomeAddFilho = this.nomeAddFilho + "texto qualquer";

  }

  onRemover(valor : any)
  {
    this.addremoveService.SetMensagemObjetoObservavel(valor);
  }

}
