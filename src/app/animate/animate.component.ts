import { Component, OnInit } from '@angular/core';
import { RfxParallaxService } from 'rfx-parallax';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';
import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { CloudData, CloudOptions, ZoomOnHoverOptions } from 'angular-tag-cloud-module';

import * as AOS from 'aos';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss']
})
export class AnimateComponent implements OnInit {
	currentSection = 'section1';
	currentTerapia :string = "";
	isCollapsed = true;

	ngParallaxConf: IParallaxScrollConfig = {
		parallaxSpeed: 1,
		parallaxSmoothness: 1,
		parallaxDirection: 'reverse',
		parallaxTimingFunction: 'ease-in',
		parallaxThrottleTime: 80
	  };


	  zoomOnHoverOptions: ZoomOnHoverOptions = {
		scale: 1.3, // Elements will become 130 % of current zize on hover
		transitionTime: 0.4, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
		delay: 0.3 // Zoom will take affect after 0.8 seconds
		//color: "green"
	  };

	  options: CloudOptions = {
		// if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
		width: 0.99,
		// if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
		height: 500,
		overflow: false,
		strict : false,
		realignOnResize : true,
		randomizeAngle : true,
		delay : 30,
		font : "italic bold 8px Sans",
		zoomOnHover : this.zoomOnHoverOptions
		//background : "url(assets/images/background/zen.webp)"
	  };



	  data: CloudData[] = [
		{text: 'MASSAGEM RELAXANTE', weight: 10,color: 'black', external: true, rotate: 0 },
		{text: 'MASSAGEM TERAPÊUTICA', weight: 9, color: 'blue', rotate: -5},
		{text: 'MASSAGEM MODELADORA', weight: 5, color: 'red', rotate: 14},
		{text: 'MASSAGEM ESPORTIVA', weight: 7,color: 'maroon', external: true , rotate: 6},
		{text: 'DRENAGEM LINFÁTICA', weight: 8, color: 'blue', rotate: 4},
		{text: 'SHIATSU', weight: 10, color: 'red', rotate: 90},
		{text: 'TUI NA', weight: 4,color: 'aqua', external: true , rotate: -4},
		{text: 'Massagem 8', weight: 3, color: 'gray', rotate: -5},
		{text: 'Massagem 9', weight: 4, color: 'yelow', rotate: 17},
		{text: 'Massagem 10', weight: 10,color: 'black', external: true, rotate: 0 },
		{text: 'Massagem 11', weight: 5, color: 'beige', rotate: 1},
		{text: 'Massagem 12', weight: 3, color: 'coral', rotate: -1},
		{text: 'Massagem 13', weight: 7,color: 'black', external: true, rotate: 3 },
		{text: 'Massagem 14', weight: 8, color: 'indigo', rotate: -3},
		{text: 'Massagem 15', weight: 4, color: 'red', rotate: -10},
		{text: 'Massagem 16', weight: 6,color: 'darkblue', external: true , rotate: 2},
		{text: 'Massagem 17', weight: 8, color: 'blue', rotate: 0},
	  ];







  constructor(private rfxParallaxService: RfxParallaxService, private _scrollToService: ScrollToService) { }

  ngOnInit(): void {


	this.rfxParallaxService.initListeners();

	AOS.init();
  }

  logClicked(clicked: CloudData){
	this.currentTerapia = clicked.text;
    //alert(clicked.text);
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
