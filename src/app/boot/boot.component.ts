import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";
import {DataService} from '../db/data.service';
import { noop, Observable, Observer, of , Subscriber} from 'rxjs';
import { map, switchMap, tap, mergeMap } from 'rxjs/operators';
import { Cidade } from '../db/cidade';
import { ProgressbarComponent } from 'ngx-bootstrap/progressbar';
import { AotSummaryResolver } from '@angular/compiler';
import * as AOS from 'aos';

interface DataSourceType {
	id: number;
	name: string;
	region: string;
  }

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss']
})
export class BootComponent implements OnInit {

	modalRef: BsModalRef;
	message: string;

	asyncSelected: string;
	dataSource: Observable<Cidade[]>;
	typeaheadLoading: boolean;

	search: string;
	suggestions$: Observable<Cidade[]>;
	errorMessage: string;

	constructor(private modalService: BsModalService, private spinner: NgxSpinnerService, private dataService1: DataService) {

		this.dataSource = new Observable((observer: Subscriber<string>) => {
			// Runs on every search
			observer.next(this.asyncSelected);
		  })
			.pipe(
			  mergeMap((token: string) => this.getStatesAsObservable(token))
			);
		}

		getStatesAsObservable(token: string): Observable<Cidade[]> {

		console.log(token	);
		  const query = new RegExp(token, 'i');

		  return of(
			this.dataService1.getCidades().filter((state: any) => {
			  return query.test(state.Nome);
			})
		  );
		}

		changeTypeaheadLoading(e: boolean): void {
		  this.typeaheadLoading = e;
		}






	dismissible = true;
	defaultAlerts: any[] = [
	  {
		type: 'success',
		msg: `You successfully read this important alert message.`
	  },
	  {
		type: 'info',
		msg: `This alert needs your attention, but it's not super important.`
	  },
	  {
		type: 'danger',
		msg: `Better check yourself, you're not looking too good.`
	  }
	];
	alerts = this.defaultAlerts;

	reset(): void {
	  this.alerts = this.defaultAlerts;
	}

	onClosed(dismissedAlert: any): void {
	  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
	}




	items = ['Item 1', 'Item 2', 'Item 3'];

	addItem(): void {
	  this.items.push(`Item ${this.items.length + 1}`);
	}

	openModal(template: TemplateRef<any>) {
	  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
	}

	confirm(): void {
	  this.message = 'Confirmed!';
	  this.modalRef.hide();
	}

	decline(): void {
	  this.message = 'Declined!';
	  this.modalRef.hide();
	}

  ngOnInit(): void {

		AOS.init();
		this.spinner.show();

		setTimeout(() => {
		/** spinner ends after 5 seconds */
		this.spinner.hide();
		}, 1000);



		this.suggestions$ = new Observable((observer: Observer<string>) => {
			observer.next(this.search);
		}).pipe(
			switchMap((query: string) => {
			if (query) {
				// using github public api to get users by name
				console.log("http-" + this.dataService1.getCidadesNomehttp(query))
				return this.dataService1.getCidadesNomehttp(query).pipe(
				map((data: Cidade[]) => data || []),
				tap(() => noop, err => {
					// in case of http error
					this.errorMessage = err && err.message || 'Something goes wrong';
				})
				);
			}

			//return of([]);
			})
		);

/*

		let posicao = document.getElementById("roundBrasil").offsetTop + 100 ;
		document.getElementById("roundBrasil").hidden = true;


		window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
		  if (document.body.scrollTop > posicao || document.documentElement.scrollTop > posicao) {
			document.getElementById("roundBrasil").hidden = false;
			document.getElementById("roundBrasil").classList.add("fadeInRight");
			document.getElementById("roundBrasil").classList.add("animated");

			document.getElementById("textRoud").innerText =  document.documentElement.scrollTop.toString();


		  }
		}
*/

  }

}
