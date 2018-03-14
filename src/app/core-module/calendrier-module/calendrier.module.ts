import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { ViewCalendrier } from './pages/view-calendrier.component';
import { AddEventPage } from './pages/add-event';


@NgModule({
	imports: [
		CommonModule,
	  	IonicPageModule.forChild(ViewCalendrier)
  	],
  	declarations: [
	  	ViewCalendrier,
	  	AddEventPage
  	],
  	entryComponents: [
	  	ViewCalendrier,
	  	AddEventPage
  	],	
})
export class CalendrierModule {}
