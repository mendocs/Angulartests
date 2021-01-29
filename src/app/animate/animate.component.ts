import { Component, OnInit } from '@angular/core';
import { RfxParallaxService } from 'rfx-parallax';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import * as AOS from 'aos';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss']
})
export class AnimateComponent implements OnInit {
	currentSection = 'section1';

	ngParallaxConf: IParallaxScrollConfig = {
		parallaxSpeed: 1,
		parallaxSmoothness: 1,
		parallaxDirection: 'reverse',
		parallaxTimingFunction: 'ease-in',
		parallaxThrottleTime: 80
	  };


  constructor(private rfxParallaxService: RfxParallaxService, private _scrollToService: ScrollToService) { }

  ngOnInit(): void {


	this.rfxParallaxService.initListeners();

	AOS.init();
  }

  //(click)="triggerScrollTo()"
  public triggerScrollTo(destination : string) {

    const config: ScrollToConfigOptions = {
	  target: destination,
	  duration: 1800,
	  offset: -100
    };

    this._scrollToService.scrollTo(config);
  }

  onSectionChange(sectionId: string) {
	this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }




}
