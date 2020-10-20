import { Component, OnInit, OnDestroy } from '@angular/core';
import {ObservatorioService} from '../observatorio.service';
import { Subscription, Subject, Observable } from 'rxjs';
import {from, of} from 'rxjs';
import { switchMap , map, take} from 'rxjs/operators';
import { HtmlIp } from '../html-ip';

@Component({
  selector: 'app-observador1',
  templateUrl: './observador1.component.html',
  styleUrls: ['./observador1.component.scss']
})
export class Observador1Component implements OnInit, OnDestroy {
  private subscription : Subscription;

  valorObservado:string="";

  valorObservadoSwitch:string="";

  valorObservadoIP:String="";
  valorObservadoURL:String="";
// LocalObjetoObservavel$ : Observable<number>;
 //LocalObjetoObservavel$ : Observable<string[]>;
  LocalObjetoObservavel$ : Observable<string>;
  LocalObjetoObservaveSwitchl$ : Observable<string>;


  employees$: Observable<string>;
  private searchText$ = new Subject<string>();

 ServicoObjetoObservavel = this.ObservatorioServiceObj.ObjetoObservavel;



  constructor(private ObservatorioServiceObj: ObservatorioService) { }



  ngOnInit(): void {



    this.subscription = this.ObservatorioServiceObj.ObjetoObservavel.subscribe(valor => this.valorObservado = valor);

	//this.LocalObjetoObservavel$  = this.ObservatorioServiceObj.ObjetoObservavel;


	console.log("passou1");
	this.LocalObjetoObservavel$  = this.ObservatorioServiceObj.ObjetoObservavelValores;

	console.log("passou2");
	this.LocalObjetoObservaveSwitchl$ = this.ObservatorioServiceObj.ObjetoObservavelValoresSwitch;

	console.log("passou3");
	this.LocalObjetoObservaveSwitchl$.pipe(take(1)).subscribe(valor => this.valorObservadoSwitch += "-yyy" + valor);

	console.log("passou4");
	this.LocalObjetoObservavel$.subscribe(valor => this.valorObservado += "-" + valor);

	const myObserverIP = {
		next: (valor : HtmlIp) => this.valorObservadoIP = valor.origin, //valor.ip,
		//next: valor  => {console.log(valor); this.valorObservadoIP = String(valor["ip"])}, //valor.ip,
		error: err => this.valorObservadoIP = err,
		complete: () => console.log('Completo myObserverIP'),
	  };


	  const myObserverURL = {
		next: (valor : HtmlIp) => this.valorObservadoURL = valor.url, //valor.ip,
		//next: valor  => {console.log(valor); this.valorObservadoIP = String(valor["ip"])}, //valor.ip,
		error: err => this.valorObservadoIP = err,
		complete: () => console.log('Completo myObserverIP'),
	  };

	this.ObservatorioServiceObj.GetHttpIP().subscribe(myObserverIP);

	this.ObservatorioServiceObj.GetHttpURL().subscribe(myObserverURL);



	//this.LocalObjetoObservavel$.subscribe();




	this.employees$ = this.searchText$.pipe(
		map(employeeName => { console.log(employeeName);
			this.valorObservado = employeeName; return "dsfds";}));

	this.searchText$.next("employeeName");

  }

  ngOnDestroy() : void{
    this.subscription.unsubscribe();
    console.log("Observador1Component_ngOnDestroy");
  }
}
