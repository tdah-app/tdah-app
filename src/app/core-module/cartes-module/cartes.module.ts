import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { ViewHomePage } from './pages/dimensions/view-homepage.component';
import { ViewListe } from './pages/liste/view-liste.component';
import { ViewBasic } from './pages/basic/view-basic.component';
import { ViewImageBasic } from './pages/image-basic/view-image-basic.component';
import { ViewVraiFaux } from './pages/vrai-faux/view-vraifaux.component';

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
	  	ViewVraiFaux
  	],
  	entryComponents: [
	  	ViewHomePage,
	 	ViewListe,
	  	ViewBasic,
	 	ViewImageBasic,
	  	ViewVraiFaux
  	],	
})
export class CartesModule {}
