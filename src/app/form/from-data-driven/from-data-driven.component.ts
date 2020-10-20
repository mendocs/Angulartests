import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {BaseFormComponent } from '../base-form.component';
import {DataService} from '../../db/data.service';
import { Pais } from '../../db/pais';
import { Cidade } from '../../db/cidade';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-from-data-driven',
  templateUrl: './from-data-driven.component.html',
  styleUrls: ['./from-data-driven.component.scss']
})
export class FromDataDrivenComponent extends BaseFormComponent implements OnInit {

  paises: Pais[];
  cidades: Cidade[];
  paisSelecionado : Pais = new Pais(0,'Brasil') ;

  constructor(private dataService1: DataService, private http: HttpClient , private fb: FormBuilder) { super();
	this.paises = this.dataService1.getPaises();
}

  ngOnInit(): void {




	this.formulario =
		new FormGroup (
			{
				nomeControle : new FormControl('valorInicial',[Validators.required]),
				nome:  new FormControl( 'nome', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
				chkConfirma:  new FormControl(),
				paisControle : new FormControl(),
				ControleCheck: new FormControl()
			}
			)



			this.formulario.get('paisControle').valueChanges
			.pipe(
				//switchMap((id :number)=> this.dataService1.getCidadeshttp(id))
				//switchMap((id :number)=> this.mapCidades(id))
				switchMap((id :number)=> of( this.dataService1.getCidades().filter((item)=> item.idPais == id)))
				)
			.subscribe(cidades => this.cidades = cidades);

  }

  isControlePistine() : boolean
  {
	return this.formulario.controls["nomeControle"].pristine;
  }


  onSubmit(): void {


    let valueSubmit = Object.assign({}, this.formulario.value);

	/*
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });
*/

/*
this.formulario = this.fb.group({
	useremail: this.fb.array([])
  });

  const emailFormArray = <FormArray>this.formulario.controls.useremail;

  emailFormArray.push(new FormControl("email3"));

  this.formulario.addControl('',new FormControl("email"));
  this.formulario.addControl("email1",new FormControl());
  */

    this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            // this.formulario.reset();
            // this.resetar();
          },
          (error: any) => alert('erro')
        );


}

submit(): void {
	//console.log(Object.assign({}, this.formulario.value));
	alert("eu" + this.formulario.controls["nomeControle"].value);
}

onSelect(id) {
    this.cidades = this.dataService1.getCidades().filter((item)=> item.idPais == id);
  }



  mapCidades(idEstado: number): Observable < Cidade[] >
  {
	return  of( this.dataService1.getCidades().filter((item)=> item.idPais == idEstado));
  }


  getProducts(): Observable < Cidade[] > {
   let  _cidades = [new Cidade(1, 1, 'São Paulo0' ), new Cidade(1, 1, 'São Paulo1' )];
    return of(_cidades);
  }


}
