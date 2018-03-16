import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { ViewMethodes } from './pages/methode/view-methodes.component';
import { ViewBasicMethode } from './pages/basic/view-basic-methode.component';
import { ViewTimer } from './pages/timer/view-timer.component';
import { ViewImageBasicMethode } from './pages/image-basic/view-image-basic-methode.component';

@NgModule({
	imports: [
		CommonModule,
		IonicPageModule.forChild(ViewMethodes)
	],
	declarations: [
		ViewMethodes,
		ViewBasicMethode,
		ViewImageBasicMethode,
		ViewTimer
	],
	entryComponents: [
		ViewMethodes,
		ViewBasicMethode,
		ViewImageBasicMethode,
		ViewTimer
	],
})
export class MethodesModule { }
