import { Component, OnInit, ViewChild, AfterViewInit, HostListener, ViewChildren} from '@angular/core';
import { Subject } from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.scss']
})
export class PrimeiroComponent implements OnInit , AfterViewInit{

	@ViewChild('campovariavael') campovariavaelElement: HTMLElement;

	@ViewChildren('campovariavael') campovariavaelElementList:HTMLElement[];

	@HostListener('window:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		this.observable1_variavel = "observable1_variavel_HostListener ";
	}

   emissor$ = new Subject<string>();



  treste: string = environment.ambiente; //"variavelInterpolada";


  observable1_variavel: string = "observable1_variavel";
  observable2_variavel: string = "observable2_variavel";

  constructor() { }

  ngAfterViewInit()
  {
	//this.campovariavaelElement["nativeElement"].value = "nativeElement";
	//this.campovariavaelElement. .nativeElement.value = "nativeElement";
	  //console.log(this.campovariavaelElement["nativeElement"]["style"]);
	 // console.log(this.campovariavaelElement.innerHTML);
	 this.campovariavaelElement["nativeElement"]["style"]["background"] = "red";

	 this.campovariavaelElement["nativeElement"].style.background = "blue";


	 this.campovariavaelElementList.forEach(function(name){
		console.log (name);
		name["nativeElement"].style.background = "gray";
	  });


	 //console.log(this.campovariavaelElementList[1]["nativeElement"]);
	 //this.campovariavaelElementList["nativeElement"].style.background = "green";

	}

  ngOnInit(): void {



    //this.treste = "variavelInterpolada3";


    const myObserver = {
      next: x => this.observable2_variavel = this.observable2_variavel.concat(x),
      error: err => this.observable2_variavel = "emiteError",
      complete: () => console.log('Observer got a complete notification'),
    };


    this.emissor$.asObservable()
    .pipe(tap(v => console.log("observable1_variavel_passou" + v)))
    .subscribe(novovalor => this.observable1_variavel = this.observable1_variavel.concat(novovalor), err => this.observable1_variavel = "emiteError");

    this.emissor$.asObservable().subscribe(myObserver);

    //this.emissor$.asObservable().subscribe(novovalor => this.observable2_variavel = this.observable2_variavel +  novovalor, err => this.observable2_variavel = "emiteError");

  }

   retString () :string { return "retono funcion";}


  onClickMe() {
    this.treste = 'You are my hero!';
    console.log("passou1");
    this.emissor$.next("__passou_observable");

    this.emissor$.next(this.retString());




    //this.emissor$.complete();
    //this.emissor$.error("passou_observable");
  }



  onClickMe1() {
    this.emissor$.next("__passou_observable2");
  }


}
