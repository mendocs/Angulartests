import { Component, OnInit } from '@angular/core';
import {
  ComponentFactoryResolver, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AddRemoveFilhoComponent} from './add-remove-filho/add-remove-filho.component';
import {AddremoveService } from './addremove.service';


@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.scss']
})
export class AddRemoveComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  // Keep track of list of generated components for removal purposes
  components = [];

  // Expose class so that it can be used in the template
  AddRemoveFilhoComponentClass = AddRemoveFilhoComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private addremoveService: AddremoveService) {
  }

  addComponent(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);

   let component = this.container.createComponent(componentFactory);
   component.instance.nomeAddFilho = "variavel imput nomeAddFilho";

   let currentComponent = component.instance;
   currentComponent.selfRef = currentComponent;
    

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }

  removeComponent(componentClass: Type<any>) {
    // Find the component
    console.log(this.components[0].instance.nomeAddFilho );

    const component = this.components.find((component) => component.instance.nomeAddFilho == "variavel imput nomeAddFilhotexto qualquer");
    const componentIndex = this.components.indexOf(component);


    console.log(componentIndex);
//this.container.remove(componentIndex);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(componentIndex);
      
      //this.components.splice(componentIndex, 1);
    }
  }
  ngOnInit(){
    this.addremoveService.removedor$.subscribe(valor => this.removeComponent(valor))


  }

}
