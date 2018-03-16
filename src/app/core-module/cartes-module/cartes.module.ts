import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import {  ViewHomePage } from './pages/dimensions/view-homepage.component';
import { ViewListe } from './pages/liste/view-liste.component';
import { ViewBasic } from './pages/basic/view-basic.component';
import { ViewImageBasic } from './pages/image-basic/view-image-basic.component';
import { ViewVideo } from './pages/video/view-video.component';
import { ViewVraiFaux } from './pages/vrai-faux/view-vraifaux.component';
import { ViewRadioBouton } from './pages/radio-bouton/view-radio-bouton.component';
import { ViewDynamic } from './pages/dynamic/view-dynamic.component';

@NgModule({
	imports: [
		CommonModule,
		IonicPageModule.forChild(ViewHomePage)
	],
	declarations: [
		ViewHomePage,
		ViewListe,
		ViewBasic,
		ViewImageBasic,
		ViewVraiFaux,
		ViewVideo,
		ViewRadioBouton,
		ViewDynamic
	],
	entryComponents: [
		ViewHomePage,
		ViewListe,
		ViewBasic,
		ViewImageBasic,
		ViewVraiFaux,
		ViewVideo,
		ViewRadioBouton,
		ViewDynamic
	],
})
export class CartesModule { }
