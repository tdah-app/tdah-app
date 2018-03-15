import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { ViewMethodes } from './pages/methode/view-methodes.component';
import { ViewBasicMethode } from './pages/basic/view-basic-methode.component';
import { ViewImageBasicMethode } from './pages/image-basic/view-image-basic-methode.component';

@NgModule({
	imports: [
		CommonModule,
		IonicPageModule.forChild(ViewMethodes)
	],
	declarations: [
		ViewMethodes,
		ViewBasicMethode,
		ViewImageBasicMethode
	],
	entryComponents: [
		ViewMethodes,
		ViewBasicMethode,
		ViewImageBasicMethode
	],
})
export class MethodesModule { }
