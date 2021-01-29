import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appFade]'
})
export class FadeDirective implements OnInit {


	//posicao : number;
	_eleRef : ElementRef;


    ngOnInit():any {
		let posicao = this._eleRef.nativeElement.offsetTop;// + 50 ;

		console.log(posicao);

		this._eleRef.nativeElement.hidden = true;

		let __eleRef = this._eleRef;

		function onLeftDateClick() {
			if (document.body.scrollTop > posicao || document.documentElement.scrollTop > posicao) {

				__eleRef.nativeElement.hidden = false;
				__eleRef.nativeElement.classList.add("fadeInRight");
				__eleRef.nativeElement.classList.add("animated");

			  }
		}

		window.addEventListener('scroll', onLeftDateClick, false);
    }

	constructor(private eleRef : ElementRef) {

		this._eleRef = this.eleRef;

	}
}


