import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { Modulo1Module } from './modulo1/modulo1.module';
import { HomeComponent } from './home/home.component';
import { ObserverComponent } from './observer/observer.component';
import { Observador1Component } from './observer/observador1/observador1.component';
import { Observador2Component } from './observer/observador2/observador2.component';
import { Disparador2Component } from './observer/disparador2/disparador2.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { AddRemoveFilhoComponent } from './add-remove/add-remove-filho/add-remove-filho.component';
import { AddremoveService } from './add-remove/addremove.service';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { CondicaoFalsaDirective } from './condicao-falsa.directive';
import { PrefixoTestePipe } from './prefixo-teste.pipe';
import {FormModule } from './form/form.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootComponent } from './boot/boot.component';
import { NgxbootstrapModule } from './modules/ngxbootstrap/ngxbootstrap.module';
import { ParallaxDirective } from './diretivas/parallax.directive';
import { FadeDirective } from './diretivas/fade.directive';
import { AnimateComponent } from './animate/animate.component'
import { RfxParallaxModule } from 'rfx-parallax';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollSpyDirective } from './diretivas/scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    HomeComponent,
    ObserverComponent,
    Observador1Component,
    Observador2Component,
    Disparador2Component,
    AddRemoveComponent,
    AddRemoveFilhoComponent,
    DiretivasComponent,
    CondicaoFalsaDirective,
	PrefixoTestePipe,
	BootComponent,
	ParallaxDirective,
	FadeDirective,
	AnimateComponent,
	ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	Modulo1Module,
	FormModule,
	HttpClientModule,
	BrowserAnimationsModule,
	NgxbootstrapModule,
	RfxParallaxModule,
	NgxParallaxModule,
	NgxParallaxScrollModule,
	ScrollToModule.forRoot()
  ],
  providers: [AddremoveService,HttpClientModule, RfxParallaxModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
