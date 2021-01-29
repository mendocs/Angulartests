import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements OnInit {

	@Input('ratio') parallaxRatio : number = 1
	@Input('BackGround') parallaxBackGround : boolean = false;
	@Input('BackGroundVerticalPosition') parallaxBackGroundVerticalPosition : number = 0;
	@Input('BackGroundImageHeigth') parallaxBackGroundImageHeigth : number = 0;

	initialTop : number = 0;
	initialposition : string[] ;
	initialleft : number;
	AlturaImagem : number = 500;

	constructor(private eleRef : ElementRef) {
	  //this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top

	  //this.initialposition = this.eleRef.nativeElement.style.backgroundPosition.split(" ");
	  //this.initialTop = parseInt(this.initialposition[0]) ;
	  //this.initialleft  = parseInt(this.initialposition[1]) ;



	  //this.eleRef.nativeElement.style.backgroundPosition = "0px " + this.eleRef.nativeElement.parentNode.offsetTop + "px";


		//console.log(this.eleRef.nativeElement.offsetTop);

	}

	ngOnInit(): void {

		this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;


		//console.log(this.eleRef.nativeElement.style.backgroundImage)



		if (this.parallaxBackGround)
		{


			//this.initialposition = this.eleRef.nativeElement.style.backgroundPosition.split(" ");





			//this.initialTop = parseInt(this.initialposition[0]) ;
			//this.initialleft  = parseInt(this.initialposition[1]) ;



			//this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
			//console.log(this.initialTop)
			//console.log(this.eleRef.nativeElement.style.top);

		}



	  }


	@HostListener("window:scroll", ["$event"])
	onWindowScroll(event){


		const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
		let posicao = this.eleRef.nativeElement.getBoundingClientRect().top;

		//console.log(this.eleRef.nativeElement.getBoundingClientRect().top);

		//console.log(this.eleRef.nativeElement.style.backgroundPosition);

		//console.log(this.parallaxBackGroundImageHeigth);


		if (this.parallaxBackGround){

			if(posicao < vh){


				let diferencaAltura = (this.parallaxBackGroundImageHeigth != 0 ? ((vh- this.parallaxBackGroundImageHeigth)) : 0);


				let alturaCalulada = ((vh - posicao  ) * this.parallaxRatio) + diferencaAltura - 100;
				//console.log(alturaCalulada);



				//console.log(vh - posicao)
				//console.log(diferencaAltura);

				//console.log(`${this.initialposition[0]}px  ${((vh - posicao ) * this.parallaxRatio)}px`);
				this.eleRef.nativeElement.style.backgroundPosition = `${this.parallaxBackGroundVerticalPosition}%  ${ alturaCalulada }px`

				//this.initialposition[0] +  ((vh - posicao ) * this.parallaxRatio)  + "px";
			}
			else
				this.eleRef.nativeElement.style.backgroundPosition =  `${this.parallaxBackGroundVerticalPosition}% 100%`;
		}
		else{

			this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'

			//console.log(  ` hi  ${(posicao )}   ${(this.eleRef.nativeElement.style.top)} `);
			/*
			this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY )) + 'px'
			*/
			if(posicao < vh)
			{
				//console.log(  ` hi  ${(posicao )}   ${(this.eleRef.nativeElement.style.top)} `);
				//this.eleRef.nativeElement.style.position = "fixed"


				//this.eleRef.nativeElement.style.top = posicao * this.parallaxRatio + 'px'
			}
			/*
			else
			{this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY )) + 'px'}


			console.log(  ` hi  ${(posicao )}   ${(vh)} `);
			//console.log(  ` hi  ${(posicao < vh)}   ${this.initialTop}   ${window.scrollY}  ${(window.scrollY * this.parallaxRatio)}  ${this.eleRef.nativeElement.style.top}  `);
			*/

		}
/*

		if (window.scrollY > 1543){
	 // if (document.body.scrollTop > posicao || document.documentElement.scrollTop > posicao) {
			  this.eleRef.nativeElement.style.backgroundPosition = "0px " + (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';

			  this.eleRef.nativeElement.style.backgroundPosition = "0px " + this.initialTop + 'px';


		}
		*/
	}

}
