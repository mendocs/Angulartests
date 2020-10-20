import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromDataDrivenComponent } from './from-data-driven/from-data-driven.component';

const routes: Routes = [
	{path: "driven", component :FromDataDrivenComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
