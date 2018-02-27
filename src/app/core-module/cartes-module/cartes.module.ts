import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './pages/home/home';
import { ViewHomePage } from './pages/dimensions/view-homepage.component';

@NgModule({
  imports: [
	  CommonModule,
	  IonicPageModule.forChild(ViewHomePage)
  ],
  declarations: [
	  ViewHomePage,
	  HomePage
  ],
  entryComponents: [
	  ViewHomePage,
	  HomePage
  ],	
})
export class CartesModule {}
