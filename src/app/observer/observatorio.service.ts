import { Injectable, PipeTransform } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {from, of} from 'rxjs';
import { switchMap , map, debounceTime, take} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservatorioService {

  public valordisparadoRegistrado:string="";

  public ObjetoObservavel: Subject<string> = new Subject<string>();

//http://httpbin.org/get
//http://httpbin.org/ip

  public ObjetoObservavelValoresSwitch: Observable<string> = new Observable<string>();
  //public ObjetoObservavelValoresSwitch: Observable<string[]> = new Observable<string[]>();
  //public ObjetoObservavelValores: Observable<number> = new Observable<number>();
  public ObjetoObservavelValores: Observable<string> = new Observable<string>();
  //public ObjetoObservavelValores: Observable<string[]> = new Observable<string[]>();

 // private valores: string[] =  ["valor1","valor2","valor3","valor4"];


  putconsole(x:string)
  {
	  console.log("switchMap" +  x);
	  //return  x;
	  //return  [x];
	  return  of(x + "switchMap");
  }


  GetHttpIP () : Observable<{}>
  {
     return this.http.get("https://httpbin.org/ip");
     //return this.http.get("https://localhost:5001/v1/products");

  }


  GetHttpApiRest () : Observable<{}>
  {

	 return this.http.get("api/v1/products/2");

	 //return this.http.get("https://localhost:5001/v1/products/2");



  }


  GetHttpURL()
  {

	return this.GetHttpIP().pipe(switchMap (x => this.http.get("https://httpbin.org/get")));
  }


  constructor(private http: HttpClient) {

	this.ObjetoObservavelValores = of("10_", "20_","5656").pipe(take(2));
	this.ObjetoObservavelValoresSwitch = this.ObjetoObservavelValores.pipe(
		map((x) => x),
		//debounceTime(10),
		//switchMap((x) => this.putconsole(x))
		switchMap((x) => this.putconsole(x))
		);
	//this.ObjetoObservavelValores = this.ObjetoObservavelValoresSwitch;


	//this.ObjetoObservavelValores = of("10_", "20_","5656");
/*
	this.ObjetoObservavelValores = of (1, 2).pipe
	(map(res=> res + 5)
	,switchMap(res=> typeof(0))//this.putconsole(res) )
	) ;
*/

  }



  SetMensagemObjetoObservavel (valor:string)
  {
	this.ObjetoObservavel.next(valor);

    this.valordisparadoRegistrado = valor;
  }
}
