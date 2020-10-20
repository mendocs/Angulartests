import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2 ,ElementRef } from '@angular/core';


@Directive({
  selector: '[appCondicaoFalsa]'
})
export class CondicaoFalsaDirective {

	private hasView = false;
	domElement: any

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private renderer: Renderer2,
		private elementRef: ElementRef) {

			//this.elementRef.nativeElement.style.backgroundColor = 'yellow';

		}


		@Input() set appCondicaoFalsa(condition: boolean) {
			console.log(condition);

			if (!condition && !this.hasView) {



				//this.elementRef.nativeElement = 'testet',




				//this.renderer.setStyle(this.templateRef.elementRef.nativeElement.previusElementSibling,'background-color','yellow')

				//this.templateRef.elementRef.nativeElement.previusSibling.style.backgroundColor = 'yellow';

				//console.log(this.templateRef.elementRef. ['nativeElement']);




				this.viewContainer.createEmbeddedView(this.templateRef);





				this.hasView = true;



			  } else if (condition && this.hasView) {
				this.viewContainer.clear();
				this.hasView = false;
			  }
			  /*
			if (!condition) // && !this.hasView)
			{
				this.viewContainer.createEmbeddedView(this.templateRef);
			  	this.hasView = true;
			} else if (condition) // && this.hasView)
			{
				this.viewContainer.clear();
				//this.viewContainer.createEmbeddedView(this.templateRef);
				//this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');

			  this.hasView = false;
			}*/
		  }


}
