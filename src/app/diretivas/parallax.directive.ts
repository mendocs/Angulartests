import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

	@Input('ratio') parallaxRatio : number = 1

	initialTop : number = 0;
	initialposition : string[] ;
	initialleft : number;



	constructor(private eleRef : ElementRef) {
	  //this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top

	  //this.initialposition = this.eleRef.nativeElement.style.backgroundPosition.split(" ");
	  //this.initialTop = parseInt(this.initialposition[0]) ;
	  //this.initialleft  = parseInt(this.initialposition[1]) ;

		console.log(this.eleRef.nativeElement.style.backgroundPosition);

	}

	@HostListener("window:scroll", ["$event"])
	onWindowScroll(event){
	  //this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'

	  //console.log(this.eleRef.nativeElement.style.backgroundPosition);

	  this.eleRef.nativeElement.style.backgroundPosition = "0px " + (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
	}

}
