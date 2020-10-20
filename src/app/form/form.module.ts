import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'

import { FormRoutingModule } from './form-routing.module';
import { FromDataDrivenComponent } from './from-data-driven/from-data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IputFieldComponent } from './iput-field/iput-field.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { IputFieldDirective } from './iput-field.directive';
import { FormDebugComponent } from './form-debug/form-debug.component';


@NgModule({
  declarations: [FromDataDrivenComponent, IputFieldComponent, ErrorMsgComponent, IputFieldDirective, FormDebugComponent],
  imports: [
    CommonModule,
	FormRoutingModule,
	ReactiveFormsModule,
	FormsModule
  ]
})
export class FormModule { }
