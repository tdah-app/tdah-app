import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './pages/home/home';

@NgModule({
  imports: [
	  CommonModule,
	  IonicPageModule.forChild(HomePage)
  ],
  declarations: [
	  HomePage
  ],
  entryComponents: [
	  HomePage
  ],	
})
export class CartesModule {}
